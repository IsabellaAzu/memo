
## herokuでRailsアプリをデプロイ

https://devcenter.heroku.com/articles/getting-started-with-ruby#introduction  
基本的にここに書いてある通りに進める
> 参考  
http://railsgirls.jp/heroku/

- - - 

### アプリの状態（Local）
Herokuはgitにpushされたものが動くと思う。  
cloneしたあとにGemfileを書き換えてbundle installしたものを  
Herokuにdeployしても動かなかったため。


##### 1. Gemfileに記載がなければ追記をしてコミットしておく
```
ruby '2.1.5' # バージョン指定例

group :production do
  gem 'pg'
  gem 'rails_12factor'
end
```

##### 2. deployしたいアプリをclone
```
$ git clone リポジトリ
cd アプリ名
```

##### 3. dbの設定を.gitignoreしている人は
cloneしたアプリに下記を保存
```
/config/database.yml
```

- - -  

### Heroku

##### 1. Herokuアカウント取得

##### 2. HerokuにSSH Key登録

##### 3. Heroku Toolbeltのインストール

##### 4. Herokuにログイン
```
$ heroku login
```

##### 5. Herokuにアプリをadd
cloneしたディレクトリで  
```
$ heroku create
```
> 以下の様なメッセージが表示されます  
Creating polar-inlet-4930... done, stack is cedar-14  
http://polar-inlet-4930.herokuapp.com/ | https://git.heroku.com/polar-inlet-4930.git  
Git remote heroku added  

ここで/.git/configに下記が追記されます  
```
[remote "heroku"]
	url = https://git.heroku.com/xxx-xxx-nnnn.git
	fetch = +refs/heads/*:refs/remotes/heroku/*
```

##### 6. Herokuにアプリをpush
```
git push heroku master
```
> 以下の様なメッセージが表示されます  
Fetching repository, done.
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 876 bytes | 0 bytes/s, done.
Total 6 (delta 4), reused 0 (delta 0)
-----> Ruby app detected
-----> Compiling Ruby/Rails
-----> Using Ruby version: ruby-2.0.0
-----> Installing dependencies using 1.6.3
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
       Fetching gem metadata from https://rubygems.org/..........
       〜省略〜  
       Default types for Ruby  -> console, rake, web, worker  
-----> Compressing... done, 22.2MB  
-----> Launching... done, v8  
       http://polar-inlet-4930.herokuapp.com/ deployed to Heroku  
To git@heroku.com:polar-inlet-4930.git  
   a610ad2..8f35c57  master -> master  

※アプリの状態の1.をやっておかないと上記でWarningが出る。

##### 7. MySQLの設定反映
```
$ heroku rake db:migrate
```
※アプリの状態3.をやってからheroku createしないとダメ

##### 8. アプリの起動
```
$ heroku ps:scale web=1
```

##### 9. デプロイで生成されたURIでブラウザを起動
```
$ heroku open
```

##### 10. まさかのエラー！？

![](http://i.gyazo.com/86fe1a4615be2d3930d6833998249e21.png)  

ログを見てみましょう
```
$ heroku logs --tail
```

- - - 

### Herokuあるある

##### アプリは５個までしか作れない
heroku createしてGit remote heroku addedが表示されない場合は  
・https://dashboard.heroku.com/apps  
　でアプリを消す  
・/.git/configの下記を削除  
```  
[remote "heroku"]  
	url = https://git.heroku.com/xxx-xxx-nnnn.git  
	fetch = +refs/heads/*:refs/remotes/heroku/*  
```  
をやってから、
```  
$ heroku create
```  

##### アプリは毎回デプロイされる

* MySQLに登録したデータ（テキスト、画像など）は消える



