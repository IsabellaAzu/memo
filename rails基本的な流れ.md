

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
編集できるようにします

> index  
<a href="#a2_1">2_1. projectを追加できるようにする</a>  
<a href="#a2_2">2_2. </a>  
<a href="#a2_3">2_3. </a>  
<a href="#a2_4">2_4. </a>  
<a href="#a2_5">2_5. </a>  
<a href="#a2_6">2_6. </a>  
<a href="#a2_7">2_7. </a>  
<a href="#a2_8">2_8. </a>  
<a href="#ax2_1">その他 </a>  
<a href="#ax2_2">その他 </a>  

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
### 2_1. projectを追加できるようにする


##### 新規プロジェクト作成のリンクをindexに追加
```html
# /views/projects/index.html.erb
<%= link_to "新規プロジェクト作成", new_project_path %>
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
```html
# /views/projects/new.html.erb
<%= form_for @project do |f| %>
  <%= f.label :title %>
  <%= f.text_field :title %>
  <%= f.submit %>
<% end %>
```













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

#### Rails使えるサーバーどこ？  
> 参考  
アプリケーション専用サーバ  
http://sqale.jp/  
heroku  
https://www.heroku.com/  
http://blog.mah-lab.com/2013/05/16/heroku-commons-16/  

#### 練習するとしたら  
Rails newして、scaffoldしたものをリリースする練習  

#### assets周り  
<span style="color:pink;">超ハマるらしい！？</span>  
assets:precompile  
CSSやJSはこれやらないと動かない  
> 参考  
http://qiita.com/funnythingz/items/7bf4271ff8731347eaa8  
https://rails-assets.org/  
