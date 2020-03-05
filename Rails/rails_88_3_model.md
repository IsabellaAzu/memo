
# model関連
　  
## validate関連
　  
### 子オブジェクト(ここではorder)がsaveされるとき検証をおこなう。
```ruby
class Order < ActiveRecord::Base
  belongs_to :customer, validate: true
end
class Customer < ActiveRecord::Base
  has_many :orders
end
```
　  
### いろんなvalidate
```ruby
class User < ActiveRecord::Base
  validates :username,
    presence: true,                     # 必須にしたい！
    uniqueness: true,                   # URLに使うしユニーク！
    length: { maximum: 16 },            # あんまり長いのも……
    format: { with: /\A[a-z0-9]+\z/i }  # やっぱり半角英数字のみだよね！
end
```

[Active Record(Railsのモデル) バリデーションまとめ](https://morizyun.github.io/ruby/active-record-validation.html)  

　  
- - - 
## 親子関連
　  
### 親オブジェクトで子オブジェクトを編集できるように
```ruby
accepts_nested_attributes_for :orders, allow_destroy: true
```
　  
　  
### destroy：親オブジェクトがdestroyされたら、子オブジェクトもdestroyされる。
```ruby
class Order < ActiveRecord::Base
  belongs_to :customer, dependent: :destroy,
    counter_cache: true
end
```


### touch：子オブジェクトがsaveされたりdestroyされたりしたとき、親オブジェクトのupdated_atやupdated_onにカレントタイムを設定させる。
```ruby
class DecideUserAnswer < ActiveRecord::Base
  belongs_to :answerable, polymorphic: true, touch: true
end
```
　  
　  
- - - 
## ■Modelのクエリ
http://qiita.com/merrill/items/8ec158953cb4c2715c7b  
http://ruby-rails.hatenadiary.com/entry/20140724/1406142120  
find、take、first / second / third... / last、find_by、all / find_each / find_in_batcheswhere、order、  
select、limit / offset、find_or_create_by、find_or_initialize_by、find_by_sql、select_all、group、pluck、ids、exists?、
count、average、minimum、maximum、sum、readonly、to_sql、explain



- - - 


## ■マイグレーション関連
　  
### model作成時

```ruby
```

### tableにカラム追加時



　  
　  
- - - 


## ■型関連

[【Rails・MySQL】MySQLのデータ型とRailsのマイグレーションファイルのデータ定義の対応まとめ](https://qiita.com/vermilionfog/items/816fa7de1d0213979929)  
[RailsのDB設計：小数点をあつかう場合のアンチパターン](http://chamao.hatenablog.com/entry/2018/04/08/103805)  
　  
### 位置情報

- [kayac:ゼロから始めるRails位置ゲーサーバ（その１）](https://techblog.kayac.com/how-to-use-postgis-with-rails-part1)  
- [Railsマイグレーションでdecimal型の精度（桁数）を指定](https://easyramble.com/rails-migration-with-decimal.html)  
- [MySQLに緯度経度を保存する際の、カラム型の選び方double型](https://qiita.com/y-ken/items/55d8e90d1a826391cda8)  
- [MySQL5.7(MyISAM)でGeometry型の挙動を確認する](https://blog.takanabe.tokyo/2017/03/21/2606/)  
- [MySQLのgeometry型で○km以内の場所を取得してみました](https://qiita.com/mitani/items/6909406ac4fe0db2d35c)  
