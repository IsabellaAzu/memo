
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
## ■Modelのクエリ
http://qiita.com/merrill/items/8ec158953cb4c2715c7b  
http://ruby-rails.hatenadiary.com/entry/20140724/1406142120  
find、take、first / second / third... / last、find_by、all / find_each / find_in_batcheswhere、order、  
select、limit / offset、find_or_create_by / find_or_initialize_by / find_by_sql / select_all / group、
pluck / ids / exists? / count / average / minimum / maximum / sum / readonly / to_sql / explain


- - - 


## ■マイグレーション関連

> 参考：Railsでカラムのデータ型を変更する場合の手順  
https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&sqi=2&ved=0CDcQFjAE&url=http%3A%2F%2Fblog.jnito.com%2Fentry%2F20120514%2F1336951768&ei=6YK-VIDQKYPDmwXivoGoCg&usg=AFQjCNG3Xr6JaoHp-pOZmurl52AT8nv8Zw&sig2=eH76S7nwMYjykmYn-DmeJA&bvm=bv.83829542,d.dGY&cad=rja  

#### データ型(Railsの場合、databaseに合わせて下記を内部的に変換する)

<table>
<tr>
<td>マイグレーション</td>
<td>MySQL</td>
<td>Ruby</td>
<td>出力例</td>
</tr>
<tr>
<td>integer（整数）</td>
<td>int(11)</td>
<td>Fixnum</td>
<td></td>
</tr>
<tr>
<td>float（浮動小数）</td>
<td>float</td>
<td>Float</td>
<td></td>
</tr>
<tr>
<td>decimal（制度の高い小数）</td>
<td>decimal(10,0)</td>
<td>BigDecimal</td>
<td></td>
</tr>
<tr>
<td>string（文字列）</td>
<td>varchar(255)</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>text（長い文字列）</td>
<td>text</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>binary（バイナリデータ）</td>
<td>blob</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>date（日付）</td>
<td>date</td>
<td>Date</td>
<td>YYYY-MM-DD</td>
</tr>
<tr>
<td>datetime（日時）</td>
<td>datetime</td>
<td>Time</td>
<td>YYYY-MM-DD HH:MM:SS</td>
</tr>
<tr>
<td>time（時間）</td>
<td>time</td>
<td>Time</td>
<td>HH:MM:SS</td>
</tr>
<tr>
<td>timestamp（より細かい日時）</td>
<td>datetime</td>
<td>Time</td>
<td>YYYY-MM-DD HH:MM:SS</td>
</tr>
<tr>
<td>boolean（Boolean型(true or false)）</td>
<td>tinyint(1)</td>
<td>TrueClass/FalseClass</td>
<td></td>
</tr>
<tr>
<td>references（外部キー）</td>
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

```ruby
```

### tableにカラム追加時



　  
　  
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
