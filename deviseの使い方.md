
## deviseの使い方


### 1. 基本的な流れ
> 参考  
http://ruby-rails.hatenadiary.com/entry/20140801/1406907000 

index

- - - 

### 2. インストール

```
# Gemfile
gem 'devise'

# ターミナル
$ bundle install
$ rails g devise:install

　↓以下が出力される
===============================================================================

Some setup you must do manually if you haven't yet:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:
     
       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

  4. If you are deploying on Heroku with Rails 3.2 only, you may want to set:

       config.assets.initialize_on_precompile = false

     On config/application.rb forcing your application to not access the DB
     or load models when precompiling your assets.

  5. You can copy Devise views (for customization) to your app by running:

       rails g devise:views

===============================================================================

【やること】

1.deviseのメール送信時のホスト名の指定：config/environments/development.rbに追記
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

2.root_urlを指定、コントローラ作成：config/routes.rbに追記してコントローラ作成
root "home#index"
rails g controller Home index show

3.ログイン関連のメッセージを表示する：app/views/layouts/application.html.erbに追記
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
![](http://i.gyazo.com/3757ad1b32c23e157337720ca717ac27.png)  

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
##### サーバー再起動  
```Ruby
# 確認
$ rake routes
```
![](http://i.gyazo.com/ed07b0abf060017ce42a2489cc55c67a.png)  
※deviseコントローラは生成されない

##### サーバー再起動  
サインインなどに進めないなぁ、と思ったら
```
#サーバー停止  
Ctrl+C  
# サーバー起動  
$ rails s
```

ユーザー認証を導入するために、共通コントローラーに
```
# /app/controllers/application_controller.rb
before_filter :authenticate_user!
```

- - -

### 3. カスタマイズ

> 参考
・Railsの一番人気のログイン認証gemのDeviseのカスタマイズ方法  
　http://ruby-rails.hatenadiary.com/entry/20140804/1407168000  
・Rails – Deviseのコントローラをカスタマイズする方法  
　http://www.tamurasouko.com/?p=929  


##### deviseにあるモジュール  

> 参考  
http://ruby-rails.hatenadiary.com/entry/20140801/1406907000  
http://www.rubydoc.info/github/plataformatec/devise/Devise/Models  

モジュール  
> 1. Database Authenticatable  
パスワードを暗号化してDBに保存する  
2. Omniauthable  
TwitterやFacebookのアカウントなどでユーザ登録したい場合は追加する  
3. Confirmable  
ユーザに仮登録メールを送信してメール内のリンクからアカウントを本登録させる  
4. Recoverable  
パスワードを忘れた時に、ユーザのパスワードをリセットし、リセット指示を送る  
5. Registerable  
自分のアカウントを削除することができる  
6. Rememberable  
クッキーからユーザーを覚えるためのトークンをクリアする管理をする  
7. Trackable  
サインイン時、IPアドレスをDBに保存する  
8. Timeoutable  
指定した期間で活動していないセッションが期限切れになる  
9. Validatable  
メールアドレスとパスワードの入力内容を検証する  
10. Lockable  
サインインを指定回数失敗した時にアカウントをロックする。メールで指定された期間後ロックを解除する  

##### aaa

（編集中）
<a id="atode"></a>
メール送信の場合は、/config/environments/development.rbを編集  
> 参考：devise_mailer.rb  
https://github.com/plataformatec/devise/blob/v1.0/app/models/devise_mailer.rb









- - -

## deviseあるある  

##### 1. 削除系は自分で作り込まないと
* Userの情報だけ消す？
* Userの入力内容、どうする？
など




