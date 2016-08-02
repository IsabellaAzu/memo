
# railsよく探しそうな情報


viewでModelのカラム名一覧を取得
```
@decide_user_answer.column_names
```


polymorphic指定の追加
```
$ bundle exec rails g migration AddImageableToProducts imageable:references{polymorphic}
```
[DRYING UP RAILS CONTROLLERS: POLYMORPHIC AND SUPER CONTROLLERS](http://pathfindersoftware.com/2008/07/drying-up-rails-controllers-polymorphic-and-super-controllers/)



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

### Ruby on Rails チュートリアル 実例を使ってRailsを学ぼう Michael Hartl (マイケル・ハートル)  
http://railstutorial.jp/  


### fatなcontroller、model問題の対策
http://qiita.com/aDaichiOta/items/3fa5bc302565bcd495a8


### Time.now と Time.current の違い

#### RubyとRailsにおけるTime, Date, DateTime, TimeWithZoneの違い
http://qiita.com/jnchito/items/cae89ee43c30f5d6fa2c

#### rails5でのtime型
http://blog.willnet.in/entry/2015/06/12/063731

   
### Rails4: fields_forとstrong_parametersで複数レコードの更新に対応する方法  
「fields_forで作った要素をstrong_parametersで許可したいんだがなー…。配列じゃなくて…。」  
http://319ring.net/blog/archives/2591   

view  
```
- model_class = Hoge
= form_tag update_enable_list_hoges_path, method: :put do
  table
    thead
      tr
        th = model_class.human_attribute_name(:id)
        th = model_class.human_attribute_name(:name)
        th 有効フラグ
    tbody
      - @hoges.each do |hoge|
        = fields_for('hoges[]', hoge, index: nil) do |fh|
          tr
            td = hoge.id
            td = hoge.name
            td
              = fh.check_box :enable
              = fh.hidden_field :id
  .form-actions
    = submit_tag '更新'
```

controller  
```
class HogesController < ApplicationController
  # 省略
 
  private
  def hoge_params
    # 通常のcreate, updateで呼ばれるほう
  end
 
  def hoges_params
    params.require(:hoges).map do |param|
      ActionController::Parameters.new(param.to_hash).permit(:id, :enable)
    end
  end
end
```

- - -

### FactoryGirlってなんぞ？？（テスト関連？？）
http://blog.inouetakuya.info/entry/2013/12/28/205008  
http://techracho.bpsinc.jp/morimorihoge/2013_08_23/12744  
http://o.inchiki.jp/obbr/159  
http://miyohide.hatenablog.com/entry/20120510/1336660092  



##よく見かけるblog

酒と泪とRubyとRailsと  
http://morizyun.github.io/
