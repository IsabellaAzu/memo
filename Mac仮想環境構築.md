# Mac仮想環境構築


## index
<a href="#anc1">1.インストール</a>  
<a href="#anc2">2.仮想マシンの起動</a>  
<a href="#anc3">3.仮想マシンに接続して、ブラウザからwebページを見る</a>  
<a href="#anc4">4.</a>  
<a href="#anc5">5.</a>  
<a href="#anc6">6.</a>  
<a href="#anc7">7.</a>  
<a href="#anc8">8.</a>  


　  
- - - 
### 1.インストール

#### (1)vagrant
仮想マシンを簡単に起動するツール。rubyで記述されている。  
https://www.vagrantup.com/downloads.html  
```
# インストールしたいディレクトリで
$ vagrant --varsion
# →Vagrant 1.9.1
```
#### (2)VirtualBox(5.1.10)
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
```
# 状態をみる
$ vagrant status
# スリープ
$ vagrant suspend
# スリープから復帰
$ vagrant resume
# 終了
$ vagrant halt
# 起動
$ vagrant up
# 再起動（設定を変えた時など）
$ vagrant reload
# 環境の削除（Boxの「centos64」は消えない）
$ vagrant destroy（この後「y」を入力、エンター）
```

　  
- - - 
### 3.仮想マシンに接続して、ブラウザからwebページを見る

#### (1)sshで接続（仮想マシンの中に、vagrant userで入る）  
```
$ vagrant ssh
# どこに居る？
$ pwd
# /home/vagrant
```
#### (2)webサーバーのインストールと起動
```
# インストール
$ sudo yum -y install httpd
# 起動
$ sudo service httpd start
# 再起動しても、ｗｅｂサーバーを自動的に起動する設定
$ sudo chkconfig httpd on

# ------ファイヤーウォールをオフに（一旦です。あとでオンにしましょう）
$ sudo service iptables stop(centos6系)
$ sudo systemctl stop firewalld(centos7系)
# http://qiita.com/kino0104/items/99be3ee81cbea395a5b8
$ sudo chkconfig iptables off(centos6系)
$ sudo chkconfig firewalld off(centos7系)
```

#### (3)webページの表示
```
# 配置場所
$ cd /var/www/html
$ sudo vi index.html
$ cat index.html
# →Hello!!!!!!（記述したものが表示される）
```

```
# 仮想マシンから離脱
$ exit
# Vagrantfileのネットワークの設定を変更（Macから仮想マシンの中身を見る：プライベートネットワークを使う）
# vagrant initしたtest１のディレクトリの、「Vagrantfile」を編集する（３個目のコメントアウトを取る）
　# Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"
# 設定を変えたので仮想マシンを再起動
$ vagrant reload
# ブラウザで192.168.33.10にアクセス
　　↓
# 社内でｐｒｉｖａｔｅ networkが使えない場合
  config.vm.network "forwarded_port", guest: 80, host: 9999
$ vagrant reload
- - - 
```

```
# シンボリックリンク : localの作業ディレクトリと、vagrantの作業ディレクトリを紐づける
$ vagrant ssh
$ sudo rm -rf /var/www/html
$ sudo ln -fs /vagrant /var/www/html
```


### 4.


- - - 
### 5.

　  
- - - 
### 6.

　  
- - - 
### 7.
　  
