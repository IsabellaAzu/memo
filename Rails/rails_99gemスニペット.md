
## Rubyのgemを探そう

https://rubygems.org/  
　  

- - -

### Ransack(検索)、kaminari(ページング)

#### 環境
'ruby' '2.2.1p85'  
'rails', '4.2.1'  
'ransack', '1.7.0'  
'kaminari', '0.16.3'  

#### スニペット
```
# コントローラ
    @q        = モデル名.ransack(params[:q])
    results = @q.result(distinct: true)
    @result_length = @q.result.length

# view

```


- - -

