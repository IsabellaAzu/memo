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
```
$ bundle exec rails g migration AddImageableToProducts imageable:references{polymorphic}
```
[参考：DRYING UP RAILS CONTROLLERS: POLYMORPHIC AND SUPER CONTROLLERS](http://pathfindersoftware.com/2008/07/drying-up-rails-controllers-polymorphic-and-super-controllers/)

http://rails-bestpractices.com/posts/2010/08/18/use-sti-and-polymorphic-model-for-multiple-uploads/
http://ruby-rails.hatenadiary.com/entry/20141207/1417926599
http://qiita.com/kasei-san/items/c6ded7c45ff5ce680e9b
http://qiita.com/mah_lab/items/14f906b6236d834bef96
