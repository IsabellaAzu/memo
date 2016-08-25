
# model関連


### validate：子オブジェクト(ここではorder)がsaveされるとき検証をおこなう。
```ruby
class Order < ActiveRecord::Base
  belongs_to :customer, validate: true
end
class Customer < ActiveRecord::Base
  has_many :orders
end
```


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


```ruby
# delete：
```


### touch：子オブジェクトがsaveされたりdestroyされたりしたとき、親オブジェクトの updated_at や updated_onにカレントタイムが設定させる。
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
## ■xxx関連
###
　  
　  
- - - 
## ■xxx関連

###
