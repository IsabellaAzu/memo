
# railsよく探しそうな情報


## 画像周り

Railsの画像をアップロードするgemのCarrierWave  
http://ruby-rails.hatenadiary.com/entry/20141015/1413300088  


## 規約
Rubyを使っているプロジェクトのコーディング規約を見てみよう  
http://morizyun.github.io/blog/coding-style-ruby-rails-ginza-rb/  
https://github.com/satour/rails-style-guide/blob/master/README-jaJA.md  

## ログ周り

### assetのログを非表示に
http://rainbowdevil.jp/?p=1074
```Ruby
# /config/initializers/quiet_logs.rbにファイル新規作成
Rails.application.assets.logger = Logger.new('/dev/null') 
Rails::Rack::Logger.class_eval do
  def call_with_quiet_assets(env)
    previous_level = Rails.logger.level
    Rails.logger.level = Logger::ERROR if env['PATH_INFO'].index("/assets/") == 0
    call_without_quiet_assets(env).tap do
      Rails.logger.level = previous_level
    end
  end
  alias_method_chain :call, :quiet_assets
end
```

### renderedのログを非表示に
```Ruby
# /config/application.rbに追加
# logにrederedを表示させない
config.action_view.logger = nil
```


## RailsのHTMLテンプレートエンジン Slim入門
http://ruby-rails.hatenadiary.com/entry/20140929/1411997071  


##よく見かけるblog

酒と泪とRubyとRailsと  
http://morizyun.github.io/
