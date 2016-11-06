
#まっさらからの環境構築のメモ（201501）  
[Githubのマークダウン記法](http://codechord.com/2012/01/readme-markdown/ "") 


##Spec

###ハード
*	MacBook (13-inch, Late 2009)
*	プロセッサ 2.26 GHz Intel Core 2 Duo
*	メモリ 4GB 1067 MHz DDR3（8GBまでいけるかも）
*	グラフィクス NVIDIA GeForce 9400M 256 MB

###OS
*	MacOSX 10.10.1（14B25）


　  
##準備作業
　  
### 1. Command Line Toolsインストール  
Command Line Tools(OS X 10.10)for Xcode - Xcode 6.1.1  
※この時gitも一緒にインストールされる

> 参考  
https://developer.apple.com/  
http://qiita.com/iron-breaker/items/6da9e0f1af0b4c2c1cfa  

　  
　  
- - - 
### 2. 公開鍵と秘密鍵作成  

> 参考  
・http://git-scm.com/book/ja/v1/Git-サーバー-SSH-公開鍵の作成  
・http://monsat.hatenablog.com/entry/generating-ssh-keys-for-github  

##### SSH 公開鍵の作成  
```sh
$ ssh-keygen
```
※「The key fingerprint is:」が出てくるまで[Enter]  

##### 公開鍵の確認  
```sh
$ cat ~/.ssh/id_rsa.pub
```

##### クリップボードにコピー（GithubのSSHKeysの設定ページに貼り付ける。）  
```sh
$ pbcopy < ~/.ssh/id_rsa.pub
```

##### 接続テスト  
```sh
$ ssh -T git@github.com
```
　  
　  
- - - 
### 3. Homebrewインストール  

> 参考  
http://brew.sh/index_ja.html  

```sh
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew doctor
$ brew -v
$ brew update
```

　  
- - - 
### 4. rbenvインストール  

```sh
$ brew install rbenv ruby-build
```

##### rbenvのパスを追加  
```sh
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
```

##### rubyをインストール v2.1.5  
```sh
$ rbenv install -l #インストール可能なバージョン一覧を表示
$ rbenv install 2.1.5 #バージョンを指定してインストール
$ rbenv rehash
$ rbenv global 2.1.5
$ rbenv local 2.1.5 # 今居るディレクトリだけ
$ ruby -v
```

##### rubyのバージョンアップ
rbenv install -lでインストール可能リストに最新版のrubyが無い場合
```sh
$ brew update
$ brew upgrade ruby-build
$ rbenv install -l
```

##### 毎回rbenv rehashしなくて済ませる  
```sh
$ brew install rbenv-gem-rehash
```
　  
　  
- - - 
### 5. 重要なgemのインストール（グローバルに入れるのを限定する）
rbenv環境下のRuby環境に追加インストールするGemはbundlerのみ  
```sh
$ gem install bundler --no-ri --no-rdoc
　※riとかrdocのインストールに時間がかかる対策  
　http://boscono.hatenablog.com/entry/2014/08/10/155524  
　  
# 各プロジェクトフォルダで  
$ bundle init  
すると、〜/project/GemfileでGemfileを作成してくれる  
　  
# ディレクトリのgemfileを元に各種gemをインストール  
$ bundle install --path vendor/bundle  
```
　  
　  
- - - 
### 6. Node.jsインストール  
>http://qiita.com/sinmetal/items/154e81823f386279b33c#2-2  
http://qiita.com/satoyan419/items/693a84e26a8ad2f0e29e  
インストール済みか確認する
```sh
$ node -v
```

#### nodebrewでNode.jsをバージョン管理
nodebrewでNode.jsのインストールやバージョン管理をする。公式サイトからNode.jsをインストールしない。  

#### すでに公式サイトからインストールしてしまった場合
```sh
$ curl -o uninstall-node.sh https://gist.githubusercontent.com/nicerobot/2697848/raw/uninstall-node.sh
$ chmod u+x uninstall-node.sh 
$ ./uninstall-node.sh 
$ rm uninstall-node.sh
$ sudo rm -rf /usr/local/include/node
$ sudo rm -rf /usr/local/lib/dtrace
$ rm -rf ~/.node-gyp
$ rm -rf ~/.npm
$ rm -rf ~/.sourcemint
```
#### nodebrewのインストール
```sh
$ curl -L git.io/nodebrew | perl - setup
（「export PATH=$HOME/.nodebrew/current/bin:$PATH」を/.bash_profileに書き込めと言われる。）
```
#### 上記を追記して適用して、nodebrewのインストール完了
```sh
$ source ~/.bash_profile
```
#### インストール可能なNode.js一覧確認
```sh
$ nodebrew ls-remote

# 安定版のインストールと適用
$ nodebrew install-binary stable
$ nodebrew use stable

# ※Node.jsのインストールで、Node.jsのパッケージ管理ツールのnpmもインストールされるのでバージョンが最新か確認
$ npm update -g npm
```

　  
　  
- - - 
### 7. gulpインストール
Node.jsを使ったタスク自動化ツール。CSSやJavaScriptファイルの圧縮や結合、Sassのコンパイルも自動化できる  
http://qiita.com/kazukichi/items/884a1379eea5918689ed  
http://qiita.com/puttyo_bubu/items/225081f767d785277022  
http://qiita.com/sokora1705/items/2dfeea98c05846256fb3  
https://teratail.com/questions/13378  

```sh
$ npm install -g gulp
```

#### こういうerrorが出たら
https://github.com/npm/npm/issues/13055  
https://github.com/npm/npm/issues/3701  
```sh
$ gulp -v
# => gulp: command not found
```

#### 下記を確認
https://teratail.com/questions/13378  
```sh
# npmのアップデート
$ npm update
```
```sh
# pathの確認（~/.bash_profile）
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH'
$ source ~/.bash_profile
```
```sh
# gulpバージョンの確認
$ gulp -v
# => [18:16:03] CLI version 3.9.1
```

#### gulpを使用するプロジェクトフォルダでpackage.jsonの作成
```sh
$ npm init
# ---出力サンプル---
{
  "name": "gulp",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}

```


#### サックっとbrowser-syncなどを設定
http://qiita.com/itoz/items/2bd246606c69c33684e8  
https://h2ham.net/gulp-basic  
https://tech.recruit-mp.co.jp/front-end/getting-started-gulp-watch-browsersync/  
projectディレクトリで  
```sh

# localのproject単位もgulpをインストール
$ sudo npm install gulp

# 必要なgulp関連ツールをインストール
$ sudo npm install browser-sync
$ sudo npm install gulp-changed
$ sudo npm install gulp-compass
$ sudo npm install gulp-cssmin
$ sudo npm install gulp-rename
$ sudo npm install gulp-plumber
$ sudo npm install gulp-autoprefixer
$ sudo npm install gulp-csso
$ sudo npm install gulp-if
$ sudo npm install gulp-imagemin
$ sudo npm install gulp-jshint
$ sudo npm install gulp-load-plugins
$ sudo npm install gulp-ruby-sass
$ sudo npm install gulp-uglify
$ sudo npm install gulp-useref
$ sudo npm install jshint-stylish
$ sudo npm install run-sequence
```
各種設定ファイルgulpfile.jsに設定を  
```

'use strict';

var SCSS_SRC = 'public/res/scss/**/*.scss';
var CSS_DEST = 'public/res/css/';

var gulp = require('gulp');

/* scss自動コンパイル */
var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber'); // コンパイルエラーが出てもwatchを止めない

// compass
gulp.task('compass', function(){
    gulp.src(SCSS_SRC)
      .pipe(plumber())
      .pipe(compass({
        config_file: 'public/res/config.rb',
        comments: false,
        css: CSS_DEST,
        sass: 'public/res/scss/'
    }));
});

// css-min
gulp.task('cssmin', function () {
  gulp.src(CSS_DEST+'/**/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('public/res/css_min/'));
});


/**
 * watch
 * watchでcompassを自動で書きだす
 */
gulp.task('watch', function(){
    gulp.watch(SCSS_SRC, function(event) {
        gulp.run('compass');
    });
    gulp.watch(CSS_DEST+'/**/*.css', function(event) {
        gulp.run('cssmin');
    });
});
  
gulp.task('default', function(){
    gulp.run('watch');
});
```
#### Rails+BrowserSync(grunt, gulpそしてブラウザエクステンションがなくても利用でき大変便利)
http://qiita.com/imaimiami/items/3d91551b8b20208f0024  
```
$ browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/*.css.*","app/views/**/*.html.*","app/assets/javascripts/**/*.js.*"
```

　  
#### gulpで動かすもの
http://blog.webcreativepark.net/2014/05/12-183033.html  

#### nodebrewでNode.js管理はじめたらgulp動かなくなったのでメモ
http://qiita.com/rinoside/items/d9c911cc8d0c5db114c9  

　  
　  
- - - 
### 8. MySQLをインストール  

> 参考  
http://howtohp.com/2011/08/20/homebrew-mysql/  
http://tsuchikazu.net/mac_rail_setup/  

```sh
$ brew install mysql
$ brew info mysql #インストール後のメッセージ確認
$ brew link mysql #Warning: Already linked:が出たら下記を実行
$ brew unlink mysql && brew link mysql

# 初期設定
$ unset TMPDIR
$ mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp

# 起動
# Mac起動時に自動起動
$ ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
$ launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
# 手動起動、停止
$ mysql.server start
$ mysql.server stop

# ログイン
$ mysql -u root
# 文字コードの設定を確認
$ show variables like 'character_set%';
```
> MySQLの使い方.md  
https://github.com/IsabellaAzu/memo/blob/master/MySQL%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9.md  

　  
　  
- - - 
### 9. その他インストール

##### imagemagick（要確認）  
```sh
$ brew install imagemagick  
$ brew unlink imagemagick && brew link imagemagick
$ cd /usr/local/Cellar/imagemagick/6.8.0-10/lib
$ ln -s libMagickWand-Q16.7.dylib libMagickWand.dylib 
$ ln -s libMagickCore-Q16.7.dylib libMagickCore.dylib
$ ln -s libMagick++-Q16.7.dylib   libMagick++.dylib
```


- - -

## ここまでの参考  
http://tsuchikazu.net/mac_rail_setup/  
https://gist.github.com/keifukuda/4535242  
  
- - -

## 便利ツール  

##### iTerm2：CUI  
http://iterm2.com/  

###### 分割状態の保存 
メニューの「Window」→「Save Window Arrangement」→名前をつける  
![](http://i.gyazo.com/b8724c20396285988baf7371ab1f1201.png)  

###### windowデフォルトの配置  
・メニューの「iTerm」→「Preferences...」→「Generalタブ」   
　→ Startupの項目「Open default window arrangement」にチェック  
　　cmd+shift+sで名前を付けて位置保存  
・メニューの「iTerm」→「Preferences...」→「Arrangementタブ」    
　→ 「Set Default」ボタンを押してデフォルトに設定  

##### デフォルトで開くディレクトリ
・メニューの「iTerm」→「Preferences...」→「Profileタブ」  
　→ Reuse previous 〜に設定  

##### Sequel Pro：DBのGUI
http://www.sequelpro.com/

##### MySQL Workbench
http://www-jp.mysql.com/products/workbench/

##### imageAlpha：透過画像軽量化
http://pngmini.com/

##### imageOptim：画像軽量化
https://imageoptim.com/

##### Atomインストールpackage
- Atom：https://atom.io/  
- プロジェクト管理、開いた状態など：project-manager（recent-files）
- 矩形選択：Sublime-Style-Column-Selection
- Railsプロジェクト内のファイル移動：rails-transporter
- 全角スペースを□で表示：show-ideographic-space


##### 


##### 


##### 


##### 


##### 


##### tmux
http://matsu.teraren.com/blog/2013/02/10/moteru-tmux-powerline/  

