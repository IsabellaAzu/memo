
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
## ■xxx関連
###
```
```

　  
- - - 
## ■xxx関連
###
　  
　  
- - - 
## ■xxx関連

###
