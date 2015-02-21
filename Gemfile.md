


> index  
<a href="#a1">1. Gemのバージョンを調べる</a>  
<a href="#a2">2. rack-mini-profiler</a>  
<a href="#a3">3. xxx</a>  


<a id="a1"></a>  
### Gemのバージョンを調べる
https://rubygems.org/gems/devise


<a id="a2"></a>  
### 2. rack-mini-profiler
http://qiita.com/kadoppe/items/6ce36a21d829585dd319

##### 計測結果がWebページに表示されないようにする

![](http://i.gyazo.com/208c8f8c53450f2bbc680dce15dca811.png)  

* パラメーター  
　・計測結果を非表示にする（セッションが有効な間はずっと表示されない）  
　　http://localhost:3000/projects/1?pp=disable  
　・再度表示させたい場合  
　　http://localhost:3000/projects/1?pp=enable  

* 設定 

> config/initializers/mini_profiler.rb  
```
if defined?(Rack::MiniProfiler)  
  Rack::MiniProfiler.config.auto_inject = false  
end  
```

<a id="a3"></a>  
### 3. xxx  






## railsでプロジェクト作成時に生成されたGemfile

```Ruby
source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'  
gem 'rails', '4.2.0'  
# Use mysql as the database for Active Record  
gem 'mysql2'  
# Use SCSS for stylesheets  
gem 'sass-rails', '~> 5.0'  
# Use Uglifier as compressor for JavaScript assets  
gem 'uglifier', '>= 1.3.0'  
# Use CoffeeScript for .coffee assets and views  
gem 'coffee-rails', '~> 4.1.0'  
# See https://github.com/sstephenson/execjs#readme for more supported runtimes  
# gem 'therubyracer', platforms: :ruby  

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

```

- - - 


## 参考Gemfile２  
```Ruby
source 'https://rubygems.org'  

gem 'rails', '4.2.0.rc1'  
gem 'rake', '~> 10.4.0'  
gem 'mysql2'  
gem 'sass-rails', '~> 5.0.0.beta1'  
gem 'compass-rails'  
gem 'uglifier', '>= 1.3.0'  
gem 'typescript-rails', '~> 0.4.2'  
gem 'slim-rails'  

gem 'turbolinks'  
gem 'jquery-rails'  
gem 'jbuilder', '~> 2.0'  
gem 'sdoc', '~> 0.4.0', group: :doc  

gem "rails_config"  

# decorate  
gem 'draper', '~> 1.3'  

# paginate  
gem 'kaminari'  

# User Authorization  
gem 'devise'  
gem 'cancancan'  

# form helper  
gem 'enum_help'  
gem 'simple_form', '~> 3.1.0.rc1'  

# byStar  
gem 'by_star'  

# JS  
gem 'bower-rails'  

# Image  
gem 'carrierwave'  
gem "mini_magick"  

# my helper  
gem 'active_link_to'  

# validation  
gem 'validates_email_format_of'  

group :development, :test do  
  gem 'byebug'  
  gem 'web-console', '~> 2.0.0.beta4'  
  gem 'spring'  
  gem 'rspec-rails', '~> 3.0'  
  gem 'factory_girl_rails'  
  gem 'pry-rails'  
  gem 'pry-doc'  
  gem 'pry-stack_explorer'  
  gem 'pry-byebug'  
end  

group :development do  
  gem "better_errors"  
  gem 'quiet_assets'  
  gem 'rack-mini-profiler'  
  gem 'tapp'  
end  

group :test do  
  gem 'faker'  
  gem 'database_cleaner'  
end  

```


## 参考Gemfile３
http://ruby-rails.hatenadiary.com/entry/20150204/1423055537  
```Ruby
# jqueryのイベントがturbolinkのせいで発火しなくなる問題を解消するgem
gem 'jquery-turbolinks'

group :development do
  # 開発を効率化する関連
  gem 'guard-livereload', require: false # ソースを修正するとブラウザが自動でロードされ、画面を作るときに便利
  gem 'rails-erd'                        # rake-erdコマンドでActiveRecordからER図を作成できる
  gem 'spring-commands-rspec'            # bin/rspecコマンドを使えるようにし、rspecの起動を早めれる
  gem 'bullet'                           # n+1問題を発見

  # 保守性を上げる
  gem 'rubocop', require: false          # コーディング規約の自動チェック
end

group :development, :test do
  # pry関連(デバッグなど便利)
  gem 'pry-rails'    # rails cの対話式コンソールがirbの代わりにリッチなpryになる
  gem 'pry-doc'      # pry中に show-source [method名] でソース内を読める
  gem 'pry-byebug'   # binding.pryをソースに記載すると、ブレイクポイントとなりデバッグが可能になる
  gem 'pry-stack_explorer' # pry中にスタックを上がったり下がったり行き来できる

  # 表示整形関連(ログなど見やすくなる)
  gem 'hirb'         # モデルの出力結果を表形式で表示する
  gem 'hirb-unicode' # hirbの日本語などマルチバイト文字の出力時の出力結果がすれる問題に対応
  gem 'rails-flog', require: 'flog' # HashとSQLのログを見やすく整形
  gem 'better_errors'     # 開発中のエラー画面をリッチにする
  gem 'binding_of_caller' # 開発中のエラー画面にさらに変数の値を表示する
  gem 'awesome_print'     # Rubyオブジェクトに色をつけて表示して見やすくなる
  gem 'quiet_assets'      # ログのassetsを表示しないようにし、ログを見やすくしてくれる

  # テスト関連
  gem "rspec-rails"        # rspec本体
  gem "shoulda-matchers"   # モデルのテストを簡易にかけるmatcherが使える
  gem "factory_girl_rails" # テストデータ作成
  gem "capybara"           # エンドツーエンドテスト
  gem "capybara-webkit"    # エンドツーエンドテスト(javascript含む)
  gem 'launchy'            # capybaraのsave_and_open_pageメソッドの実行時に画面を開いてくれる
  gem "database_cleaner"   # エンドツーエンドテスト時のDBをクリーンにする
  gem "test-queue"         # テストを並列で実行する
  gem 'faker'              # 本物っぽいテストデータの作成
  gem 'faker-japanese'     # 本物っぽいテストデータの作成（日本語対応）
end
```



##  





