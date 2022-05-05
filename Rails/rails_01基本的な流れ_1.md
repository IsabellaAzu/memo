
# 基本的な流れ　  

## ローカル環境のアップグレード

```
brew update
brew upgrade rbenv
rbenv install --list
rbenv install 3.1.2
rbenv global 3.1.2
```

## ローカルRails環境構築

```
bundle init
bundle config set --local path 'vendor/bundle'

// mysql2で問題がある場合
bundle config --local build.mysql2 "--with-cppflags=-I/usr/local/opt/openssl@1.1/include"
bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl@1.1/lib"

gem 'rails', '~> 7.0', '>= 7.0.2.4'

bundle install
```

## プロジェクト作成

### rails new 省略内容確認
bundle exec rails new -h

```
# deviseを使った最低限で
bundle exec rails new . -B -C -S -J -M --database=mysql --skip-asset-pipeline --skip-javascript --skip-hotwire --skip-bootsnap --skip-jbuilder --skip-sprockets --skip-turbolinks --skip-action-text --skip-active-storage --skip-action-cable --skip-action-mailbox --skip-test --skip-system-test

追加Gem
gem 'devise', '~> 4.8', '>= 4.8.1'

cd プロジェクト名
bundle install
```

<a href="https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_04devise%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9.md">→ deviseのインストールへ</a><br>


```
# 省略内容一覧
Usage:
  rails new APP_PATH [options]

Options:
      [--skip-namespace], [--no-skip-namespace]              # Skip namespace (affects only isolated engines)
      [--skip-collision-check], [--no-skip-collision-check]  # Skip collision check
  -r, [--ruby=PATH]                                          # Path to the Ruby binary of your choice
                                                             # Default: /Users/azu/.rbenv/versions/3.1.2/bin/ruby
  -m, [--template=TEMPLATE]                                  # Path to some application template (can be a filesystem path or URL)
  -d, [--database=DATABASE]                                  # Preconfigure for selected database (options: mysql/postgresql/sqlite3/oracle/sqlserver/jdbcmysql/jdbcsqlite3/jdbcpostgresql/jdbc)
                                                             # Default: sqlite3
  -G, [--skip-git], [--no-skip-git]                          # Skip .gitignore file
      [--skip-keeps], [--no-skip-keeps]                      # Skip source control .keep files
  -M, [--skip-action-mailer], [--no-skip-action-mailer]      # Skip Action Mailer files
      [--skip-action-mailbox], [--no-skip-action-mailbox]    # Skip Action Mailbox gem
      [--skip-action-text], [--no-skip-action-text]          # Skip Action Text gem
  -O, [--skip-active-record], [--no-skip-active-record]      # Skip Active Record files
      [--skip-active-job], [--no-skip-active-job]            # Skip Active Job
      [--skip-active-storage], [--no-skip-active-storage]    # Skip Active Storage files
  -C, [--skip-action-cable], [--no-skip-action-cable]        # Skip Action Cable files
  -A, [--skip-asset-pipeline], [--no-skip-asset-pipeline]    # Indicates when to generate skip asset pipeline
  -a, [--asset-pipeline=ASSET_PIPELINE]                      # Choose your asset pipeline [options: sprockets (default), propshaft]
                                                             # Default: sprockets
  -J, [--skip-javascript], [--no-skip-javascript]            # Skip JavaScript files
      [--skip-hotwire], [--no-skip-hotwire]                  # Skip Hotwire integration
      [--skip-jbuilder], [--no-skip-jbuilder]                # Skip jbuilder gem
  -T, [--skip-test], [--no-skip-test]                        # Skip test files
      [--skip-system-test], [--no-skip-system-test]          # Skip system test files
      [--skip-bootsnap], [--no-skip-bootsnap]                # Skip bootsnap gem
      [--dev], [--no-dev]                                    # Set up the application with Gemfile pointing to your Rails checkout
      [--edge], [--no-edge]                                  # Set up the application with Gemfile pointing to Rails repository
  --master, [--main], [--no-main]                            # Set up the application with Gemfile pointing to Rails repository main branch
      [--rc=RC]                                              # Path to file containing extra configuration options for rails command
      [--no-rc], [--no-no-rc]                                # Skip loading of extra configuration options from .railsrc file
      [--api], [--no-api]                                    # Preconfigure smaller stack for API only apps
      [--minimal], [--no-minimal]                            # Preconfigure a minimal rails app
  -j, [--javascript=JAVASCRIPT]                              # Choose JavaScript approach [options: importmap (default), webpack, esbuild, rollup]
                                                             # Default: importmap
  -c, [--css=CSS]                                            # Choose CSS processor [options: tailwind, bootstrap, bulma, postcss, sass... check https://github.com/rails/cssbundling-rails]
  -B, [--skip-bundle], [--no-skip-bundle]                    # Don't run bundle install

Runtime options:
  -f, [--force]                    # Overwrite files that already exist
  -p, [--pretend], [--no-pretend]  # Run but do not make any changes
  -q, [--quiet], [--no-quiet]      # Suppress status output
  -s, [--skip], [--no-skip]        # Skip files that already exist

Rails options:
  -h, [--help], [--no-help]        # Show this help message and quit
  -v, [--version], [--no-version]  # Show Rails version number and quit

Example:
    rails new ~/Code/Ruby/weblog
```

https://zenn.dev/yukito0616/articles/7cd2dde18c90d4#spring%E3%81%8C%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E8%A9%B0%E3%81%BE%E3%82%8B%E3%81%8B%E3%82%89%E4%BD%BF%E3%81%84%E3%81%9F%E3%81%8F%E3%81%AA%E3%81%84%E3%82%93%E3%81%98%E3%82%83


## 新しいMacのSSL問題

```
Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries
Generally there are no consequences of this for you. If you build your own software and it requires this formula, you'll need to add to your build variables:
```
↓
```
$ vim ~/.zshrc

export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/mysql@5.7/lib"
export CPPFLAGS="-I/usr/local/opt/mysql@5.7/include"
export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/opt/openssl/lib/
export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"
export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"

$ source ~/.zshrc
```

## データベース作成

```
$ mysql.server start
$ bundle exec rails db:create
$ bundle exec rails s

# localhost:8888のポート番号で起動
$ bundle exec rails s -p 8888

# 本番環境でrackサーバーをデーモンとして実行の場合
$ bundle exec rails s -e production -d
```

## 便利なgemをGemfileに追記

例えば  
Gemfileのgroup :development, :test doに下記４つを追記  
https://github.com/funnythingz/pins/blob/master/Gemfile  

```
# /Gemfile
group :development, :test do
  gem 'pry-rails'          # rails cでirbの代わりにpryを使う
  gem 'pry-doc'            # methodを表示
  gem 'pry-stack_explorer' # デバッグを実施
  gem 'pry-byebug'         # スタックをたどれる
end

$ bundle install
```
　  

## Git

### 3. gitignore

https://www.gitignore.io/で生成

```
### Rails ###

# Ignore bundler config.
/.bundle
/.ruby-version
vendor/
/vendor/bundle/*
node_modules/

Gemfile.lock

# Ignore all logfiles and tempfiles.
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep

# Ignore pidfiles, but keep the directory.
/tmp/pids/*
!/tmp/pids/
!/tmp/pids/.keep

# Ignore master key for decrypting credentials and more.
#/config/master.key
```

 `/home/xxx/config/secrets.yml` は `/home/xxx/config/credentials.yml.enc`に変更されている。  
https://qiita.com/NaokiIshimura/items/2a179f2ab910992c4d39  


### 最初のコミット

```
git init
git config --global push.default current
git add .
git commit -m "最初のコミット"

git remote add origin git@bitbucket.org:ｘｘｘ/ｘｘｘ.git
git push -u origin master

# git remote set-url origin　で、fatal: No such remote 'origin'というエラーが出た場合、
# 先にremoteをaddする必要があり、set-urlはあくまでもremote先を変える。
# SSHを始めから用いるのであれば、以下のコマンドで。
git remote add origin git@github.com:xxxxxxx/[Ripository name].git

# 紐づけているリモートリポジトリを確認できる
git remote -v    
```


## 次

<a href="https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_01%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C_2.md">基本的な流れ2</a>


## 参考情報

### Zeitwerk

- https://techracho.bpsinc.jp/hachi8833/2019_01_28/68986  
- https://github.com/fxn/zeitwerk#file-structure
- https://railsguides.jp/autoloading_and_reloading_constants.html#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%90%BD%E3%81%A8%E3%81%97%E7%A9%B4  

### Stimulus

- https://qiita.com/SAPPOROBEER/items/ce29b3551e65ea901108



## 参考情報

<details><summary>rails6以前</summary><div>
2019.08.01 rails newするときによく使うオプションと、rails newした後によく行う設定  
https://qiita.com/jun_jun_jun/items/dd260c43387a8e17803d  

2018.08.08 Railsでパーシャルを切り出すときはインスタンス変数をローカル変数にする  
https://mom0tomo.hateblo.jp/entry/2018/08/08/211238  

2019.11.15 Action Mailer でメール送信機能をつくる  
https://qiita.com/annaaida/items/81d8a3f1b7ae3b52dc2b  

2019.09.14 【Rails】Rails 6.0 x Docker x MySQLで環境構築  
https://qiita.com/nsy_13/items/9fbc929f173984c30b5d  

2019.09.27 Rails 6 + MySQL on Dockerの環境を秒速で構築する  
https://masaki.blog/rails6-on-docker/  
</div></details>




