
# rails新しい場所に乗せ換える

　  
　  
## index
> ・<a href="#anc_1">1. 新規リポジトリ作成</a>  
 ・<a href="#anc_2">2. 必要なGEMなどをインストール</a>  
 ・<a href="#anc_2">3. 各種設定変更</a>  
 ・<a href="#anc_2">4. プロジェクト作成から初期起動まで</a>  

　  
　  
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
各ファイル内のリポジトリ名の部分を置き換える  
リポジトリ名/config/application.rb  
リポジトリ名/config/database.yml  
リポジトリ名/config/initializers/devise.rb  
リポジトリ名/config/initializers/session_store.rb  
　  
　  
<a id="anc_4"></a>
### 4. プロジェクト作成から初期起動まで
```
$ rake db:create
$ rake db:migrate # 不要なmigrationファイルが無い様に。
$ rails s -p 1234 #localhost:1234のポート番号で起動
```
　  
　  
<a id="anc_5"></a>
### 5. 動作確認
しましょうw


