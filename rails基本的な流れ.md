

##プロジェクト作成と準備
> 参考
http://dotinstall.com/lessons/basic_rails_v2/24901

### 1. プロジェクト作成
```
$ rails new プロジェクト名 # SQLightで
$ rails new プロジェクト名 -d mysql # MySQLで
$ cd プロジェクト名
$ rails s # rails serverの省略形
$ mysql.server start
$ rake db:create:all
```

### 2. 便利なgemをGemfileに追記（Pry等）
例えば  
Gemfileのgroup :development, :test doに下記４つを追記  
```
group :development, :test do
  gem 'pry-rails'          # rails cでirbの代わりにpryを使う
  gem 'pry-doc'            # methodを表示
  gem 'pry-stack_explorer' # デバッグを実施
  gem 'pry-byebug'         # スタックをたどれる
end
```

> 参考  
https://github.com/funnythingz/pins/blob/master/Gemfile  

インストール  
```
$ bundle install
```

- - -

##基本的な流れ(1)
例「Project」という名のプロジェクトを作成していきます。  
データベースのデータを表示します  

> index  
<a href="#a1_1">1_1. model作成</a>  
<a href="#a1_2">1_2. データベース作成</a>  
<a href="#a1_3">1_3. controller作成</a>  
<a href="#a1_4">1_4. routing設定</a>  
<a href="#a1_5">1_5. controllerにactionを作成</a>  
<a href="#a1_6">1_6. viewを作成</a>  
<a href="#a1_7">1_7. 再びrouting設定</a>  
<a href="#a1_8">1_8. 詳細ページ作成</a>  
<a href="#ax1_1">その他 共通テンプレの編集</a>  
<a href="#ax1_2">その他  画像、css、javascriptの参照場所</a>  


<a id="a1_1"></a>
### 1_1. model作成
```
# model名は最初大文字の単数形
$ rails g model Project title # rails generate model Project title:stringの省略形
```


<a id="a1_2"></a>
### 1_2. データベース作成(development/test/productionのすべてを作成)  
database.ymlの情報を元にテーブルを作成  
```
$ rake db:migrate

$ rails db # 今使っているDBを確認
$ .schema # dbの中身を確認
$ exit
```
> 参考：rake dbコマンド一覧  
http://www.re-labo.com/hiroro-blog/2009/03/rake-db.html  

##### pry（irbが置き換わっている）
modelをインタラクティブにrubyを使って編集することができる
```
$ rails c # rails consoleの省略形
a = Project.new(title: "project1") # aに新しいデータを代入
a.save # 保存
Project.create(title: "proj2") # createは、newとsaveを一緒にやってくれる
Project.all # Projectを全部見ることができる
```
> 参考：pryコマンド  
http://ruby-rails.hatenadiary.com/entry/20141024/1414081224  


<a id="a1_3"></a>
### 1_3. controller作成  
```
# controller名は最初大文字の複数形
$ rails g controller Projects
```
controllerのファイルとviewのファイルが生成される


<a id="a1_4"></a>
### 1_4. routing設定  
/config/routes.rb
```
resources :projects # projectに関するURIの様なものを自動生成
```
ターミナルで上記を反映  
```
$ rake routes
```

> 下記の様に出力される（後半の日本語コメントは出力されない）  
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
2行目の「    projects GET    /projects(.:format)          projects#index」の意味は  
GETの方式で/projectsで一覧を出すためのロジックは、  
projects controllerのindex Actionに記述しなさい、という意味  


<a id="a1_5"></a>
### 1_5. controllerにactionを作成  
projects Controllerにindex Actionを作成(Rubyの関数を書いていく)  
  
```ruby
# /app/controllers/projects_controller.rb  
class ProjectsController < ApplicationController
end

　↓

class ProjectsController < ApplicationController

  def index
    # @マークを付けた変数はviewの中でそのまま使える
    @projects = Project.all # Projectの全情報を持ってくる
  end

end
```


<a id="a1_6"></a>
### 1_6. viewを作成
/app/views/の中に、Controller名のフォルダの中に、アクション名のファイルを「.html.erb」形式で作成する  
→ /app/views/projects/index.html.erb  
```html
<ul>
  <% @projects.each do |project| %>
  <li><%= project.title %></li>
  <% end %>
</ul>
```

> 参考：Ruby制御構造
```
  オブジェクト.each do |変数|  
    変数  
    実行する処理など  
  end  
  <% @projects.each do |project| %>  
  <%= project.title %>  
  <% end %>  
```


<a id="a1_7"></a>
### 1_7. 再びrouting設定  
一覧をrootページにしたい  
/config/routes.rbに「root コントローラー名#アクション名」
```
root 'projects#index'
```


<a id="a1_8"></a>
### 1_8. 詳細ページ作成  
> 参考
http://dotinstall.com/lessons/basic_rails_v2/24911

##### indexに詳細ページへのリンクを追加
```html
# /views/projects/index.html.erb
<ul>
  <% @projects.each do |project| %>
  <li><%= link_to project.title, project_path(project.id) %></li>
  <% end %>
</ul>
```

##### 詳細ページのアクションを追加
```ruby
# /app/controllers/projects_controller.rb  
class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

end

　↓

class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id]) # Projectの中から１件だけ情報を持ってくる
  end

end
```

##### 詳細ページ作成
```html
# /views/projects/show.html.erb
<%= @project.title %>
```

・・・・・・・・・・・・・・・・・・・・・・・・・・  

<a id="ax1_1"></a>
### その他

##### 共通テンプレの編集  
記述したものは/app/views/layouts/application.html.erbの  
<%= yield %>に表示されている

##### ヘルパー
```
<%= image_tag "hoge.png" %>
<%= link_to "HOME", projects_path %>
```
※link_toの「projects_path」はrake routesした時に出力される「Prefix」に「_path」を連結したもの


<a id="ax1_2"></a>
##### 画像、css、javascriptの参照場所  
/app/assets/以下の  
* images
* javascripts
* stylesheets






- - -

##基本的な流れ(2)  
> CRUDできるようにします  
http://ja.wikipedia.org/wiki/CRUD  
※Readは基本的な流れ(1)の詳細ページ機能  

・・・・・・・・・・

> index  
<a href="#a2_1">2_1. projectを新規作成</a>  
<a href="#a2_2">2_2. Validation機能の追加</a>  
<a href="#a2_3">2_3. 編集機能</a>  
<a href="#a2_4">2_4. 削除機能</a>  
<a href="#a2_5">2_5. projectに、タスクの新規作成機能</a>  
<a href="#a2_6">2_6. タスクの削除機能</a>  
<a href="#a2_7">2_7. タスクにチェックボックを付ける</a>  
<a href="#a2_8">2_8. タスクの数を表示</a>  
<a href="#ax2_1">その他 パーシャル（共通化）</a>  

・・・・・・・・・・

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


##### 新規プロジェクト作成のリンクをindexに追加
```html
# /views/projects/index.html.erb
<p><%= link_to "新規プロジェクト作成", new_project_path %></p>
```


##### 新規作成ページのアクション設定
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

##### 新規作成ページの用意
newした@projectにtitleのデータを入力してsubmitする
```html
# /views/projects/new.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <p><%= f.submit %></p>
<% end %>
```

##### 新規作成のアクションを用意

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
      # フィルタリング：projectで渡ってきた中で、titleだけ引っ張ってきてね
      params[:project].permit(:title)
    end


end
```


<a id="a2_2"></a>
### 2_2. Validation機能の追加（modelに定義）

##### :titleは入力必須とする
```Ruby
# /app/models/project.rb
class Project < ActiveRecord::Base
end
　↓
class Project < ActiveRecord::Base
  validates :title,
  presence: true
end
```

##### 入力必須が何もない時の処理（Controllerに定義）
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

##### バリデーションエラーのメッセージを表示（View）

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

デフォルトのエラーメッセージを変更する（Modelに定義）  
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


<a id="a2_3"></a>
### 2_3. 編集機能（edit）

##### indexに編集ページへのリンクを追加（View）
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

##### 編集のアクションを用意
def newなどと同様に追記する
```Ruby
# /controllers/projects_controller.rb（controllerに定義）
def edit
  @project = Project.find(params[:id])
end
```

##### 編集ページの用意
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


##### indexに削除機能のリンクを追加（View）
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

##### 削除のアクションを用意
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

##### model作成
```
# model名は最初大文字の単数形  
# done:booleanは終わったかどうか、project:referencesはprojectと紐付ける  
$ rails g model Task title done:boolean project:references  
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
$ rake db:migrate
```

##### controller作成  
```
# controller名は最初大文字の複数形
$ rails g controller Tasks
```

##### TaskのModelとProjectのModelの関連付け  
```Ruby
# /app/models/task.rb
class Task < ActiveRecord::Base
  belongs_to :project # TaskのModelにproject:referencesと記載したため追記されている
end

　↓　Taskのモデルには自動でbelongs_to :projectが入るが、　 
　↓　ProjectのModelには自動で入らないので
　
# /app/models/project.rb
class Project < ActiveRecord::Base
  hasmany :tasks # projectにtaskが複数あるので、「１対多」の関係で結びついている、という意味
  validates :title, presence: {message: "入力必須項目です"}, length: {minimum: 3, message: "短過ぎ"}
end
```

##### routingの設定
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

##### routing反映  
```
$ rake routes
```

##### project詳細ページにtask一覧を作成
```Html
# /app/views/projects/show.html.erb
<ul>
<% @projects.tasks.each do |task| %><% end %>
<li><%= task.title %></li>
<li>
	<%= form_for [@project, project.tasks.build] do |f| %>
	<%= f.text_field :title %>
	<%= f.submit %>
	<% end %>
</li>
<% end %>
</ul>
```

##### taskのcontrollerを作成（create）
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

##### project詳細ページに削除リンクを作成
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
    <%# 決まり文句（@project、@project.tasks.buildの受け皿） %>
    <%= form_for [@project, @project.tasks.build] do |f| %> 
    <%= f.text_field :title %>
    <%= f.submit %>
    <% end %>
  </li>
</ul>
```

##### taskのcontrollerを作成（destroy）
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

##### チェックボックを追加
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

##### routingの設定
```Ruby
# /config/routes.rbに追記
  # 特定の命令を、特定のアクションに結びつけたい
  post '/projects/:project_id/tasks/:id/toggle' => 'tasks#toggle' #tasksコントローラのtoggleアクション
```

##### controllerに定義
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

##### タスクの全数
```html
# /app/views/projects/show.html.erb  
<%= project.tasks.count %>
```

##### タスクの残数（Modelに記述：検索条件を付けることができるため）
```Ruby
# /app/models/task.rb
  # scopeでunfinishedというscopeを定義、doneがfalseのものを検索条件として
  scope :unfinished, -> {where(done: false) }
```

```html
# /app/views/projects/show.html.erb  
<%= project.tasks.unfinished.count %>
```


・・・・・・・・・・・・・・・・・・・・・・・・・・  

<a id="ax2_1"></a>
### その他

##### パーシャル（共通化）  
DRYの原則に則って同じ部品の共通化する方法で、  
_呼び出し名.html.erbに共通部分を記述し、  
共通部分を<%= render 'form' %>で上記を呼び出す（includeみたいなもの）

```html
# /app/views/projects/edit.html.erb
# /app/views/projects/new.html.erb
<%= render 'form' %>
```

パーシャルに共通部品を記述
```html
# /app/views/projects/_form.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <% if @project.errors.any? %>
    <p><%= @project.errors.messages[:title][0] %></p>
  <% end %>
  <p><%= f.submit %></p>
<% end %>
```

##### before_action（共通化）  
DRYの原則に則って同じ部品の共通化する方法で、  
controllerの中のアクションの重複内容をまとめて処理  
どのアクションよりも先に実行される（after_actionもあるよ）
```Ruby
# 記述方法
before_action :関数名
# 他から参照されないのであればprivateの中に定義
private
  def 関数名
    共通化したい処理
  end

# 全てのアクションに対して
before_action :set_project
# 個別のアクションに対して
before_action :set_project, only: [:show, :edit, :update, :destroy]

private
  def set_project
    @project = Project.find(params[:id])
  end
```  

```Ruby
# /controllers/projects_controller.rb（controllerに定義）

class ProjectsController < ApplicationController

  # 一覧表示
  def index
    @projects = Project.all
  end
  
  # 詳細表示
  def show
    @project = Project.find(params[:id])
  end
  
  # 新規作成
  def new
    @project = Project.new
  end
  
  # create
  def create
    @project = Project.new(project_params) # project_paramsはformから渡されたもの
    if @project.save
      redirect_to projects_path # projects_pathにリダイレクト
    else
      render 'new'
    end
  end

  # 編集
  def edit
    @project = Project.find(params[:id])
  end

  # 更新
  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to projects_path
    else
      render 'edit'
    end
  end
  
  # 削除
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path
  end

  private

    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中のもののうち、titleだけ引っ張ってきてね
      params[:project].permit(:title)
    end

end

　↓

class ProjectsController < ApplicationController

  # 共通処理before
  before_action :set_project, only:[:show, :edit, :update, :destroy]

  # 一覧表示
  def index
    @projects = Project.all
  end
  
  # 詳細表示
  def show
  end
  
  # 新規作成
  def new
    @project = Project.new
  end
  
  # create
  def create
    @project = Project.new(project_params) # project_paramsはformから渡されたもの
    if @project.save
      redirect_to projects_path # projects_pathにリダイレクト
    else
      render 'new'
    end
  end
  
  # 編集
  def edit
  end
  
  # 更新
  def update
    if @project.update(project_params)
      redirect_to projects_path
    else
      render 'edit'
    end
  end
  
  # 削除
  def destroy
    @project.destroy
    redirect_to projects_path
  end
  
  private
  
    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中のもののうち、titleだけ引っ張ってきてね
      params[:project].permit(:title)
    end
  
    def set_project
      @project = Project.find(params[:id])
    end


end
```

- - -

## なんでやねんポイント

* 「:」が前に付いたり、そうでなかったり
* 大文字だったり小文字だったり、複数形だったり単数形だったり
* 「,」で区切る、と思いきやそうでなかったり（hasmany :tasks）
* projectとtaskがリレーショナルになって、引数、やドットシンタックスや:titleなど慣れないと値の与え方がよくわかっていない。

- - -

## 将来の課題（要整理）  

### 運用  

サーバーにアップして動くのはPHPまで。  
Nginx、unicorn、capistrano、ログの知識が必要  
サービス動いた状態でデプロイ（メンテ入れる？）  
※Capistranoはjenkinsとは違う  

> 参考  
【Capistrano3】  
入門 Capistrano 3  
http://labs.gree.jp/blog/2013/12/10084/  
Capistrano 3系でRails4.1のデプロイ[rbenv][rvm][ruby2.1]  
http://morizyun.github.io/blog/capistrano3-rails-deploy-multi-rbenv/  
Capistrano3でrailsをdeployしてみる  
http://qiita.com/ea54595/items/12ab7b3a8213b35cca10  
【heroku】  
Rails4でheroku Pushまでの詳細手順 [Haml/bootstrap 3.0/postgresql or MySQL]  
http://morizyun.github.io/blog/heroku-rails4-postgresql-introduction/
Heroku に Rails アプリをアップ  
http://railsgirls.jp/heroku/  
herokuでデプロイ.md
https://github.com/IsabellaAzu/memo/blob/master/heroku%E3%81%A7%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4.md


#### Rails使えるサーバーどこ？  
> 参考  
アプリケーション専用サーバ  
http://sqale.jp/  
heroku  
https://www.heroku.com/  
http://blog.mah-lab.com/2013/05/16/heroku-commons-16/  

#### 練習するとしたら  
Heroku!
Rails newして、scaffoldしたものをリリースする練習  

#### assets周り  
<span style="color:pink;">超ハマるらしい！？</span>  
assets:precompile  
CSSやJSはこれやらないと動かない  
> 参考  
http://qiita.com/funnythingz/items/7bf4271ff8731347eaa8  
https://rails-assets.org/  

#### VPSとか辛そう
> 参考  
VPSだと
http://vps.sakura.ad.jp/specification/#target_spec
http://qiita.com/tadatti/items/d0f1d08d1cc4c8275376
http://moji.yayugu.net/articles/server_setting.html
でもsqaleなら月額940円
http://blog.inouetakuya.info/entry/20121125/1353839740
