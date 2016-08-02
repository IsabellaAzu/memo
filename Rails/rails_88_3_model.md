
# model関連
```
# 親オブジェクトで子オブジェクトを編集できるように
accepts_nested_attributes_for :decide_choices, allow_destroy: true
```


```
# destroy：親オブジェクトがdestroyされたら、子オブジェクトもdestroyされる。
class Order < ActiveRecord::Base
  belongs_to :customer, dependent: :destroy,
    counter_cache: true
end
```

```
# delete：
```


```
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
