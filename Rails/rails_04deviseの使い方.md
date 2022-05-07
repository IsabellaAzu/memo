
## deviseの使い方

### 基本的な流れ

#### 参考  
- 閉鎖 http://ruby-rails.hatenadiary.com/entry/20140801/1406907000  
- 閉鎖 http://devise.plataformatec.com.br/  
- https://www.sejuku.net/blog/13378
- https://zenn.dev/salvage0707/articles/railsx-setting-devise
- https://github.com/heartcombo/devise

#### index  
> <a href="#a1">1. インストール</a>  
<a href="#a2">2. devise設定</a>  
<a href="#a3">2. カスタマイズ</a>  

　  
　  

<a id="a1"></a>
### 1. インストール

```
# Gemfile
gem 'devise'

# ターミナル
$ bundle install
$ bundle exec rails g devise:install

　↓以下が出力される
===============================================================================

Depending on your application's configuration some manual setup may be required:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

     * Required for all applications. *

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

     * Not required for API-only Applications *

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

     * Not required for API-only Applications *

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views

     * Not required *

===============================================================================


【やること】

1.deviseのメール送信時のホスト名の指定：config/environments/development.rbに追記
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

2.root_urlを指定、コントローラ作成：config/routes.rbに追記してコントローラ作成
root "home#index"
$ bundle exec rails g controller Home index show --no-helper --no-assets
※/config/application.rbに
  config.generators do |g|
    g.helper false
    g.stylesheets false
    g.javascripts false
  end
を設定しておくと便利

3.ログイン関連のメッセージを表示する：app/views/layouts/application.html.erbに追記
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>

```
　  
　  


<a id="a2"></a>
### 2. devise設定

##### 2.1 Model作成（ログインユーザー管理のModel）

```
# model作成：model名は最初大文字の単数形
$ bundle exec rails g devise User
```

下記2つのファイルで、モジュールの設定を有効/無効にできる  

<a id="linkto_page_app_models_user"></a>
app/models/user.rbを確認  
![](http://i.gyazo.com/62c8a41872aa49c8c96d27fdc5decc7b.png)  

db/migrate/yyyymmddhhmmss_devise_create_users.rb  
![](http://i.gyazo.com/3757ad1b32c23e157337720ca717ac27.png)  

##### 各機能追加

- 公式 https://www.rubydoc.info/github/plataformatec/devise/master/Devise/Models/Lockable
- http://ruby-rails.hatenadiary.com/entry/20140801/1406907000  
- http://www.rubydoc.info/github/plataformatec/devise/Devise/Models  

<table>
<tr>
<th>Database Authenticatable</th>
<td>データベースに保存されたパスワードが正しいかどうかの検証とを行ってくれます。<br>
また暗号化も同時に行うためセキュリティ面でも安心できます。</td>
</tr>
<tr>
<th>Omniauthable</th>
<td>twitter、facebookなど現代のwebサービスで必須なSNS認証を行うためのモジュールです。<br>
SNS認証をする場合このほかにもgemを追加する必要が出てくるので注意が必要です。</td>
</tr>
<tr>
<th>Confirmable</th>
<td>登録後メールを送り、そのメールのURLをクリックすると本登録が完了する

> 参考  
・ http://gaku3601.hatenablog.com/entry/2014/08/23/165749  
・ http://qiita.com/k-shogo/items/d85905535a64e82a3b2b

<h4>1 メーラー用の設定</h4>

```Ruby
# /config/environments/development.rb
config.action_mailer.default_url_options = { :host => 'localhost:3000' }
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  :address => 'smtp.mail.rails.jp',
  :port => 465,
  :authentication => :plain,
  :user_name => 'rails@rails.jp',
  :password => 'rails'
}
```

<h4>2 下記コメントアウトを取る</h4>

```Ruby
# /app/models/user.rb
  devise ・・・, :confirmable
```

```Ruby
# /db/migrate/yyyymmddhhmmss_devise_create_users.rb  

## Confirmable
# t.string   :confirmation_token
# t.datetime :confirmed_at
# t.datetime :confirmation_sent_at
# t.string   :unconfirmed_email # Only if using reconfirmable
〜
# add_index :users, :confirmation_token,   unique: true
```

```Ruby
# /config/initializers/devise.rb
  config.mailer_sender = 'a@a.jp'
```

の後、  

```Ruby
$ bundle exec rails db:migrate:reset
```

> 参考  
rails db:resetとrails db:migrate:resetの違い  
・rails db:resetはdbをドロップし、db/schema.rbにもとづいてcreate  
・rails db:migrate:resetはdbをドロップし、db/migrate以下のファイルにもとづいてcreate  
http://memo.yomukaku.net/entries/iDhORCE

</td>
</tr>
<tr>
<th>Recoverable</th>
<td>パスワードをリセットするためのモジュールです。</td>
</tr>
<tr>
<th>Registerable</th>
<td>基本的にUser登録、編集、削除機能を作成することができます。</td>
</tr>
<tr>
<th>Rememberable</th>
<td>20日間ログインしたままにすると言った、永続ログイン機能を作成することができます。<br>
ログイン画面の下の方にチェックボックスがあって、それをチェックすると永続ログインが有効化するといったような仕組みを作ることができます。</td>
</tr>
<tr>
<th>Trackable</th>
<td>サインイン回数、サインイン時間など、ユーザーの分析に必要なデータを保存しておくことができます。<br>
サービスが成長するにはユーザーの分析が不可欠なので、有用な機能ですね。</td>
</tr>
<tr>
<th>Timeoutable</th>
<td>一定期間活動していないアカウントのログインを破棄する機能です。<br>
ログインしたままだとログイン情報がオンライン上に残ってしまい悪用されてしまう可能性もあります。<br>
セキュリティ面での向上を期待できる機能です。</td>
</tr>
<tr>
<th>Validatable</th>
<td>emailのフォーマットやパスワードの長さなど、一般的なバリデーションを追加してくれるモジュールです。</td>
</tr>
<tr>
<th>Lockable</th>
<td>ログインに何度も失敗すると、アカウントをロックすることができる機能です。<br>
こちらの機能もセキュリティ面で向上が期待できますね。<br>
https://kossy-web-engineer.hatenablog.com/entry/2021/08/03/224616</td>
</tr>
</table>

##### 2021.10.28 Railsアプリで実際にあった5つのセキュリティ問題と修正方法（翻訳）

- https://techracho.bpsinc.jp/hachi8833/2021_10_28/62858

※app/models/user.rbを書き換えたら、db/migrate/yyyymmddhhmmss_devise_create_users.rbも書き換える必要があります。（「2_2. View作成」を飛ばして、<a href="#atode">後で設定</a>しましょう）  
　↓
```
# databaseに反映
$ bundle exec rails db:create
$ bundle exec rails db:migrate
```


##### 2.2 View作成

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
        deviseにより自動で作成されてますので、rails routesで確認できます -->
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
※「user」の部分はモデル名に依存しているので、変更したら全て変更する  
例）user_signed_in　→　hoge_signed_in  
　  

##### 2.3 URIの確認  
```Ruby
# 確認
$ bundle exec rails routes
```

```Ruby
# 結果  
                  Prefix Verb   URI Pattern                                      Controller#Action
        new_user_session GET    /users/sign_in(.:format)                         devise/sessions#new
            user_session POST   /users/sign_in(.:format)                         devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)                        devise/sessions#destroy
           user_password POST   /users/password(.:format)                        devise/passwords#create
       new_user_password GET    /users/password/new(.:format)                    devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)                   devise/passwords#edit
                         PATCH  /users/password(.:format)                        devise/passwords#update
                         PUT    /users/password(.:format)                        devise/passwords#update
cancel_user_registration GET    /users/cancel(.:format)                          devise/registrations#cancel
       user_registration POST   /users(.:format)                                 devise/registrations#create
   new_user_registration GET    /users/sign_up(.:format)                         devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                            devise/registrations#edit
                         PATCH  /users(.:format)                                 devise/registrations#update
                         PUT    /users(.:format)                                 devise/registrations#update
                         DELETE /users(.:format)                                 devise/registrations#destroy
              home_index GET    /home/index(.:format)                            home#index
               home_show GET    /home/show(.:format)                             home#show
           project_tasks POST   /projects/:project_id/tasks(.:format)            tasks#create
            project_task DELETE /projects/:project_id/tasks/:id(.:format)        tasks#destroy
                projects GET    /projects(.:format)                              projects#index
                         POST   /projects(.:format)                              projects#create
             new_project GET    /projects/new(.:format)                          projects#new
            edit_project GET    /projects/:id/edit(.:format)                     projects#edit
                 project GET    /projects/:id(.:format)                          projects#show
                         PATCH  /projects/:id(.:format)                          projects#update
                         PUT    /projects/:id(.:format)                          projects#update
                         DELETE /projects/:id(.:format)                          projects#destroy
                    root GET    /                                                home#index
                         POST   /projects/:project_id/tasks/:id/toggle(.:format) tasks#toggle
```

<!--![](http://i.gyazo.com/ed07b0abf060017ce42a2489cc55c67a.png)  -->
※deviseコントローラは生成されない


##### 2.4 サーバー再起動  
サインインなどに進めないなぁ、と思ったら
```
#サーバー停止  
Ctrl+C  
# サーバー起動  
$ bundle exec rails s -p 3001
```
　  
　  

<a id="a3"></a>
### 3. カスタマイズ

> 参考  
- Railsの一番人気のログイン認証gemのDeviseのカスタマイズ方法  
　http://ruby-rails.hatenadiary.com/entry/20140804/1407168000  
- Rails – Deviseのコントローラをカスタマイズする方法  
```
rails g devise:controllers users

# config/route.rb
  devise_for :users, :controllers => {
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    registrations: 'users/registrations',
    confirmations: 'users/confirmations',
    unlocks: 'users/unlocks'
  }
```

　  
<a id="atode"></a>
##### 3.1 個別にViewをカスタマイズ

インストールした時にやらなかった項目です  
```
# 個別にビューを作成する場合
# /config/initializers/devise.rb  
config.scoped_views = true
# ビューの生成
$ bundle exec rails g devise:views
　↓
# deviseのviewをusersに割り当てる
$ bundle exec rails g devise:views users
```
> 参考：画面一覧  
ログイン画面  
app/views/users/sessions/new.html.erb  
ユーザ登録画面  
app/views/users/registrations/new.html.erb  
ユーザ情報変更画面  
app/views/users/registrations/edit.html.erb  
パスワードを変更するためのメールを送信する画面  
app/views/users/passwords/new.html.erb  
パスワードを変更する画面  
app/views/users/passwords/edit.html.erb  
メールによるConfirmをする画面  
app/views/users/confirmations/new.html.erb  
アカウントのアンロック画面  
app/views/users/unlocks/new.html.erb  


##### 3.2 ログインしていないユーザーを全ページで弾く（ユーザー認証を導入するために、共通コントローラーに）
```
# /app/controllers/application_controller.rb
before_action :authenticate_user!
```
　  
##### 3.3 パスワードの入力文字数の設定を変える
```Ruby
# /config/initializers/devise.rb
# 8文字以上128文字以下
config.password_length = 8..128
```
8は<%= @minimum_password_length %>で取得可能  


##### 3.5 確認メール文面の変更
/app/views/users/mailer以下を編集  
- アカウントの本人確認  
　confirmation_instructions.html.erb  
- パスワード忘れ  
　reset_password_instructions.html.erb  
- ロック解除  
　unlock_instructions.html.erb  

　  
##### 3.6 deviseのコントローラを独自のコントローラに変更($ rails routesの右側)
```Ruby
# /config/routes.rb

  devise_for :users

　　↓

  devise_for :users, :controllers => {
    :sessions => 'users/sessions',
    :passwords => 'users/passwords',
    :registrations => 'users/registrations'
  }
```
とすると、  

```Ruby
                   Prefix Verb   URI Pattern                     Controller#Action
        new_guser_session GET    /users/sign_in(.:format)        devise/sessions#new
            guser_session POST   /users/sign_in(.:format)        devise/sessions#create
    destroy_guser_session DELETE /users/sign_out(.:format)       devise/sessions#destroy
           guser_password POST   /users/password(.:format)       devise/passwords#create
       new_guser_password GET    /users/password/new(.:format)   devise/passwords#new
      edit_guser_password GET    /users/password/edit(.:format)  devise/passwords#edit
                          PATCH  /users/password(.:format)       devise/passwords#update
                          PUT    /users/password(.:format)       devise/passwords#update
cancel_guser_registration GET    /users/cancel(.:format)         devise/registrations#cancel
       guser_registration POST   /users(.:format)                devise/registrations#create
   new_guser_registration GET    /users/sign_up(.:format)        devise/registrations#new
  edit_guser_registration GET    /users/edit(.:format)           devise/registrations#edit
                          PATCH  /users(.:format)                devise/registrations#update
                          PUT    /users(.:format)                devise/registrations#update
                          DELETE /users(.:format)                devise/registrations#destroy
               home_index GET    /home/index(.:format)           home#index
                home_show GET    /home/show(.:format)            home#show
                     root GET    /                               home#index

　↓　devise/が

                   Prefix Verb   URI Pattern                     Controller#Action
        new_guser_session GET    /users/sign_in(.:format)        users/sessions#new
            guser_session POST   /users/sign_in(.:format)        users/sessions#create
    destroy_guser_session DELETE /users/sign_out(.:format)       users/sessions#destroy
           guser_password POST   /users/password(.:format)       users/passwords#create
       new_guser_password GET    /users/password/new(.:format)   users/passwords#new
      edit_guser_password GET    /users/password/edit(.:format)  users/passwords#edit
                          PATCH  /users/password(.:format)       users/passwords#update
                          PUT    /users/password(.:format)       users/passwords#update
cancel_guser_registration GET    /users/cancel(.:format)         users/registrations#cancel
       guser_registration POST   /users(.:format)                users/registrations#create
   new_guser_registration GET    /users/sign_up(.:format)        users/registrations#new
  edit_guser_registration GET    /users/edit(.:format)           users/registrations#edit
                          PATCH  /users(.:format)                users/registrations#update
                          PUT    /users(.:format)                users/registrations#update
                          DELETE /users(.:format)                users/registrations#destroy
               home_index GET    /home/index(.:format)           home#index
                home_show GET    /home/show(.:format)            home#show
                     root GET    /                               home#index

```
独自コントローラを用意  
http://www.tamurasouko.com/?p=929  
　  
##### 3.7 URI Patternの変更($ rails routesの左側)
```Ruby
config/routes.rb
devise_for :users, :path => 'accounts'
```


##### 3.8 日本語化、他言語化
> 参考  
https://github.com/IsabellaAzu/memo/blob/master/rails%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C.md#ax2_2



　  
- - -
　  

## deviseで遭った困った事

#### Deviseのサインアウト処理でNo route matches [GET] "/users/sign_out"となる問題の解決
http://kaorumori.hatenadiary.com/entry/20110907/1315466591  
```Ruby
# config/initializers/devise.rb
config.sign_out_via = :delete
　↓
config.sign_out_via = :get
```


## deviseあるある  

##### ・削除系は自分で作り込まないと
* まるっと消す　→ 依存関係で消すのが面倒
* 論理削除（削除フラグ）　→ カラム追加、他各種ページに削除フラグがfalseならと書かないと行けない
* Userの入力内容、どうする？
など



