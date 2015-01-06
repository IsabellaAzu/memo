
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
gem devise
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


















