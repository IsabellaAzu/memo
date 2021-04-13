
# Win10環境構築

https://qiita.com/nenjiru/items/4d9f859b0490cd00a6a9


### ●Editor

#### VSCode

https://azure.microsoft.com/ja-jp/products/visual-studio-code/


### ●MySQL

https://dev.mysql.com/downloads/mysql/  
https://dev.mysql.com/downloads/file/?id=500615  
https://prog-8.com/docs/mysql-env-win  
https://qiita.com/ab-boy_ringo/items/1de0a81784a85ece9171  



### ●キー配置変更

#### Change Key

https://freesoft-100.com/review/change-key.php


### ●ターミナル

#### Fluent Terminal(コピペできる)

https://www.microsoft.com/ja-jp/p/fluent-terminal/9p2krlmfxf9t?activetab=pivot:overviewtab

#### Windows Terminal(コピペできない)

https://www.microsoft.com/ja-jp/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab

### ●WSLの有効化

https://www.rk-k.com/archives/3880

- 「Windowsの機能の有効化または無効化」
- 「Linux用Windowsサブシステム」を有効化
- 再起動
- WSLで動かすLinuxディストリビューションはMicrosoft Storeからインストール
- Ubuntu 20.04 LTS 起動で、ユーザー名、パスワードを生成
- 終了

#### brewコマンド

https://www.rk-k.com/archives/3877

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

https://docs.brew.sh/Homebrew-on-Linux

```
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile

brew install gcc
sudo apt install gcc

brew doctor
brew cleanup

sudo apt-get install build-essential curl file git
sudo apt update
```

#### rbenvコマンド

- https://qiita.com/na-777/items/373414fc34417e52af42
- http://halucolor.blogspot.com/2012/08/railslinuxrails.html

```
sudo apt install autoconf bison build-essential libssl1.0-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev sqlite3 libsqlite3-dev nodejs-dev node-gyp npm -y

git clone https://github.com/rbenv/rbenv.git ~/.rbenv

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
brew install make
sudo apt-get install -y libssl-dev zlib1g-dev

# インストール可能なリスト
rbenv install -l
rbenv install 3.0.0
rbenv global 3.0.0
rbenv rehash
gem -v
gem update --system
```


#### gem

https://qiita.com/sasasasasa/items/a5a873654259ea3592e6

##### bundler

##### rails


### windows10にgit

https://www.curict.com/item/60/60bfe0e.html


### WSL2

https://qiita.com/amenoyoya/items/ca9210593395dbfc8531

#### MySQL

https://www.aiship.jp/knowhow/archives/28257

```
sudo apt install -y mysql-server
sudo service mysql status
sudo service mysql start
sudo service mysql stop

# Mysql2::Error::ConnectionError: Can't connect to local MySQL server through socket '/opt/biz/tmp/mysql.sock' (13)
# config/database.ymlのsocketで指定してるとこと合ってるか確認
mysql_config --socket

# Access denied for user 'root'@'localhost'
# Couldn't create 'biz_development' database. Please check your configuration.
# rails aborted!
# ActiveRecord::ConnectionNotEstablished: Access denied for user 'root'@'localhost'

SELECT User, Host, plugin FROM mysql.user;
+------------------+-----------+-----------------------+
| User             | Host      | plugin                |
+------------------+-----------+-----------------------+
| debian-sys-maint | localhost | caching_sha2_password |
| mysql.infoschema | localhost | caching_sha2_password |
| mysql.session    | localhost | caching_sha2_password |
| mysql.sys        | localhost | caching_sha2_password |
| root             | localhost | auth_socket           |
+------------------+-----------+-----------------------+
# ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

``` 

#### Docker, docker-compose（不要だった）

https://qiita.com/amenoyoya/items/ca9210593395dbfc8531#docker%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89

```
# -- Ubuntu 20.04 on WSL2

# Docker (Community Edition) インストール
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
$ sudo apt update && sudo apt install -y docker-ce
## dockerデーモン起動
$ sudo service docker start

# WSL2 では、デーモンをスタートアップに登録することができない
# スタートアップに登録したい場合は、Windowsのタスクスケジューラに登録する必要がある
# 参考: https://qiita.com/Ningensei848/items/75adeb29bb143633d60c

# Windows再起動の度に sudo service docker start すれば良いだけなので、ここではスタートアップ登録までは行わない

# WSL2 には cgroup 用ディレクトリがデフォルトで作られていないため作成しておく
## これをしておかないと Docker でプロセスのグループ化が必要になったときにエラーが起きる
$ sudo mkdir -p /sys/fs/cgroup/systemd
$ sudo mount -t cgroup -o none,name=systemd cgroup /sys/fs/cgroup/systemd

# docker-compose 導入
$ sudo curl -L https://github.com/docker/compose/releases/download/1.26.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose

# Dockerを sudo なしで実行可能に
## ※ カレントユーザーをdockerグループに所属させた上で docker.sock へのグループ書き込み権限を付与すればよい
$ sudo gpasswd -a $USER docker
$ sudo chgrp docker /var/run/docker.sock
$ sudo service docker restart

# 一度ログアウトしないと反映されないため、一旦 exit
$ exit
```

### ●cookie

- 127.0.0.1
- localhost

- auth.atlassian.com
- id.atlassian.com
- bitbucket.org

- github.com

- google.com
- accounts.google.com
- mail.google.com

- twitter.com

