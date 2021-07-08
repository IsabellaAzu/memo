



# 基本的な流れ

- プロジェクト作成
- 便利なgemをGemfileに追記

　  
　  
## プロジェクト作成

```
bundlerはシステムのglobalに、
それ以外はシステムの/vendor/bundleに。

その場合、
rails
　↓
bundle exec rails 〜
になる
```

### Rails環境構築

2019.08.01 rails newするときによく使うオプションと、rails newした後によく行う設定  
https://qiita.com/jun_jun_jun/items/dd260c43387a8e17803d  

2018.08.08 Railsでパーシャルを切り出すときはインスタンス変数をローカル変数にする  
https://mom0tomo.hateblo.jp/entry/2018/08/08/211238  

2019.11.15 Action Mailer でメール送信機能をつくる  
https://qiita.com/annaaida/items/81d8a3f1b7ae3b52dc2b  

2019.09.14 【Rails】Rails 6.0 x Docker x MySQLで環境構築  
https://qiita.com/nsy_13/items/9fbc929f173984c30b5d  

2019.09.27 Rails 6 + MySQL on Dockerの環境を秒速で構築する  
https://masaki.blog/rails6-on-docker/  


```
bundle init
bundle config set --local path 'vendor/bundle'
bundle config --local build.mysql2 "--with-cppflags=-I/usr/local/opt/openssl@1.1/include"
bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl@1.1/lib"
bundle install

rails new . # 現在のディレクトリで
bundle exec rails new プロジェクト名 # SQLightで
bundle exec rails new プロジェクト名 -B -C -S -J --database=mysql --skip-coffee --skip-sprockets --skip-test

# 最低限で始める(devise周りは足りない)
bundle exec rails new . -B -C -S -J -M --database=mysql --skip-yarn --skip-coffee --skip-sprockets --skip-turbolinks --skip-webpack-install --skip-action-text --skip-active-storage --skip-action-cable --skip-action-mailer --skip-action-mailbox --skip-test --skip-system-test --skip-active-job

# deviseを使った最低限で
bundle exec rails new . -B -C -S -J -M --database=mysql --skip-yarn --skip-coffee --skip-sprockets --skip-turbolinks --skip-webpack-install --skip-action-text --skip-active-storage --skip-action-cable  --skip-action-mailbox --skip-test --skip-system-test 

cd プロジェクト名
bundle install --path vendor/bundle
```
<a href="https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_04devise%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9.md">→ deviseのインストールへ</a><br>




<br>
<table>
<tr>
<th>rails new のオプション</th>
<th>効能</th>
</tr>
<tr>
<td>--api</td>
<td>APIとして利用するapp向けの小さい構成</td>
</tr>
<tr>
<td>--database=mysql</td>
<td>データベースの指定、今回はmysql.</td>
</tr>
<tr>
<td>--skip-yarn	</td>
<td>
Yarnを利用しない<br>
https://qiita.com/shifumin/items/f4f4ea68d9963dbe9ca2<br>
npmよりyarnの方が良い！<br>
https://qiita.com/lelouch99v/items/c97ff951ca31298f3f24<br>
yarnとは<br>
JavaScriptのパッケージマネージャ<br>
2016年にFaceBookが公開した<br>
npmと互換性がある = 同じpackage.jsonが使える<br>
npm vs yarnどっち使うかの話<br>
https://qiita.com/jigengineer/items/c75ca9b8f0e9ce462e99
</td>
</tr>
<tr>
<td>-B</td>
<td>bundle installを最初はかけない。newしたあとに追記などを行うことがあるので指定。<br>
例: bundle install --path vendor/bundle -j4<br>
 -j4(もしくは--jobs=4): bundle installを並列処理で実行できる<br>
 https://maetoo11.hatenablog.com/entry/2016/03/04/144216
</td>
</tr>
<tr>
<td>-M</td>
<td>action mailerのセットアップをスキップ。<br>
https://www.sejuku.net/blog/48739
</td>
</tr>
<tr>
<td>-P</td>
<td>puma関連のファイルセットアップをスキップ。<br>
https://re-engines.com/2018/07/30/rails-puma-deploy/
</td>
</tr>
<tr>
<td>-C</td>
<td>action cable関連のセットアップをスキップ。</td>
</tr>
<tr>
<td>-S</td>
<td>sprockets(CoffeeScriptやSASSのトランスパイル)関連のセットアップをスキップ。</td>
</tr>
<tr>
<td>-J</td>
<td>javascript関連のセットアップをスキップ。</td>
</tr>
<tr>
<td>--skip-yarn</td>
<td>yarnのセットアップをスキップ。フロント実装をしないなどであれば付ける。</td>
</tr>
<tr>
<td>--skip-coffee</td>
<td>CoffeeScriptのセットアップをスキップ。</td>
</tr>
<tr>
<td>--skip-turbolinks</td>
<td>turbolinksのセットアップをスキップ。</td>
</tr>
<tr>
<td>--skip-active-record</td>
<td>active-recordのセットアップをスキップ。<br>
https://qiita.com/satoh-disk/items/1a5aa14e0c5d57f422e6<br>
--skip-active-recordをしたときは、ActiveRecordは除外するけどActiveModelはロードするという挙動のようです。
</td>
</tr>
</table>

`--minimal` は以下をスキップ

- action_cable
- action_mailbox
- action_mailer
- action_text
- active_job
- active_storage
- bootsnap
- jbuilder
- spring
- system_tests
- turbolinks
- webpack

```
新しいMacだと
Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries
Generally there are no consequences of this for you. If you build your own software and it requires this formula, you'll need to add to your build variables:
```

```
$ vim ~/.zshrc

export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/mysql@5.7/lib"
export CPPFLAGS="-I/usr/local/opt/mysql@5.7/include"
export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/opt/openssl/lib/
export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"
export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"

$ source ~/.zshrc
```

```
$ mysql.server start
$ bundle exec rails db:create
$ bundle exec rails s

# localhost:8888のポート番号で起動
$ bundle exec rails s -p 8888

# 本番環境でrackサーバーをデーモンとして実行の場合
$ bundle exec rails s -e production -d
```


#### Rails+BrowserSync(grunt, gulpそしてブラウザエクステンションがなくても利用でき大変便利)
http://qiita.com/imaimiami/items/3d91551b8b20208f0024  

```sh
# インストール
$ npm install -g browser-sync
# rails起動
$ bundle exec rails s -p 1111
# 同期
$ browser-sync start --proxy localhost:1111 --files **/*
```


## 便利なgemをGemfileに追記

例えば  
Gemfileのgroup :development, :test doに下記４つを追記  
https://github.com/funnythingz/pins/blob/master/Gemfile  

```
# /Gemfile
group :development, :test do
  gem 'pry-rails'          # rails cでirbの代わりにpryを使う
  gem 'pry-doc'            # methodを表示
  gem 'pry-stack_explorer' # デバッグを実施
  gem 'pry-byebug'         # スタックをたどれる
end
```
```
$ bundle install --path vendor/bundle
```
　  

## Git

### 3. gitignore

https://www.gitignore.io/で生成

```
### Rails ###
*.rbc
capybara-*.html
.rspec
/db/*.sqlite3
/db/*.sqlite3-journal
/public/system
/coverage/
/spec/tmp
*.orig
rerun.txt
pickle-email-*.html

# Ignore all logfiles and tempfiles.
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep

# TODO Comment out this rule if you are OK with secrets being uploaded to the repo
config/initializers/secret_token.rb
config/master.key

# Only include if you have production secrets in this file, which is no longer a Rails default
config/secrets.yml

# dotenv
# TODO Comment out this rule if environment variables can be committed
.env

## Environment normalization:
/.bundle
/vendor/bundle

# these should all be checked in to normalize the environment:
# Gemfile.lock, .ruby-version, .ruby-gemset

# unless supporting rvm < 1.11.0 or doing something fancy, ignore this:
.rvmrc

# if using bower-rails ignore default bower_components path bower.json files
/vendor/assets/bower_components
*.bowerrc
bower.json

# Ignore pow environment settings
.powenv

# Ignore Byebug command history file.
.byebug_history

# Ignore node_modules
node_modules/

# Ignore precompiled javascript packs
/public/packs
/public/packs-test
/public/assets

# Ignore yarn files
/yarn-error.log
yarn-debug.log*
.yarn-integrity

# Ignore uploaded files in development
/storage/*
!/storage/.keep
```

 `/home/xxx/config/secrets.yml` は `/home/xxx/config/credentials.yml.enc`に変更されている。  
https://qiita.com/NaokiIshimura/items/2a179f2ab910992c4d39  


### 最初のコミット

```
git init
git add .
git commit -m "最初のコミット"

git remote add origin git@bitbucket.org:ｘｘｘ/ｘｘｘ.git
git push -u origin master

# git remote set-url origin　で、fatal: No such remote 'origin'というエラーが出た場合、
# 先にremoteをaddする必要があり、set-urlはあくまでもremote先を変える。
# SSHを始めから用いるのであれば、以下のコマンドで。
git remote add origin git@github.com:xxxxxxx/[Ripository name].git

# 紐づけているリモートリポジトリを確認できる
git remote -v    
```


## 次

<a href="https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_01%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C_2.md">基本的な流れ2</a>

