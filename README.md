
#まっさらからの環境構築のメモ（201412）  
[Githubのマークダウン記法](http://codechord.com/2012/01/readme-markdown/ "") 


##Spec

###ハード
*	MacBook (13-inch, Late 2009)
*	プロセッサ 2.26 GHz Intel Core 2 Duo
*	メモリ 4GB 1067 MHz DDR3
*	グラフィクス NVIDIA GeForce 9400M 256 MB

###OS
*	MacOSX 10.10.1（14B25）


##準備作業

<dl>
<dt>1. <strong>Command Line Toolsインストール</strong></dt>
<dd>
Command Line Tools(OS X 10.10)for Xcode - Xcode 6.1.1  
> 参考  
https://developer.apple.com/  
</dd>
</dl>

   

2. <strong>公開鍵と秘密鍵作成</strong>  
> 参考  
・http://git-scm.com/book/ja/v1/Git-サーバー-SSH-公開鍵の作成  
・http://monsat.hatenablog.com/entry/generating-ssh-keys-for-github  

SSH 公開鍵の作成  
```
$ ssh-keygen
```
※「The key fingerprint is:」が出てくるまで[Enter]  
公開鍵の確認  
```
$ cat ~/.ssh/id_rsa.pub
```
クリップボードにコピー（GithubのSSHKeysの設定ページに貼り付ける。）  
```
$ pbcopy < ~/.ssh/id_rsa.pub
```
接続テスト  
```
$ ssh -T git@github.com
```

3. <strong>Homebrewインストール</strong>  

> 参考  
http://brew.sh/index_ja.html  

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew doctor
$ brew -v
$ brew update
```

※むやみにbrew upgradeするのは危険  

4. <strong>rbenvインストール</strong>  

```
$ brew install rbenv ruby-build
```

rbenvのパスを追加  
```
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
```

rubyをインストール  
```
$ rbenv install -l #インストール可能なバージョン一覧を表示
$ rbenv install 2.1.5 #バージョンを指定してインストール
$ rbenv rehash
$ rbenv global 2.1.5
$ ruby -v
```

毎回rbenv rehashしなくて済ませる  
```
$ brew install rbenv-gem-rehash
```

5. <strong>MySQLをインストール</strong>  

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
```

> 参考  
ダウングレードしたい時  
http://sue445.hatenablog.com/entry/2013/02/25/163538  
Mac起動時にMySQLを起動、起動に失敗した時など  
http://qiita.com/maru_cc/items/2d8f558c83631354f54d  
schema_migrationsが壊れたら  
http://wayohoo.com/mysql/how-to-deal-with-when-schema_migrations-broke-of-rails.html  
MySQLの違うバージョンをインストール  
http://qiita.com/STAR_ZERO/items/a5dd537564244c21aa9e

> 補足  
MariaDBの場合  
http://qiita.com/kozmats/items/ac32f1ac1d676a09e3b2  
ER図作成　Workbench  
http://dev.mysql.com/downloads/workbench/  
Sequel Pro  
http://www.sequelpro.com  

6. <strong>nodeインストール</strong>  

> 参考  
http://nodejs.org


- - -
## 全体的に参考  
http://tsuchikazu.net/mac_rail_setup/  
https://gist.github.com/keifukuda/4535242  

