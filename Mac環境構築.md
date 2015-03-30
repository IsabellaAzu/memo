
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


### 2. 公開鍵と秘密鍵作成  

> 参考  
・http://git-scm.com/book/ja/v1/Git-サーバー-SSH-公開鍵の作成  
・http://monsat.hatenablog.com/entry/generating-ssh-keys-for-github  

##### SSH 公開鍵の作成  
```
$ ssh-keygen
```
※「The key fingerprint is:」が出てくるまで[Enter]  

##### 公開鍵の確認  
```
$ cat ~/.ssh/id_rsa.pub
```

##### クリップボードにコピー（GithubのSSHKeysの設定ページに貼り付ける。）  
```
$ pbcopy < ~/.ssh/id_rsa.pub
```

##### 接続テスト  
```
$ ssh -T git@github.com
```


### 3. Homebrewインストール  

> 参考  
http://brew.sh/index_ja.html  

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew doctor
$ brew -v
$ brew update
```
※むやみにbrew upgradeするのは危険!?  


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

##### rubyをインストール v2.1.5  
```
$ rbenv install -l #インストール可能なバージョン一覧を表示
$ rbenv install 2.1.5 #バージョンを指定してインストール
$ rbenv rehash
$ rbenv global 2.1.5
$ rbenv local 2.1.5 # 今居るディレクトリだけ
$ ruby -v
```
※rbenv install -lでインストール可能リストに最新版のrubyが無い場合
```
$ brew update
$ brew upgrade ruby-build
$ rbenv install -l
```
　  
rails本体のインストール  
```
gem install rails
```
　  
##### 毎回rbenv rehashしなくて済ませる  
```
$ brew install rbenv-gem-rehash
```

### 5. MySQLをインストール  

> 参考  
http://howtohp.com/2011/08/20/homebrew-mysql/  
http://tsuchikazu.net/mac_rail_setup/  

```
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


### 6. 必要なgemのインストール

```
$ gem install bundler
$ gem install rails
```
※riとかrdocのインストールに時間がかかる対策
>http://boscono.hatenablog.com/entry/2014/08/10/155524


### 7. nodeインストール  

> 参考  
http://nodejs.org


### 8. その他インストール

##### imagemagick（要確認）  
```
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

###### ショートカット
| ショートカット | 内容                           |
|:---------------|:-------------------------------|
| ⌘+n            | 新しいウィンドウ               |
| ⌘+t            | 新しいタブ                     |
| ⌘+d            | 縦分割                         |
| ⌘+shift+d      | 横分割                         |
| ⌘+w            | ウィンドウを閉じる             |
| ⌘+{、⌘+}       | ウィンドウのフォーカスを移動   |
| Ctrl+tab       | タブ間の移動                   |
| ⌘+数字         | 数字の割り当てられたタブに移動 |
| ⌘+enter        | フルスクリーン                 |

###### 分割状態の保存 
メニューの「Window」→「Save Window Arrangement」→名前をつける  
![](http://i.gyazo.com/b8724c20396285988baf7371ab1f1201.png)  

###### デフォルトの配置  
・メニューの「iTerm」→「Preferences...」→「Generalタブ」   
　→ Startupの項目「Open default window arrangement」にチェック  
・メニューの「iTerm」→「Preferences...」→「Arrangementタブ」    
　→ 「Set Default」ボタンを押してデフォルトに設定  

##### デフォルトで開くディレクトリ
・メニューの「iTerm」→「Preferences...」→「Profileタブ」  
　→ 「Working Directory」の「Directory」に設定  

##### Sequel Pro：DBのGUI
http://www.sequelpro.com/

##### MySQL Workbench
http://www-jp.mysql.com/products/workbench/

##### imageAlpha：透過画像軽量化
http://pngmini.com/

##### imageOptim：画像軽量化
https://imageoptim.com/

##### 


##### 


##### 


##### 


##### 


##### 


##### tmux
http://matsu.teraren.com/blog/2013/02/10/moteru-tmux-powerline/  

