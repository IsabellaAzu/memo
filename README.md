
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

### 1. Command Line Toolsインストール  
Command Line Tools(OS X 10.10)for Xcode - Xcode 6.1.1   
https://developer.apple.com/  

### 2. 公開鍵と秘密鍵作成  
参考  
・http://git-scm.com/book/ja/v1/Git-サーバー-SSH-公開鍵の作成  
・http://monsat.hatenablog.com/entry/generating-ssh-keys-for-github  

```
$ ssh-keygen
```
※「The key fingerprint is:」が出てくるまで[Enter]  

> 公開鍵の確認  
```
$ cat ~/.ssh/id_rsa.pub
```

> クリップボードにコピー（GithubのSSHKeysの設定ページに貼り付ける。）  
```
$ pbcopy < ~/.ssh/id_rsa.pub
```

> 接続テスト  
```
$ ssh -T git@github.com
```

### 3. Homebrewインストール  
参考  
http://brew.sh/index_ja.html  
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew doctor
```
### 4. rbenvインストール  
### 5. nodeインストール
http://nodejs.org

