
# rails_スニペット
Project管理というアプリがあったとしてよく使うCRUDのスニペットをまとめる

rails基本的な流れの後、よくやりそうなこと  
https://github.com/IsabellaAzu/memo/blob/master/Rails/rails%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C%E3%81%AE%E6%AC%A1.md

## Mode
```
$ bundle exec rails g model Project label
```
```
# /app/models/project.rb
# 入力必須
class Project < ActiveRecord::Base
  validates :label, presence: {message: "入力必須項目です"},length: {minimum: 3, message: "短過ぎ"}
end
```

## Controller

```
bundle exec rails g controller Projects --no-helper --no-assets
```
```
# /config/routes.rb
resources :projects
```
```
# /app/controllers/projects.rb
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

  private

    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中で、label属性だけ許可します
      params[:project].permit(:label)
    end

```


## View
```
# /app/views/projects/index.html.erb

<% textDeleteConfirm = '削除しますよろしいですか？' %>

<% if @memos.size.zero? %>
  <p>ありません</p>
<% else %>
  <% @projects.each do |project| %>
    <p><%= link_to project.label, project_path(project.id) %> <%= link_to "編集", edit_project_path(project.id) %></p>
    <div>　x<%= link_to "削除", memo_path(memo.id), method: :delete %></div>
    <div>　x<%= link_to "削除（ブラウザデフォのpopup）", memo_path(memo.id), method: :delete, data: { confirm: textDeleteConfirm } %></li>
    <div>　x<a href="popup1" data-popupid="popup1" class="js_popup">削除（jsのpopup）</a>
      <div id="popup1" class="none">
        <p><%=textDeleteConfirm%></p>
        <%= link_to "削除する", memo_path(memo.id), method: :delete %>
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

```
# show.html.erb
  <%= @project.label %>
```

```
# new.html.erb
# edit.html.erb
  <%= form_for @project do |f| %>
    <p><%= f.label :label %>　<%= f.text_field :label %></p>
    <% if @project.errors.any? %>
      <p><%= @project.errors.messages[:label][0] %></p>
    <% end %>
    <p><%= f.submit %></p>
  <% end %>
```

