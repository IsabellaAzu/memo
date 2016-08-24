
# 検索

　  
　  
- - - 
## ■基本
### 
　  
　  
### DBへのデータアクセスを減らす (includes)
例えば、@user.commentsをeachするとDBへのデータアクセスが複数回数発生して非効率です。そこで  
```ruby
@users = User.includes(:comments).all
```
などとすると、@user.commentsのeachではすでにメモリにある情報にアクセスするだけになり高速化できます。  
　  
　  
## 複数テーブルのjoins/includesとwhere検索
http://easyramble.com/rails-multi-tables-joins-includes-where.html
　  
- - - 
　  
## 検索条件フォームのようにテーブルと完全に同一でないフォームもform_forを使って実装できる
ActiveModelを使えば対応するテーブルがなくてもform_forが使える  
http://qiita.com/ishidamakot/items/dc16b6e22e6ec275079f  
ActiveModelを使ってDBと関係ないFormを作成する【Rails】  
http://tanihiro.hatenablog.com/entry/2014/01/09/193720
　  
- - - 
　  
## パフォーマンス
　  
### fat controllerの回避
http://blog.goo.ne.jp/nakajima_notec/e/bd8c41e86ff5d26cd57c52a6518410ae  
ではなく  
http://ruby-rails.hatenadiary.com/entry/20140814/1407994568  
scopeを使う  
　  
### カーディナリティ
http://qiita.com/soyanchu/items/034be19a2e3cb87b2efb
　  
