
# rails全部入り
Project管理というアプリがあったとしてよく使うCRUDのスニペットをまとめる

詳細は「[rails基本的な流れの後、よくやりそうなこと](https://github.com/IsabellaAzu/memo/blob/master/Rails/rails%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C%E3%81%AE%E6%AC%A1.md)」
　  
　　
- - -
　
## Model


__# command：マイグレーションファイルの作成__
```
# 親モデル
$ bundle exec rails g model Project label
# 子モデル（projectにtaskを紐付け）
$ bundle exec rails g model Task title done:boolean project:references
```


__# /db/migrate/201501xxxxxxxx_create_tasks.rb(マイグレーションファイル追加編集)__
```Ruby
t.boolean :done, default: false
# ※add_foreign_key :tasks, :projectsができない、errorになる。外部キーは後で追加。
```


__# /app/models/project.rb__
```Ruby
# 入力必須
class Project < ActiveRecord::Base
  has_many :tasks # projectにtaskが複数あるので、「１対多」の関係で結びついている、という意味
  validates :label, presence: {message: "入力必須項目です"},length: {minimum: 3, message: "短過ぎ"}
end
```


__# command：テーブル作成__
```
$ bundle exec rake db:migrate
```
　
- - -
　
## Controller


__# command__
```
$ bundle exec rails g controller Projects --no-helper --no-assets
$ bundle exec rails g controller Tasks --no-helper --no-assets
```


__# /config/routes.rb__
```Ruby
resources :projects do
  resources :tasks, only: [:create, :destroy]
end
post '/projects/:project_id/tasks/:id/toggle' => 'tasks#toggle' #tasksコントローラのtoggleアクション
```


__# /app/controllers/projects.rb__
```Ruby
  def index
    @projects = Project.all
  end
  
  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new # newする
  end

  def create
    @project = Project.new(project_params)
    if @project.save # バリデーション
      redirect_to projects_path
    else
      render 'new'
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to projects_path
    else
      render 'edit'
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path
  end

  def toggle
    render nothing: true # このアクションは画面が切り替わる訳ではないので、テンプレート不要の設定をする
    @task = Task.find(params[:id])
    @task.done = !@task.done
    @task.save
  end

  private

    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中で、label属性だけ許可します
      params[:project].permit(:label)
    end

```


__# /app/controllers/tasks.rb__
```Ruby
  def create
    @project = Project.find(params[:project_id])
    @task = @project.tasks.create(task_params) # createは、newとsave
    redirect_to project_path(@project.id)
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to project_path(params[:project_id])
  end

  private

    # セキュリティ
    def task_params
      # フィルタリング：taskで渡ってきた中のもののうち、titleだけ引っ張ってきてね
      params[:task].permit(:title)
    end
```
　
- - - 
　
## View
__# /app/views/projects/index.html.erb__
```Ruby
<% textDeleteConfirm = '削除しますよろしいですか？' %>
<% if @projects.size.zero? %>
  <p>ありません</p>
<% else %>
  <% @projects.each do |project| %>
    <p><%= link_to project.label, project_path(project.id) %> <%= link_to "編集", edit_project_path(project.id) %></p>
    <div>　x<%= link_to "削除", project_path(project.id), method: :delete %></div>
    <div>　x<%= link_to "削除（ブラウザデフォのpopup）", project_path(project.id), method: :delete, data: { confirm: textDeleteConfirm } %></li>
    <div>　x<a href="popup1" data-popupid="popup1" class="js_popup">削除（jsのpopup）</a>
      <div id="popup1" class="none">
        <p><%=textDeleteConfirm%></p>
        <%= link_to "削除する", project_path(project.id), method: :delete %>
      </div>
    </div>
    <style type="text/css">
    .none{display:none;}
    </style>
    <script type="text/javascript">
    $(function(){
      var js_popup = $('.js_popup');
      js_popup.bind('click',function(){
        var popupId = $(this).data('popupid');
        console.log(popupId);
        $('#'+popupId).toggleClass('none');
        return false;
      });
    });
    </script>
  <% end %>
<% end %>
<p><%= link_to "新規プロジェクト作成", new_project_path %></p>
```
__# show.html.erb__
```Ruby
<div class="mt10">
  <% if @project.tasks.size.zero? %>
      ありません
  <% else %>
    <%= @project.label %>（<%= @project.tasks.count %>件）
    <% @project.tasks.each do |task| %>
      <div>
        <%= check_box_tag '', '', task.done, {'data-id' => task.id, 'data-project_id' => task.project_id } %>
        <%= task.title %>　<%= link_to "削除", project_task_path(task.project.id, task.id), method: :delete, data: { confirm:   "本当によろしいですか？" } %>
      </div>
      <div>
          <%= form_for [@project, @project.tasks.build] do |f| %>
          <%= f.text_field :title %>
          <%= f.submit %>
          <% end %>
      </div>
    <% end %>
  <% end %>
</div>
※削除のｊｓの読み込みをお忘れなく
<script type="text/javascript">
$(function(){
  // toggleアクション
  $("input[type=checkbox]").click(function(){
    $.post('/projects/'+ $(this).data('project_id') +'/tasks/'+ $(this).data('id') +'/toggle');
  });
});
</script>
```
__# new.html.erb、edit.html.erb__
```Ruby
  <%= form_for @project do |f| %>
    <p><%= f.label :label %>　<%= f.text_field :label %></p>
    <% if @project.errors.any? %>
      <p><%= @project.errors.messages[:label][0] %></p>
    <% end %>
    <p><%= f.submit %></p>
  <% end %>
```

