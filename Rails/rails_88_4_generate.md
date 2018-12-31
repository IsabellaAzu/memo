
# rails generate関連

参考：[railsコマンド](http://railsdoc.com/rails)
　  
- - - 
## テーブル作成時
例: １０進数で `最大桁数１０桁` 、 `小数点以下２桁` の `priceフィールド` を持ったモデルを作成
[Rails g modelの際のdecimal型のフィールドについての注意点](https://qiita.com/noriyotcp/items/6284ae00a6362e8b218b)

```
$ rails g model Product 'price:decimal{10,2}'
```
　  
　  
- - - 
## ■Migratoin関連
　  
### カラム追加削除
```ruby
# 書式
bundle exec rails g migration Addカラム名Toテーブル名 カラム名:型名
bundle exec rails g migration Removeカラム名Fromテーブル名 カラム名:型名
# サンプル
bundle exec rails g migration AddTagToPosts tag:string
bundle exec rails g migration RemoveTagFromPosts tag:string
# 実行
bundle exec rake db:migrate
```
　  
　  
- - - 
## テーブルがすでにある時
[基本的なカラムの追加、削除、変更](http://qiita.com/Kaki_Shoichi/items/077d0a282255cd92cff3)
```ruby
# 外部キーのカラム追加 参考：[外部キー周りの注意](http://b.pyar.bz/blog/2014/10/22/foreigner/)
bundle exec rails g migration Addカラム名RefToテーブル名 user:references（外部キーの追加：_idは記載しない）  
bundle exec rails g migration AddUserRefToTweets user:references
# カラムの削除（外部制約も外す）
bundle exec rails g migration Removeカラム名Fromテーブル名 カラム名:references
# 実行
bundle exec rake db:migrate
```
