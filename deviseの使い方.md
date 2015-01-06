
## deviseの使い方

### 基本的な流れ
> 参考  
http://qiita.com/yutori_enginner/items/a0500f2f21b33b29beb6  
http://laugh-raku.com/archives/2913  
http://railsgirls.jp/devise/  

index

- - - 

### 1. インストール

```
# Gemfile
gem 'devise'

# ターミナル
$ bundle install
$ rails g devise:install
```

### 2. devise設定

##### Model作成（ログインユーザー管理のModel）

```
$ rails g devise User
$ rake db:migrate
```

/app/models/user.rb  
![](http://i.gyazo.com/62c8a41872aa49c8c96d27fdc5decc7b.png)  

> 参考  
https://github.com/plataformatec/devise/blob/v1.0/app/models/devise_mailer.rb


メール送信の場合は、/config/environments/development.rbを編集  


```
rails g controller home index
```


ユーザー認証を導入するために、各コントローラーに
```
# 共通コントローラ
# /app/controllers/application_controller.rb
before_filter :authenticate_user!
```

サーバー再起動  
Ctrl+C #サーバー停止  
```
# サーバー起動
$ rails s
```


ログイン失敗などのアラートを表示  
```html
app/views/layouts/application.html.erb  
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>
```


