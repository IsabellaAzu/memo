

> index  
<a href="#a1">1. Gemのバージョンを調べる</a>  
<a href="#a2">2. rack-mini-profiler</a>  
<a href="#a3">3. xxx</a>  


<a id="a1"></a>  
### Gemのバージョンを調べる
https://rubygems.org/gems/devise


<a id="a2"></a>  
### 2. rack-mini-profiler
http://qiita.com/kadoppe/items/6ce36a21d829585dd319

##### 計測結果がWebページに表示されないようにする

![](http://i.gyazo.com/208c8f8c53450f2bbc680dce15dca811.png)  

* パラメーター  
　・計測結果を非表示にする（セッションが有効な間はずっと表示されない）  
　　http://localhost:3000/projects/1?pp=disable  
　・再度表示させたい場合  
　　http://localhost:3000/projects/1?pp=enable  

* 設定 

> config/initializers/mini_profiler.rb  
```
if defined?(Rack::MiniProfiler)  
  Rack::MiniProfiler.config.auto_inject = false  
end  
```

<a id="a3"></a>  
### 3. xxx  


