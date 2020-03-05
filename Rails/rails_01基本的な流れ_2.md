

# 基本的な流れ2

「Project」という名のプロジェクトを作成していきます。  
データベースのデータを表示します  

- <a href="#a1_1">1_1. model作成</a>  
- <a href="#a1_2">1_2. データベース作成</a>  
- <a href="#a1_3">1_3. controller作成</a>  
- <a href="#a1_4">1_4. routing設定</a>  
- <a href="#a1_5">1_5. controllerにactionを作成</a>  
- <a href="#a1_6">1_6. viewを作成</a>  
- <a href="#a1_7">1_7. 再びrouting設定</a>  
- <a href="#a1_8">1_8. 詳細ページ作成</a>  
- <a href="#ax1_1">その他 Rails Guides</a>  
- <a href="#ax1_2">その他 共通テンプレの編集</a>  
- <a href="#ax1_3">その他 画像、css、javascriptの参照場所</a>  

<a id="a1_1"></a>
### 1_1. model作成

```
# model名は最初大文字の単数形
# 「rails generate model モデル名 カラム名:データ型 カラム名:データ型 ...」
$ bundle exec rails g model Project title # rails generate model Project title:stringの省略形
```

https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_88_3_model.md#マイグレーション関連  

<a id="a1_2"></a>
### 1_2. データベース作成(development/test/productionのすべてを作成)  

database.ymlの情報を元にテーブルを作成  

```
$ bundle exec rails db:create db:migrate

$ bundle exec rails db # 今使っているDBを確認
$ .schema # dbの中身を確認
$ exit
```
> 参考：rake dbコマンド一覧  
http://www.re-labo.com/hiroro-blog/2009/03/rake-db.html  
Railsのdb/schema.rbの役割  
http://qiita.com/k0kubun/items/491a9d9f2745335566e3  

##### pry（irbが置き換わっている）

http://ruby-rails.hatenadiary.com/entry/20141024/1414081224  
modelをインタラクティブにrubyを使って編集することができる

```
$ bundle exec rails c # rails consoleの省略形
a = Project.new(title: "project1") # aに新しいデータを代入
a.save # 保存
Project.create(title: "proj2") # createは、newとsaveを一緒にやってくれる
Project.all # Projectを全部見ることができる
```


<a id="a1_3"></a>
## 1_3. controller作成  

```
# controller名は最初大文字の複数形
$ bundle exec rails g controller Projects
$ bundle exec rails g controller Projects --no-helper --no-assets # 無駄な helper や assets を生成しない方法  

# 特定のフォルダ以下に作成する場合は、  
$ bundle exec rails g controller aaa::Projects --no-helper --no-assets  
```


<a id="a1_4"></a>
### 1_4. routing設定  

```
# /config/routes.rb
　resources :projects # projectに関するURIを生成
# 特定のフォルダ以下に作成した場合は、 
  resources :projects, controller: 'project/project_name', path: 'project'

$ bundle exec rails routes
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
> 参考：Railsのルーティングを極める  
http://techracho.bpsinc.jp/hachi8833/2014_02_17/15665

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

#### indexに詳細ページへのリンクを追加

```html
# /views/projects/index.html.erb
<ul>
  <% @projects.each do |project| %>
  <li><%= link_to project.title, project_path(project.id) %></li>
  <% end %>
</ul>
```

#### 詳細ページのアクションを追加

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

#### 詳細ページ作成

```html
# /views/projects/show.html.erb
<%= @project.title %>
```

・・・・・・・・・・・・・・・・・・・・・・・・・・  


### その他

<a id="ax1_1"></a>
#### Rails Guides  

http://guides.rubyonrails.org/getting_started.html  

<a id="ax1_2"></a>
#### 共通テンプレの編集  

記述したものは/app/views/layouts/application.html.erbの  
<%= yield %>に表示されている

#### ヘルパー

```
<%= image_tag "hoge.png" %>
<%= link_to "HOME", projects_path %>
<%= f.label :password, t("xxx.newpassword") %>
```
※link_toの「projects_path」はrake routesした時に出力される「Prefix」に「_path」を連結したもの


<a id="ax1_3"></a>
#### 画像、css、javascriptの参照場所  

/app/assets/以下の  

* images
* javascripts
* stylesheets


<a id="ax1_4"></a>
#### Railsのジェネレータで不要なファイルを作らせない  

```ruby
# config/application.rb
config.generators do |g|
  g.helper false
  g.stylesheets false
  g.javascripts false
end
```

##### Railsのジェネレータで不要なerror用divを作らせない  

```ruby
# config/application.rb
config.action_view.field_error_proc = Proc.new do |html_tag, instance| 
  html_tag
end
```

