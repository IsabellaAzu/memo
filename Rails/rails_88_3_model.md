
# model関連
```
# 親オブジェクトで子オブジェクトを編集できるように
accepts_nested_attributes_for :decide_choices, allow_destroy: true
```


```
# destroy
class Order < ActiveRecord::Base
  belongs_to :customer, dependent: :destroy,
    counter_cache: true
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
