# 親子関連

　  
　  
- - - 
## ■基本
###
　  
　  
- - - 
## ■親子孫関連
###
　  
　  
- - - 
## ■polymorphic関連
###

polymorphic指定の追加
polymorphic指定の基本的な流れ  
http://ruby-rails.hatenadiary.com/entry/20141207/1417926599  


polymorphicのカラム追加（子、孫などにxxxable_idとxxxable_typeの追加）
```
$ bundle exec rails g migration AddImageableToProducts imageable:references{polymorphic}
```
[参考：DRYING UP RAILS CONTROLLERS: POLYMORPHIC AND SUPER CONTROLLERS](http://pathfindersoftware.com/2008/07/drying-up-rails-controllers-polymorphic-and-super-controllers/)
　  

### 親子孫のpolymorphic
　　　　　 親  
子１　　　　　　　　子２  
　　　as: :xxxable  
　　　　　孫  




　  
　  
http://rails-bestpractices.com/posts/2010/08/18/use-sti-and-polymorphic-model-for-multiple-uploads/  
http://qiita.com/kasei-san/items/c6ded7c45ff5ce680e9b  
http://qiita.com/mah_lab/items/14f906b6236d834bef96  
http://stackoverflow.com/questions/19043300/rails-best-practice-to-use-polymorphic-association  
