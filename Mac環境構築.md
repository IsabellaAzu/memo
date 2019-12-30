

## Spec

### ハード
*	MacBookPro (16-inch, 2019)
*	プロセッサ 2.6 GHz 6コア Intel Core i7
*	メモリ 16GB 2667 MHz DDR4
*	グラフィクス Intel UHD Graphics 630 1536 MB

### OS
*	MacOS Cataline 10.15.1


　  
## 準備作業
　  
### 1. Command Line Toolsインストール  

> Command Line Tools for Xcode 11.2

https://developer.apple.com/download/more/  
　  
　  
- - - 

### 2. 公開鍵と秘密鍵作成  

- http://git-scm.com/book/ja/v1/Git-サーバー-SSH-公開鍵の作成  
- http://monsat.hatenablog.com/entry/generating-ssh-keys-for-github  

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

http://brew.sh/index_ja.html  

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew doctor
$ brew -v
$ brew update
```

　  
- - - 

### 4. rbenvインストール  

```
$ brew install rbenv ruby-build
```

##### rbenvのパスを追加  

```
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
```

##### rubyをインストール

```
$ rbenv install -l #インストール可能なバージョン一覧を表示
$ rbenv install X.X.X #バージョンを指定してインストール
$ rbenv rehash
$ rbenv global X.X.X
$ rbenv local X.X.X # 今居るディレクトリだけ
$ ruby -v
```

##### rubyのバージョンアップ

rbenv install -lでインストール可能リストに最新版のrubyが無い場合

```
$ brew update
$ brew upgrade ruby-build
$ rbenv install -l
```

##### 毎回rbenv rehashしなくて済ませる  

- https://github.com/rbenv/rbenv-gem-rehash  
- http://shuzo-kino.hateblo.jp/entry/2015/01/02/235002  

```
$ git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash
```
　  
　  
- - - 


### 5. 重要なgemのインストール（グローバルに入れるのを限定する）

rbenv環境下のRuby環境に追加インストールするGemはbundlerのみ  

```
$ gem install bundler -N

https://qiita.com/noanoa07/items/dd88845aa5d43e5d1e4a  
https://guides.rubygems.org/command-reference/#gem-install  
　  
# 各プロジェクトフォルダで  
$ bundle init  
すると、〜/project/GemfileでGemfileを作成してくれる  
　  
# ディレクトリのgemfileを元に各種gemをインストール  
$ bundle install --path vendor/bundle  
```


#### gem installでOperation not permittedの対応

- http://tacamy.hatenablog.com/entry/2013/03/31/230553  
- https://github.com/Homebrew/homebrew-cask/issues/70622  

```
gem update --system
gem update bundler
```



- - - 


### 6. Node.jsインストール  

- http://qiita.com/sinmetal/items/154e81823f386279b33c#2-2  
- http://qiita.com/satoyan419/items/693a84e26a8ad2f0e29e  

インストール済みか確認する  

```
$ node -v
```

#### nodebrewでNode.jsをバージョン管理

nodebrewでNode.jsのインストールやバージョン管理をする。公式サイトからNode.jsをインストールしない。  

#### すでに公式サイトからインストールしてしまった場合
```
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

https://qiita.com/mame_daifuku/items/373daf5f49ee585ea498  

```
$ brew install nodebrew
（「export PATH=$HOME/.nodebrew/current/bin:$PATH」を/.bash_profileに書き込めと言われる。）
$ source ~/.bash_profile
$ nodebrew setup
```

#### インストール可能なNode.js一覧確認

```
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

- http://qiita.com/kazukichi/items/884a1379eea5918689ed  
- http://qiita.com/puttyo_bubu/items/225081f767d785277022  
- http://qiita.com/sokora1705/items/2dfeea98c05846256fb3  
- https://teratail.com/questions/13378  

```
$ npm install -g gulp
```

#### こういうerrorが出たら

- https://github.com/npm/npm/issues/13055  
- https://github.com/npm/npm/issues/3701  

```
$ gulp -v
# => gulp: command not found
```

#### 下記を確認

https://teratail.com/questions/13378  

```
# npmのアップデート
$ npm update
```

```
# pathの確認（~/.bash_profile）
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH'
$ source ~/.bash_profile
```

```
# gulpバージョンの確認
$ gulp -v
# => [18:16:03] CLI version 3.9.1
```

#### gulpを使用するプロジェクトフォルダでpackage.jsonの作成

```
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

- http://qiita.com/itoz/items/2bd246606c69c33684e8  
- https://h2ham.net/gulp-basic  
- https://tech.recruit-mp.co.jp/front-end/getting-started-gulp-watch-browsersync/  

##### projectディレクトリで  

```
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

- http://qiita.com/imaimiami/items/3d91551b8b20208f0024  

```
個別指定
$ browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/*.css.*","app/views/**/*.html.*","app/assets/javascripts/**/*.js.*"
全指定なら
$ browser-sync start --proxy localhost:3000 --files **/*
```

　  
#### gulpで動かすもの

- http://blog.webcreativepark.net/2014/05/12-183033.html  

#### nodebrewでNode.js管理はじめたらgulp動かなくなったのでメモ

- http://qiita.com/rinoside/items/d9c911cc8d0c5db114c9  

　  
　  
- - - 

### 8. MySQLをインストール  

- https://weblabo.oscasierra.net/mysql-57-init-setup/  
- http://howtohp.com/2011/08/20/homebrew-mysql/  
- http://tsuchikazu.net/mac_rail_setup/  
- https://qiita.com/hkusu/items/cda3e8461e7a46ecf25d

```
$ brew search mysql # インストール可能な一覧
$ brew info mysql # インストール後のメッセージ確認
$ brew install mysql@5.7 # バージョン指定でインストール
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


## 便利ツール  

##### iTerm2：CUI  

http://iterm2.com/  

###### 分割状態の保存 

メニューの「Window」→「Save Window Arrangement」→名前をつける  
![](http://i.gyazo.com/b8724c20396285988baf7371ab1f1201.png)  

###### windowデフォルトの配置  

- メニューの「iTerm」→「Preferences...」→「Generalタブ」   
　→ Startupの項目「Open default window arrangement」にチェック  
　　cmd+shift+sで名前を付けて位置保存  
- メニューの「iTerm」→「Preferences...」→「Arrangementタブ」    
　→ 「Set Default」ボタンを押してデフォルトに設定  

##### デフォルトで開くディレクトリ

- メニューの「iTerm」→「Preferences...」→「Profileタブ」  
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

##### tmux
http://matsu.teraren.com/blog/2013/02/10/moteru-tmux-powerline/  



## 設定
https://qiita.com/ryuichi1208/items/5905240f3bfce793b33d?utm_source=Qiita%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9&utm_campaign=dab0ebb055-Qiita_newsletter_339_11_28_2018&utm_medium=email&utm_term=0_e44feaa081-dab0ebb055-33751137  

```
# OS: ブート時のサウンドの無効化 (寂しい気もしますが煩いので消しています)
$ sudo nvram SystemAudioVolume=" "

# OS: 自動大文字の無効化
$ defaults write NSGlobalDomain NSAutomaticCapitalizationEnabled -bool false

# OS: クラッシュレポートの無効化
$ defaults write com.apple.CrashReporter DialogType -string "none"

# Dock: アプリケーション起動時のアニメーションを無効化
$ defaults write com.apple.dock launchanim -bool false

# Finder: アニメーションを無効化する
$ defaults write com.apple.finder DisableAllAnimations -bool true

# Finder: デフォルトで隠しファイルを表示する
$ defaults write com.apple.finder AppleShowAllFiles -bool true

# Finder: 全ての拡張子のファイルを表示
$ defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Finder: 拡張子変更時の警告を無効化
$ defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false

# Finder: USBやネットワークストレージに.DS_Storeファイルを作成しない
$ defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
$ defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true

# Finder: Show the ~/Library folder
$ chflags nohidden ~/Library

# Safari: オートフィルの無効化
$ defaults write com.apple.Safari AutoFillFromAddressBook -bool false
$ defaults write com.apple.Safari AutoFillPasswords -bool false
$ defaults write com.apple.Safari AutoFillCreditCardData -bool false
$ defaults write com.apple.Safari AutoFillMiscellaneousForms -bool false

# Safari: ポップアップウィンドウをブロック
$ defaults write com.apple.Safari WebKitJavaScriptCanOpenWindowsAutomatically -bool false
$ defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2JavaScriptCanOpenWindowsAutomatically -bool false

# Safari: 追跡を無効化
$ defaults write com.apple.Safari SendDoNotTrackHTTPHeader -bool true

# ターミナル: UTF-8のみを使用する
$ defaults write com.apple.terminal StringEncodings -array 4

# ターミナル: iTermのダークテーマをインストール
$ open "${HOME}/init/Solarized Dark.itermcolors"

# ターミナル: 終了時のプロンプトを非表示にする
$ defaults write com.googlecode.iterm2 PromptOnQuit -bool false
```

##### VSCodeの拡張機能7選

https://ics.media/entry/18544/  

- [VSCode](https://code.visualstudio.com/)  
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex)
- [JSON to TS](https://marketplace.visualstudio.com/items?itemName=MariusAlchimavicius.json-to-ts)

###### VSCodeのオススメ設定

https://ics.media/entry/18756/

- [npm-scriptsをマウス操作で行う](https://ics.media/entry/12226)  
```
package.jsonファイルに定義したnpm-scriptsはサイドパネルからダブルクリックで実行できます。
```
- [アウトライン表示で構造をわかりやすく]  
```
関数名や定数名などの情報をアウトライン表示してくれます。サイドパネルに表示されるアウトラインを選択すると、
該当するコードに瞬時に移動できます。さまざまな言語に対応しており、
HTML、JavaScript、TypeScriptだけでなく、JSONやYAML、Dockerなどのアウトラインも表示できます。
サイドパネルの［エクスプローラー］の見出しを右クリックし、表示されるメニューから［アウトライン］を選択することで利用できます。
```
- [Shortcuts](https://marketplace.visualstudio.com/items?itemName=gizak.shortcuts)
```
https://code.visualstudio.com/docs/getstarted/keybindings#_default-keyboard-shortcuts
画面下のステータスバーにショートカットボタンを追加できる拡張機能
```

