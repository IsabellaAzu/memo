

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

> 参考：Railsでカラムのデータ型を変更する場合の手順  
https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&sqi=2&ved=0CDcQFjAE&url=http%3A%2F%2Fblog.jnito.com%2Fentry%2F20120514%2F1336951768&ei=6YK-VIDQKYPDmwXivoGoCg&usg=AFQjCNG3Xr6JaoHp-pOZmurl52AT8nv8Zw&sig2=eH76S7nwMYjykmYn-DmeJA&bvm=bv.83829542,d.dGY&cad=rja  

#### データ型(Railsの場合、databaseに合わせて下記を内部的に変換する)

<table>
<tr>
<td>マイグレーション</td>
<td>MySQL</td>
<td>Ruby</td>
<td>出力例</td>
</tr>
<tr>
<td>integer（整数）</td>
<td>int(11)</td>
<td>Fixnum</td>
<td></td>
</tr>
<tr>
<td>float（浮動小数）</td>
<td>float</td>
<td>Float</td>
<td></td>
</tr>
<tr>
<td>decimal（制度の高い小数）</td>
<td>decimal(10,0)</td>
<td>BigDecimal</td>
<td></td>
</tr>
<tr>
<td>string（文字列）</td>
<td>varchar(255)</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>text（長い文字列）</td>
<td>text</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>binary（バイナリデータ）</td>
<td>blob</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>date（日付）</td>
<td>date</td>
<td>Date</td>
<td>YYYY-MM-DD</td>
</tr>
<tr>
<td>datetime（日時）</td>
<td>datetime</td>
<td>Time</td>
<td>YYYY-MM-DD HH:MM:SS</td>
</tr>
<tr>
<td>time（時間）</td>
<td>time</td>
<td>Time</td>
<td>HH:MM:SS</td>
</tr>
<tr>
<td>timestamp（より細かい日時）</td>
<td>datetime</td>
<td>Time</td>
<td>YYYY-MM-DD HH:MM:SS</td>
</tr>
<tr>
<td>boolean（Boolean型(true or false)）</td>
<td>tinyint(1)</td>
<td>TrueClass/FalseClass</td>
<td></td>
</tr>
<tr>
<td>references（外部キー）</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

| Field           | Type          | Null | Key | Default | Extra          |  
|:----------------|:--------------|:-----|:----|:--------|:---------------|  
| id              | int(11)       | NO   | PRI | NULL    | auto_increment |  
| field_integer   | int(11)       | YES  |     | NULL    |                |  
| field_decimal   | decimal(10,0) | YES  |     | NULL    |                |  
| field_float     | float         | YES  |     | NULL    |                |  
| field_string    | varchar(255)  | YES  |     | NULL    |                |  
| field_text      | text          | YES  |     | NULL    |                |  
| field_binary    | blob          | YES  |     | NULL    |                |  
| field_date      | date          | YES  |     | NULL    |                |  
| field_datetime  | datetime      | YES  |     | NULL    |                |  
| field_timestamp | datetime      | YES  |     | NULL    |                |  
| field_time      | time          | YES  |     | NULL    |                |  
| field_boolean   | tinyint(1)    | YES  |     | NULL    |                |  

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

