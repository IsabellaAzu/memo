
# model関連


```ruby
# validate：子オブジェクト(ここではorder)がsaveされるとき検証をおこなう。
class Order < ActiveRecord::Base
  belongs_to :customer, validate: true
end
class Customer < ActiveRecord::Base
  has_many :orders
end
```


```ruby
# 親オブジェクトで子オブジェクトを編集できるように
accepts_nested_attributes_for :orders, allow_destroy: true
```


```ruby
# destroy：親オブジェクトがdestroyされたら、子オブジェクトもdestroyされる。
class Order < ActiveRecord::Base
  belongs_to :customer, dependent: :destroy,
    counter_cache: true
end
```


```ruby
# delete：
```


```ruby
# touch：子オブジェクトがsaveされたりdestroyされたりしたとき、親オブジェクトの updated_at や updated_on にカレントタイムが設定される。
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
