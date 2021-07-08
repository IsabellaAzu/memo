
# 基本的な流れ3

> CRUDできるようにします  
http://ja.wikipedia.org/wiki/CRUD  

- <a href="#a2_1">2_1. projectを新規作成</a>  
- <a href="#a2_2">2_2. Validation機能の追加</a>  
- <a href="#a2_3">2_3. 編集機能</a>  
- <a href="#a2_4">2_4. 削除機能</a>  
- <a href="#a2_5">2_5. projectに、タスクの新規作成機能</a>  
- <a href="#a2_6">2_6. タスクの削除機能</a>  
- <a href="#a2_7">2_7. タスクにチェックボックを付ける</a>  
- <a href="#a2_8">2_8. タスクの数を表示</a>  


> rake routesの結果  
```
      Prefix Verb   URI Pattern                  Controller#Action
    projects GET    /projects(.:format)          projects#index    # project一覧取得
             POST   /projects(.:format)          projects#create   # project新規作成
 new_project GET    /projects/new(.:format)      projects#new      # project新規作成
edit_project GET    /projects/:id/edit(.:format) projects#edit     # project編集
     project GET    /projects/:id(.:format)      projects#show     # project閲覧
             PATCH  /projects/:id(.:format)      projects#update   # project更新
             PUT    /projects/:id(.:format)      projects#update   # project更新
             DELETE /projects/:id(.:format)      projects#destroy  # project削除
```

<a id="a2_1"></a>
### 2_1. projectを新規作成（new）

#### 新規プロジェクト作成のリンクをindexに追加

```html
# /views/projects/index.html.erb
<p><%= link_to "新規プロジェクト作成", new_project_path %></p>
```

#### 新規作成ページのアクション設定

```ruby
class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

end

　↓

class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new # newする
  end

end
```

#### 新規作成ページの用意

newした@projectにtitleのデータを入力してsubmitする  
※「:title」はDBのprojectテーブルのカラム名  

```html
# /views/projects/new.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <p><%= f.submit %></p>
<% end %>
```

#### 新規作成のアクションを用意

def createを追加

```ruby
class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

end

　↓

class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params) # project_paramsはformから渡されたもの
    @project.save
    redirect_to projects_path # projects_pathにリダイレクト
  end

  private

    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中で、title属性だけ許可します
      params[:project].permit(:title)
    end


end
```


<a id="a2_2"></a>
### 2_2. Validation機能の追加（modelに定義）

#### :titleは入力必須とする

```Ruby
# /app/models/project.rb
class Project < ActiveRecord::Base
end
　↓
class Project < ActiveRecord::Base
  validates :title, presence: true
end
```

#### 入力必須が何もない時の処理（Controllerに定義）

validatesは保存する時に発動する

```Ruby
# /controllers/projects_controller.rb（既存のcreateに追記）
class ProjectsController < ApplicationController

  〜

  def create
    @project = Project.new(project_params)
    @project.save
    redirect_to projects_path
  end

  〜

end

　↓

class ProjectsController < ApplicationController

  〜

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to projects_path
    else
      render 'new'
    end
  end

  〜

end

```

#### バリデーションエラーのメッセージを表示（View）

バリデーションにエラーがある場合、@project.errorsの中に入る

```html
# /views/projects/new.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <% if @project.errors.any? %>
    <p><%= @project.errors.inspect %></p>
  <% end %>
  <p><%= f.submit %></p>
<% end %>
```

> <%= @project.errors.inspect %>で下記が表示される
```
#<ActiveModel::Errors:0x007fe7e948c0f0 @base=#<Project id: nil, title: "", created_at: nil, updated_at: nil>, @messages={:title=>["can't be blank"]}>
```

上記デフォルトのエラーメッセージを変更する（Modelに定義）  
（追加で入力文字数のチェックも）
```Ruby
class Project < ActiveRecord::Base
  validates :title, presence: true
end
　↓
class Project < ActiveRecord::Base
  validates :title, presence: {message: "入力必須項目です"},length: {minimum: 3, message: "短過ぎ"}
end
```

@messages={:title=>["can't be blank"]}の中身を表示（デフォルトのエラーメッセージ）  
```html
# /views/projects/new.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <% if @project.errors.any? %>
    <p><%= @project.errors.messages[:title][0] %></p>
  <% end %>
  <p><%= f.submit %></p>
<% end %>
```

<a id="a2_3"></a>
### 2_3. 編集機能（edit）

#### indexに編集ページへのリンクを追加（View）
```html
# /views/projects/index.html.erb
<ul>
  <% @projects.each do |project| %>
  <li>
    [<%= link_to "編集", edit_project_path %>]
    <%= link_to project.title, project_path(project.id) %>
  </li>
  <% end %>
</ul>
```

#### 編集のアクションを用意

def newなどと同様に追記する

```Ruby
# /controllers/projects_controller.rb（controllerに定義）
def edit
  @project = Project.find(params[:id])
end
```

#### 編集ページの用意

/views/projects/new.html.erbのコピペでOK  
（form_forの機能で<%= f.submit %>のラベルが自動で変わる）  

```html
# /app/views/projects/edit.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <% if @project.errors.any? %>
    <p><%= @project.errors.messages[:title][0] %></p>
  <% end %>
  <p><%= f.submit %></p>
<% end %>
```


<a id="a2_4"></a>
### 2_4. 削除機能（destroy）

#### indexに削除機能のリンクを追加（View）

```html
# /views/projects/index.html.erb
<ul>
  <% @projects.each do |project| %>
  <li>
    [<%= link_to "編集", edit_project_path %>]
    [<%= link_to "削除", project_path(project.id), method: :delete, data: { confirm: "本当によろしいですか？" } %>]
    <%= link_to project.title, project_path(project.id) %>
  </li>
  <% end %>
</ul>
```


#### 削除のアクションを用意

def newなどと同様に追記する

```Ruby
# /controllers/projects_controller.rb（controllerに定義）
def destroy
  @project = Project.find(params[:id])
  @project.destroy
  redirect_to projects_path
end
```

<a id="a2_5"></a>
### 2_5. projectに、タスクの新規作成機能

#### model作成

```
# model名は最初大文字の単数形  
# done:booleanは終わったかどうか、project:referencesはprojectと紐付ける  
$ bundle exec rails g model Task title done:boolean project:references  

# projectと紐付けを忘れた場合（Modelの関連付けも手動になる）
$ bundle exec rails g migration AddProjectToCondition project:references
```

taskを登録した時にtaskのdoneはデフォルトでfalseとする  

```Ruby
# /db/migrate/201501xxxxxxxx_create_tasks.rb
class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.boolean :done, default: false # , default: falseを追記
      t.references :project, index: true
      t.timestamps null: false
    end
    add_foreign_key :tasks, :projects
  end
end
```

/db/migrate/201501xxxxxxxx_create_tasks.rbを元に
```
$ bundle exec rails db:migrate
```

#### controller作成  

```
# controller名は最初大文字の複数形
$ bundle exec rails g controller Tasks
```

#### TaskのModelとProjectのModelの関連付け  

```Ruby
# /app/models/task.rb
class Task < ActiveRecord::Base
  belongs_to :project # TaskのModelにproject:referencesと記載したため追記されている
end

　↓　Taskのモデルには自動でbelongs_to :projectが入るが、　 
　↓　ProjectのModelには自動で入らないので
　
# /app/models/project.rb
class Project < ActiveRecord::Base
  has_many :tasks # projectにtaskが複数あるので、「１対多」の関係で結びついている、という意味
  validates :title, presence: {message: "入力必須項目です"}, length: {minimum: 3, message: "短過ぎ"}
end
```

#### routingの設定

```Ruby
# /config/routes.rb
Rails.application.routes.draw do

  resources :projects

  root 'projects#index'

  〜

end

　↓

Rails.application.routes.draw do

  resources :projects do
    resources :tasks, only: [:create, :destroy]
  end

  root 'projects#index'

  〜

end
```

#### project詳細ページにtask一覧を作成

```Html
# /app/views/projects/show.html.erb
<ul>
<% @project.tasks.each do |task| %>
<li><%= task.title %></li>
<li>
	<%= form_for [@project, @project.tasks.build] do |f| %>
	<%= f.text_field :title %>
	<%= f.submit %>
	<% end %>
</li>
<% end %>
</ul>
```

#### taskのcontrollerを作成（create）

projectsのcontrollerからコピペして必要な部分を変更

```Ruby
# /app/controllers/tasks_controller.rb
class TasksController < ApplicationController
end

　↓

class TasksController < ApplicationController
  
    def create
      @project = Project.find(params[:project_id])
      @task = @project.tasks.create(task_params) # createは、newとsave
      redirect_to project_path(@project.id)
    end

    private

      # セキュリティ
      def task_params
        # フィルタリング：taskで渡ってきた中のもののうち、titleだけ引っ張ってきてね
        params[:task].permit(:title)
      end

end
```

<a id="a2_6"></a>
### 2_6. タスクの削除機能

#### project詳細ページに削除リンクを作成

index.html.erbから削除リンクを流用

```
[<%= link_to "削除", project_path(project.id), method: :delete, data: { confirm: "本当によろしいですか？" } %>]
```

```Html
# /app/views/projects/show.html.erb
<ul>
  <% @project.tasks.each do |task| %>
  <li>
  [<%= link_to "削除", project_task_path(task.project.id, task.id), method: :delete, data: { confirm:   "本当によろしいですか？" } %>]
  <%= task.title %>
  </li>
  <% end %>
  <li>
    <%# 決まり文句（@project、@project.tasks.buildの受け皿）。.buildはnewと一緒。 %>
    <%= form_for [@project, @project.tasks.build] do |f| %> 
    <%= f.text_field :title %>
    <%= f.submit %>
    <% end %>
  </li>
</ul>
```

#### taskのcontrollerを作成（destroy）
destroyアクションの追加
```Ruby
# /app/controllers/tasks_controller.rb
  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to project_path(params[:project_id])
  end
```

<a id="a2_7"></a>
### 2_7. タスクにチェックボックを付ける

#### チェックボックを追加

```html
# /app/views/projects/show.html.erb  
<%#
・'', '',：id,valueの設定。今回必要ないので空欄
・task.done：checkの状態
・{'data-id' => task.id, 'data-project_id' => task.project_id }：htmlに追加したい属性
%>
<%= check_box_tag '', '', task.done, {'data-id' => task.id, 'data-project_id' => task.project_id } %>

<%# checkboxをクリックした時の処理（jQuery使用） %>
<script type="text/javascript">
$(function(){
  // toggleアクション
  $("input[type=checkbox]").click(function(){
    $.post('/projects/'+ $(this).data('project_id') +'/tasks/'+ $(this).data('id') +'/toggle');
  });
});
</script>
```

#### routingの設定

```Ruby
# /config/routes.rbに追記
  # 特定の命令を、特定のアクションに結びつけたい
  post '/projects/:project_id/tasks/:id/toggle' => 'tasks#toggle' #tasksコントローラのtoggleアクション
```

#### controllerに定義

```Ruby
# /app/controllers/tasks_controller.rbに追記
  def toggle
    render nothing: true # このアクションは画面が切り替わる訳ではないので、テンプレート不要の設定をする
    @task = Task.find(params[:id])
    @task.done = !@task.done
    @task.save
  end
```

<a id="a2_8"></a>
### 2_8. タスクの数を表示

#### タスクの全数

```html
# /app/views/projects/show.html.erb  
<%= @project.tasks.count %>
```

#### タスクの残数（Modelに記述：検索条件を付けることができるため）

```Ruby
# /app/models/task.rb
  # scopeでunfinishedというscopeを定義、doneがfalseのものを検索条件として
  scope :unfinished, -> {where(done: false) }
```

```html
# /app/views/projects/show.html.erb  
<%= project.tasks.unfinished.count %>
```


## 次

<a href="https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_01%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C_4.md">次: 基本的な流れ4</a>

