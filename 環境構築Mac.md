

## Spec

### ハード
*	MacBookPro (16-inch, 2019)
*	プロセッサ 2.6 GHz 6コア Intel Core i7
*	メモリ 16GB 2667 MHz DDR4
*	グラフィクス Intel UHD Graphics 630 1536 MB

### OS
*	MacOS Cataline 10.15.1

#### Mac - キーバインドの変更・入替え（command、ctrl、caps）

https://pc-karuma.net/mac-keys-modifiers-switch-command-control-caps/

#### ユーザー辞書


　  
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
# bash_profile
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile

# zshrc (~/.zshrc)
$ export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
$ source ~/.zshrc
```

##### rubyをインストール

```
# 各種fomulaのアップデート
$ brew update
$ brew upgrade ruby-build

# インストール可能なバージョン一覧を表示
$ rbenv install -l

# バージョンを指定してインストール
$ rbenv install X.X.X

# mac全体
$ rbenv global X.X.X

# 今居るディレクトリだけ
$ rbenv local X.X.X 

$ rbenv rehash
$ ruby -v
```

##### 毎回rbenv rehashしなくて済ませる  

- https://github.com/rbenv/rbenv-gem-rehash  
- http://shuzo-kino.hateblo.jp/entry/2015/01/02/235002  

```
$ git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash
```

##### Macのzshでrbenvを使う

https://qiita.com/seijikohara/items/79b479c9dd2e3b950301

```.zshrc
export PATH="$HOME/.rbenv/bin:$PATH" 
eval "$(rbenv init - zsh)"
```

```
source ~/.zshrc
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

# railsのmimemagic対策
$ brew install shared-mime-info
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

### ７. MySQLをインストール  

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

$ echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc
$ mysql --version

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

```
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

mysql@5.7 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have mysql@5.7 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc

For compilers to find mysql@5.7 you may need to set:
  export LDFLAGS="-L/usr/local/opt/mysql@5.7/lib"
  export CPPFLAGS="-I/usr/local/opt/mysql@5.7/include"

For pkg-config to find mysql@5.7 you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/mysql@5.7/lib/pkgconfig"


To have launchd start mysql@5.7 now and restart at login:
  brew services start mysql@5.7
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/mysql@5.7/bin/mysql.server start
```

> MySQLの使い方.md  
https://github.com/IsabellaAzu/memo/blob/master/MySQL%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9.md  

　  　  
- - - 


## 便利ツール  

##### Webサーバー(python)

```
python -m SimpleHTTPServer 8080
```

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

##### Sequel Ace

https://apps.apple.com/jp/app/sequel-ace/id1518036000?mt=12

##### MySQL Workbench

http://www-jp.mysql.com/products/workbench/

##### imageOptim：画像軽量化

https://imageoptim.com/

##### VSCode

- https://code.visualstudio.com/


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
- Visual Studio Code おすすめ拡張機能  
  - https://web-guided.com/594/  
- VSCode拡張機能「Color Info」でcss/scssの16進数カラーコードをRGBにかんたん変換
  - https://onedarling.site/programming/tool/colorinfo/
- Visual Studio Codeで見やすいテーマファイルのまとめ  
  - https://coliss.com/articles/build-websites/operation/work/best-of-visual-studio-code-themes.html  



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




