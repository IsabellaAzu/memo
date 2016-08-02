
# model関連
```ruby
# 親オブジェクトで子オブジェクトを編集できるように
accepts_nested_attributes_for :decide_choices, allow_destroy: true
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
# 親のupdate_atを
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
