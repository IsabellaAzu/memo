
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

