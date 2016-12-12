# Mac仮想環境構築


## index
<a href="#anc1">1.インストール</a>  
<a href="#anc2">2.仮想マシンの起動</a>  
<a href="#anc3">3.</a>  
<a href="#anc4">4.</a>  
<a href="#anc5">5.</a>  
<a href="#anc6">6.</a>  
<a href="#anc7">7.</a>  
<a href="#anc8">8.</a>  


　  
- - - 
### 1.インストール

#### vagrant
仮想マシンを簡単に起動するツール。rubyで記述されている。  
https://www.vagrantup.com/downloads.html  
```
# インストールしたいディレクトリで
$ vagrant --varsion
# →Vagrant 1.9.1
```
#### VirtualBox(5.1.10)
https://www.virtualbox.org/wiki/Downloads  


　  
- - - 
### 2.仮想マシンの起動

#### (1)Box(テンプレート)の取得
有志制作者のBox：http://www.vagrantbox.es/  
```
$ vagrant box add centos64 https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.1.0/centos-7.0-x86_64.box
# ダウンロードに4-5分かかる
$ vagrant box list
# →centos64 (virtualbox, 0)
```

#### (2)Boxを元に仮想マシンの初期化
Boxの展開先のディレクトリを作成  
```
# 仮想マシンごとにディレクトリを作成
$ mkdir test1
$ cd test1
# 仮想マシンの初期化
$ vagrant init centos64 （上で取得したBox名）
# 起動（virtualbpxを使って起動される）
$ vagrant up
# oracle VM VirtualBox マネージャーに「test1_xxx・・・の項目が追加される
```

#### (3)仮想マシンの起動

　  
- - - 
### (3)
　  
- - - 
### (4)

　  
- - - 
### (5)

　  
- - - 
### (6)

　  
- - - 
### (7)
