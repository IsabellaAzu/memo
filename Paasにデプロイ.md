
# ☆OpenShift

## Railsをデプロイ

### (1) OpenShift Setup（rhcコマンドが使える様になる）  
　https://developers.openshift.com/getting-started/osx.html#rhc-setup  
　http://qiita.com/tukiyo3/items/904cd2f0a64228645a09  
```
$ gem install rhc  
$ rhc setup  
　Enter the server hostname: |openshift.redhat.com| 空欄のままEnter  
　↓
登録メアド＋パスワード
　↓
Generate a token now? (yes|no) yes # yesを入力で終了  
# SSH keyが登録されていないとこの後色々聞かれる
　↓
$ git clone sshキーの登録したやつ
```

### (2) アプリ用意
ローカルのRubyのバージョンをrbenvで設定  
```
　$ rbenv local 2.0.0-p643
　# localでrails sが、rubyのバージョンに依存し使えなかった。  
```
・bitbucketのremoteリポジトリの登録（git pushとgit push originで複数にpushする）  
```
　# リポジトリの確認
　$ git remote -v
　# リモートリポジトリの設定
　$ git remote add push時の名前 https://ユーザー名@bitbucket.org/ユーザー名/リポジトリ名.git
```
・ドキュメントをインストールしない設定
```
　#ルートに.gemrcファイルを作成
　gem: --no-ri --no-rdoc
```
・.gitignoreの見直し  
・Gemfileの見直し  
　・turbolink回りのjs、ソース削除  
　　http://qiita.com/kazz187/items/12737363d62b9c91993c  
　　# /Gemfile（#gem 'turbolinks'）  
　　# /app/views/layouts/application.html.erb(属性２箇所)  
　　# /app/assets/javascripts/application.js（//= require turbolinksの部分）  
・コミット
```
　# openShiftへ
　$ git push origin
　# bitbucketへ
　$ git push bk
```


　 
## MySQL回り
```
#アプリのルートでDB情報を取得
http://stackoverflow.com/questions/19749599/openshift-how-to-remote-access-mysql  
$ rhc ssh アプリ名 # Connecting to xxxxxxxxxxxxxxx@アプリ名-ドメイン名.rhcloud.com
$ rhc port-forward -a アプリ名
$ ping アプリ名-ドメイン名.rhcloud.com
$ rhc ssh アプリ名 'echo $OPENSHIFT_MYSQL_DB_USERNAME'
$ rhc ssh アプリ名 'echo $OPENSHIFT_MYSQL_DB_PASSWORD'
$ rhc ssh アプリ名 'echo $OPENSHIFT_APP_NAME'
$ rhc ssh アプリ名 'echo $OPENSHIFT_MYSQL_DB_URL'
$ rhc ssh アプリ名 'echo $OPENSHIFT_MYSQL_DB_SOCKET'
```

下記でopenshiftのサーバー内に入れる
```
$ rhc port-forward -a アプリ名
$ rhc ssh アプリ名
```



### jenkinsとbitbucketを連携
・.ssh/configに権限が無い　→　代替手段としてGIT_SSHを利用  
http://www.techscore.com/blog/2013/09/26/git_ssh-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6bitbucket%E3%81%8B%E3%82%89%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%82%A2%E3%82%A6%E3%83%88/  
http://www.techscore.com/blog/2013/10/15/openshift-online-jenkins-bitbucket/  

- - - 

### 本作業
・必要なgemの追加（deviseなど）
・dbの設定など  
・rails基本的な流れ  
　https://github.com/IsabellaAzu/memo/blob/master/Rails/rails%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C.md  
　 
　 
- - - 

### 独自ドメイン（openShift＋お名前：有料）
http://workpiles.com/2014/11/openshift-domain-setting/  
　 
- - - 

### 参考
http://stackoverflow.com/questions/12657168/can-i-use-my-existing-git-repo-with-openshift  
　  
　  
- - - 
　  

　  
# ☆Heroku

## Railsをデプロイ

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



##### 6. Herokuにアプリをpush

```
$ git push heroku master
```

これで/.git/configに「4930.git」などの情報が下記の様に追記されます  
```
[remote "heroku"]
	url = https://git.heroku.com/xxx-xxx-nnnn.git
	fetch = +refs/heads/*:refs/remotes/heroku/*
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



