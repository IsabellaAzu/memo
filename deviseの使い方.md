
## deviseの使い方

（編集中）

### 基本的な流れ
> 参考  
http://ruby-rails.hatenadiary.com/entry/20140801/1406907000 

index

- - - 

### 1. インストール

```
# Gemfile
gem 'devise'

# ターミナル
$ bundle install
$ rails g devise:install

　↓
===============================================================================

Some setup you must do manually if you haven't yet:

  1.「deviseのメール送信時のホスト名の指定」
     Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:
     
       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. 「root_urlを指定」
     Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"
       # root "home#index"じゃダメなのかな？「to:」ってなんだ？
       コントローラを作成：Homeコントローラにindexとshowの2つのアクションを定義（アクセス制限で使用するため）
       rails g controller Home index show

  3. 「ログイン関連のメッセージを表示する場合」
     Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

  4. If you are deploying on Heroku with Rails 3.2 only, you may want to set:

       config.assets.initialize_on_precompile = false

     On config/application.rb forcing your application to not access the DB
     or load models when precompiling your assets.

  5. 「Viewをカスタマイズしたいときに必要」
     You can copy Devise views (for customization) to your app by running:

       rails g devise:views

===============================================================================

1.config/environments/development.rbに追記
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

2.config/routes.rbに追記してコントローラ作成
root "home#index"
rails g controller Home index show

3.app/views/layouts/application.html.erbに追記
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>

```

### 2. devise設定

##### Model作成（ログインユーザー管理のModel）

```
# model作成：model名は最初大文字の単数形
$ rails g devise User
```
下記2ファイルで、モジュールの設定を有効/無効にできる  
app/models/user.rbを確認  
![](http://i.gyazo.com/62c8a41872aa49c8c96d27fdc5decc7b.png)  
db/migrate/yyyymmddhhmmss_devise_create_users.rb  

※app/models/user.rbを書き換えたら、db/migrate/yyyymmddhhmmss_devise_create_users.rbも書き換える必要があります。  
（<a href="#atode">後で設定</a>しましょう）
　↓
```
# databaseに反映
$ rake db:migrate
```


##### View作成

全ての画面の上部に、  
・ログインしていない場合は、「サインイン」と「ログイン」のリンク  
・ログインしている場合は、「プロフィール変更」と「ログアウト」のリンク  
を表示させるようにします。  

```html
# app/views/layouts/application.html.erb
<header>
  <nav>
    <!-- user_signed_in? はユーザがログインしているか調べるdeviseのHelperメソッド -->
    <% if user_signed_in? %> 
      <!-- current_user は現在ログインしているUserオブジェクトを返すdeviseのHelperメソッド -->
      <!-- *_path はUserモデルを作成したときに、
        deviseにより自動で作成されてますので、rake routesで確認できます -->
      Logged in as <strong><%= current_user.email %></strong>.
      <%= link_to 'プロフィール変更', edit_user_registration_path %> |
      <%= link_to "ログアウト", destroy_user_session_path, method: :delete %>
    <% else %>
      <%= link_to "サインイン", new_user_registration_path %> |
      <%= link_to "ログイン", new_user_session_path %>
    <% end %>
  </nav>
</header>
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>
```










（編集中）

メール送信の場合は、/config/environments/development.rbを編集  

> 参考：devise_mailer.rb  
https://github.com/plataformatec/devise/blob/v1.0/app/models/devise_mailer.rb


（編集中）

```
rails g controller home index
```

<a id="atode"></a>
ユーザー認証を導入するために、各コントローラーに
```
# 共通コントローラ
# /app/controllers/application_controller.rb
before_filter :authenticate_user!
```

サーバー再起動  
```
#サーバー停止  
Ctrl+C  
# サーバー起動  
$ rails s
```


ログイン失敗などのアラートを表示  
```html
app/views/layouts/application.html.erb  
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>
```



- - -

## deviseあるある  

##### 1. 削除系は自分で作り込まないと
* Userの情報だけ消す？
* Userの入力内容、どうする？
など




