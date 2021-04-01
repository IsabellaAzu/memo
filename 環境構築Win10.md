

### Editor

#### VSCode

https://azure.microsoft.com/ja-jp/products/visual-studio-code/


### MySQL

https://dev.mysql.com/downloads/mysql/  
https://dev.mysql.com/downloads/file/?id=500615  
https://prog-8.com/docs/mysql-env-win  
https://qiita.com/ab-boy_ringo/items/1de0a81784a85ece9171  



### キー配置変更

#### Change Key

https://freesoft-100.com/review/change-key.php


### ターミナル

#### Fluent Terminal(コピペできる)

https://www.microsoft.com/ja-jp/p/fluent-terminal/9p2krlmfxf9t?activetab=pivot:overviewtab

#### Windows Terminal(コピペできない)

https://www.microsoft.com/ja-jp/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab

### WSLの有効化

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
brew doctor
brew cleanup

sudo apt-get install build-essential curl file git
```

#### rbenvコマンド

#### gem



