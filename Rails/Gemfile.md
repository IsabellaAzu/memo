


## railsでプロジェクト作成時に生成されたGemfile
https://github.com/funnythingz/reviewer/blob/master/Gemfile
```Ruby
source 'https://rubygems.org'
source 'https://rails-assets.org'

ruby '2.1.4'

gem 'rails', '~> 4.2.0'
gem 'rake', '~> 10.4.2'
gem 'mysql2'
gem 'sass-rails', '~> 5.0.1'
gem 'compass-rails', '~> 2.0.1', git: 'https://github.com/Compass/compass-rails.git'
gem 'uglifier', '>= 1.3.0'
gem 'slim-rails'

gem 'jquery-rails', '~> 4.0.2'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'rails_config'
gem 'devise'

# assets
gem 'rails-assets-jquery'
gem 'rails-assets-underscore'
gem 'rails-assets-components-font-awesome'
gem 'rails-assets-bootstrap'
gem 'rails-assets-bootswatch'

# decorate
gem 'draper', '~> 1.3'

# paginate
gem 'kaminari'

# form helper
gem 'enum_help'
gem 'simple_form', '~> 3.1.0.rc1'

# byStar
gem 'by_star', git: 'https://github.com/radar/by_star.git'
gem 'chronic'

# my helper
gem 'active_link_to'
gem 'meta-tags'

# admin
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', github: 'josevalim/inherited_resources', branch: 'rails-4-2'
gem 'active_admin_importable'

# validate
gem 'validates_email_format_of'

# search
gem 'ransack', github: 'activerecord-hackery/ransack'

group :development, :test do
  gem 'typescript-rails', '~> 0.4.2'
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

group :production do
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





