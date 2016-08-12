
# 検索

　  
　  
- - - 
## ■基本
### DBへのデータアクセスを減らす (includes)


### DBへのデータアクセスを減らす (includes)
例えば、@user.commentsをeachするとDBへのデータアクセスが複数回数発生して非効率です。そこで  
```ruby
@users = User.includes(:comments).all
```
などとすると、@user.commentsのeachではすでにメモリにある情報にアクセスするだけになり高速化できます。  


## 複数テーブルのjoins/includesとwhere検索
http://easyramble.com/rails-multi-tables-joins-includes-where.html


