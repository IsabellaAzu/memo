
# rails新しい場所に乗せ換える

　  
　  
## index
> ・<a href="#anc_1">新規リポジトリ作成</a>  
 ・<a href="#anc_2">プロジェクト作成から初期起動まで</a>  

　  
　  
<a id="anc_1"></a>
### 1. 新規リポジトリ作成
参考：http://note103.hateblo.jp/entry/2013/12/03/214351  
```erb
# ローカルの管理したい所に移動
$ cd ディレクトリ/リポジトリ名

# Gitリポジトリを新たに作成する
$ git init

# 何かファイル（無難に.gitignoreとか）をadd
$ git remote add origin https://ユーザー名@bitbucket.org/ユーザー名/リポジトリ名.git
$ git add -A
$ git commit -m '最初のコミット'
$ git push -u origin --all
```
　  
　  
<a id="anc_2"></a>
### 2. 必要なGEMなどをインストール
```
bundle install --path vendor/bundle
```

<a id="anc_3"></a>
### 3. 各種設定変更
#リポジトリ名/config/application.rb  
#リポジトリ名/config/database.yml  
#リポジトリ名/config/initializers/devise.rb  
#リポジトリ名/config/initializers/session_store.rb  
各ファイル内のリポジトリ名の部分を置き換える  
　  
　  
<a id="anc_4"></a>
### 4. プロジェクト作成から初期起動まで
```
$ rails new プロジェクト名 -d mysql # MySQLで（SQLightなら-dのオプション無しで）
$ mysql.server start # gemファイル内でmysql2のバージョン指定をしないとﾀﾞﾒかも
（/Gemfile：gem 'mysql2'　→　gem 'mysql2', '~> 0.3.20'）
（$ bundle update）
$ cd プロジェクト名
$ rails s # rails serverの省略形
$ rails s -p 8888 #localhost:8888のポート番号で起動
$ rake db:create
```
　  
　  
<a id="anc_5"></a>
### 5. aaa
```erb
aaa
```


