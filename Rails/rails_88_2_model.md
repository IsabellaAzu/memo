
# model関連


## validate関連
　  
### 子オブジェクト(ここではorder)がsaveされるとき検証をおこなう。
```ruby
class Order < ActiveRecord::Base
  belongs_to :customer, validate: true
end
class Customer < ActiveRecord::Base
  has_many :orders
end
```
　  
### いろんなvalidate
```ruby
class User < ActiveRecord::Base
  validates :username,
    presence: true,                     # 必須にしたい！
    uniqueness: true,                   # URLに使うしユニーク！
    length: { maximum: 16 },            # あんまり長いのも……
    format: { with: /\A[a-z0-9]+\z/i }  # やっぱり半角英数字のみだよね！
end
```

[Active Record(Railsのモデル) バリデーションまとめ](https://morizyun.github.io/ruby/active-record-validation.html)  
　  
　  
- - - 
　  
　  
## 親子関連
　  
### 親オブジェクトで子オブジェクトを編集できるように
```ruby
accepts_nested_attributes_for :orders, allow_destroy: true
```
　  
　  
### destroy：親オブジェクトがdestroyされたら、子オブジェクトもdestroyされる。
```ruby
class Order < ActiveRecord::Base
  belongs_to :customer, dependent: :destroy,
    counter_cache: true
end
```


### touch：子オブジェクトがsaveされたりdestroyされたりしたとき、親オブジェクトのupdated_atやupdated_onにカレントタイムを設定させる。
```ruby
class DecideUserAnswer < ActiveRecord::Base
  belongs_to :answerable, polymorphic: true, touch: true
end
```
　  
　  
- - - 
　  
　  
## ■マイグレーション関連

### データ型(Railsの場合、databaseに合わせて下記を内部的に変換する)

<table>
<tr>
<th></th>
<td>マイグレーション</td>
<td>MySQL</td>
<td>Ruby</td>
<td>出力例</td>
</tr>
<tr>
<th>整数</th>
<td>integer</td>
<td>int(11)</td>
<td>Fixnum</td>
<td></td>
</tr>
<tr>
<th>浮動小数</th>
<td>float</td>
<td>float</td>
<td>Float</td>
<td></td>
</tr>
<tr>
<th>制度の高い小数</th>
<td>decimal</td>
<td>decimal(10,0)</td>
<td>BigDecimal</td>
<td></td>
</tr>
<tr>
<th>文字列</th>
<td>string</td>
<td>varchar(255)</td>
<td>String</td>
<td></td>
</tr>
<tr>
<th>長い文字列</th>
<td>text</td>
<td>text</td>
<td>String</td>
<td></td>
</tr>
<tr>
<th>バイナリデータ</th>
<td>binary</td>
<td>blob</td>
<td>String</td>
<td></td>
</tr>
<tr>
<th>日付</th>
<td>date</td>
<td>date</td>
<td>Date</td>
<td>YYYY-MM-DD</td>
</tr>
<tr>
<th>日時</th>
<td>datetime</td>
<td>datetime</td>
<td>Time</td>
<td>YYYY-MM-DD HH:MM:SS</td>
</tr>
<tr>
<th>時間</th>
<td>time</td>
<td>time</td>
<td>Time</td>
<td>HH:MM:SS</td>
</tr>
<tr>
<th>より細かい日時</th>
<td>timestamp</td>
<td>datetime</td>
<td>Time</td>
<td>YYYY-MM-DD HH:MM:SS</td>
</tr>
<tr>
<th>Boolean型(true or false)</th>
<td>boolean</td>
<td>tinyint(1)</td>
<td>TrueClass/FalseClass</td>
<td></td>
</tr>
<tr>
<th>外部キー</th>
<td>references</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

| Field           | Type          | Null | Key | Default | Extra          |  
|:----------------|:--------------|:-----|:----|:--------|:---------------|  
| id              | int(11)       | NO   | PRI | NULL    | auto_increment |  
| field_integer   | int(11)       | YES  |     | NULL    |                |  
| field_decimal   | decimal(10,0) | YES  |     | NULL    |                |  
| field_float     | float         | YES  |     | NULL    |                |  
| field_string    | varchar(255)  | YES  |     | NULL    |                |  
| field_text      | text          | YES  |     | NULL    |                |  
| field_binary    | blob          | YES  |     | NULL    |                |  
| field_date      | date          | YES  |     | NULL    |                |  
| field_datetime  | datetime      | YES  |     | NULL    |                |  
| field_timestamp | datetime      | YES  |     | NULL    |                |  
| field_time      | time          | YES  |     | NULL    |                |  
| field_boolean   | tinyint(1)    | YES  |     | NULL    |                |  

### model作成時

#### 

model名は先頭大文字・キャメル・単数形 BookやMyBook  
「rails generate model モデル名 カラム名:データ型 カラム名:データ型 ...」  
```
$ bundle exec rails g model モデル名 フィールド:型:(unique|index) 以降必要なだけ
$ bundle exec rails g model Project title
# bundle exec rails generate model Project title:stringの省略形
```

```
$ bundle exec rails g
 model XxxxYyyy
 label:string
 cart_id:string:unique
 user_id:integer
 item_category_id:integer
 item_id:integer
 period_at:datetime(0)
```

※index  →
MySQLでインデックスを貼る時に読みたいページまとめ(初心者向け）  
https://qiita.com/C058/items/1c9c57f634ebf54d99bb  

#### migrationファイルの修正

日付表示が、`2020-03-04 04:59:41.771784`になるのがイヤな場合  
ミリ秒も厳密に比較したい場合はあった方が良いケースもある

datetime(6)　→　datetime(0)

> 参考：Railsでカラムのデータ型を変更する場合の手順  
https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&sqi=2&ved=0CDcQFjAE&url=http%3A%2F%2Fblog.jnito.com%2Fentry%2F20120514%2F1336951768&ei=6YK-VIDQKYPDmwXivoGoCg&usg=AFQjCNG3Xr6JaoHp-pOZmurl52AT8nv8Zw&sig2=eH76S7nwMYjykmYn-DmeJA&bvm=bv.83829542,d.dGY&cad=rja  


### tableにカラム追加時


　  
　  
- - - 
　  
　  
## ■Modelのクエリ
http://qiita.com/merrill/items/8ec158953cb4c2715c7b  
http://ruby-rails.hatenadiary.com/entry/20140724/1406142120  
find、take、first / second / third... / last、find_by、all / find_each / find_in_batcheswhere、order、  
select、limit / offset、find_or_create_by / find_or_initialize_by / find_by_sql / select_all / group、
pluck / ids / exists? / count / average / minimum / maximum / sum / readonly / to_sql / explain
　  
　  
- - - 


## ■型関連

[【Rails・MySQL】MySQLのデータ型とRailsのマイグレーションファイルのデータ定義の対応まとめ](https://qiita.com/vermilionfog/items/816fa7de1d0213979929)  
[RailsのDB設計：小数点をあつかう場合のアンチパターン](http://chamao.hatenablog.com/entry/2018/04/08/103805)  
　  
### 位置情報

- [kayac:ゼロから始めるRails位置ゲーサーバ（その１）](https://techblog.kayac.com/how-to-use-postgis-with-rails-part1)  
- [Railsマイグレーションでdecimal型の精度（桁数）を指定](https://easyramble.com/rails-migration-with-decimal.html)  
- [MySQLに緯度経度を保存する際の、カラム型の選び方double型](https://qiita.com/y-ken/items/55d8e90d1a826391cda8)  
- [MySQL5.7(MyISAM)でGeometry型の挙動を確認する](https://blog.takanabe.tokyo/2017/03/21/2606/)  
- [MySQLのgeometry型で○km以内の場所を取得してみました](https://qiita.com/mitani/items/6909406ac4fe0db2d35c)  
