
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


### MiniProfilerの表示位置を変更

<img width="103" alt="スクリーンショット 2021-07-27 5 57 33" src="https://user-images.githubusercontent.com/1782095/127058218-f31984df-7c05-400f-b2c3-238d7260b1f3.png">

```
# config/initializers/application_controller_renderer.rb
Rack::MiniProfiler.config.position = 'bottom-right'
```

