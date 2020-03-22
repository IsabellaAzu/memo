
# rails generate関連

- railsコマンド http://railsdoc.com/rails
- https://guides.rubyonrails.org/active_record_migrations.html#passing-modifiers
　  
　  
　  
## ■ model

### ☆ テーブル作成時

#### マイグレーション関連

##### データ型(Railsの場合、databaseに合わせて下記を内部的に変換する)

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

#### model作成

`rails g model`コマンドはあくまでmigrationファイルを自動生成するためのコマンド。  
細かいカラムの指定までコマンドで行うことはできない。  
referencesは、モデルにbelongs_toを入れてくれるので、自動生成して便利。  

model名は先頭大文字・キャメル・単数形 BookやMyBook  
「rails generate model モデル名 カラム名:データ型 カラム名:データ型 ...」  

```
$ bundle exec rails g model モデル名 フィールド:型:(unique|index) 以降必要なだけ
$ bundle exec rails g model Project title
# bundle exec rails generate model Project title:stringの省略形
```

##### サンプル

```
$ bundle exec rails g model XxxxYyyy cart_id:string:uniq user:references item_category_id:integer item_id:integer item_label:string:index period_at:datetime(0)
```

##### よく追加するもの

```
, null: false
t.datetime :period_at, null: false, precision: 0

t.timestamps precision: 0
※「,」無し
```

※index  →
MySQLでインデックスを貼る時に読みたいページまとめ(初心者向け）  
https://qiita.com/C058/items/1c9c57f634ebf54d99bb  

##### migrationファイルの修正

日付表示が、`2020-03-04 04:59:41.771784`になるのがイヤな場合 `precision: 0`  
ミリ秒も厳密に比較したい場合はあった方が良いケースもある  
https://qiita.com/suketa/items/bb5005c6ac77f8c368cb   

```ruby
class CreateXxxxYyyys < ActiveRecord::Migration[6.0]
  def change
    create_table :xxxx_yyyys do |t|
      t.string :cart_id
      t.integer :user_id
      t.integer :item_category_id
      t.integer :item_id
      t.string :item_label
      t.datetime :period_at, precision: 0

      t.timestamps, precision: 0
    end
    add_index :xxxx_yyyys, :cart_id, unique: true
    add_index :xxxx_yyyys, :item_label
  end
end

def change
  create_table :hoges do |t|
    t.datetime :hoge_date, precision: 0

    t.timestamps precision: 6
  end
end
```

例: １０進数で `最大桁数１０桁` 、 `小数点以下２桁` の `priceフィールド` を持ったモデルを作成  
[Rails g modelの際のdecimal型のフィールドについての注意点](https://qiita.com/noriyotcp/items/6284ae00a6362e8b218b)

```
$ rails g model Product 'price:decimal{10,2}'
```

#### カラム追加削除

```
# 書式
$ bundle exec rails g migration Addカラム名Toテーブル名 カラム名:型名
$ bundle exec rails g migration Removeカラム名Fromテーブル名 カラム名:型名
# サンプル
$ bundle exec rails g migration AddTagToPosts tag:string
$ bundle exec rails g migration RemoveTagFromPosts tag:string

$ bundle exec rake db:migrate
```

- - - 

### ☆ テーブルがすでにある時

#### オプション

```ruby
# NULL
change_column :テーブル名, :カラム名, :型, null: true

# NOT NULL
change_column :テーブル名, :カラム名, :型, null: false

# INDEX
change_column :テーブル名, :カラム名, :型, index: true

# 初期値
change_column :テーブル名, :カラム名, :型, default: "piyo"
※初期値が空白の場合はnil。falseだとIntegerの場合0になる

# 長さ
change_column :テーブル名, :カラム名, :string, limit: 12

# 小数点以下の精度
def change
  create_table :hoges do |t|
    t.datetime :hoge_date, precision: 6

    t.timestamps precision: 6
  end
end

class Aaa < ActiveRecord::Migration[6.0]
  def change
    create_table :sample2s do |t|
      t.string  :not_null, null: false           # NOT NULL制約
      t.string  :unique,   unique: true          # ユニーク制約
      t.string  :default,  default: "default"    # デフォルト値
      t.string  :limit,    limit: 10             # LIMIT(最大長)
      t.string  :index,    index: true           # インデックス
      t.string  :index,    comment: "comment!"   # コメント
    end
  end
end

# カラム名の変更
rename_column :テーブル名, :変更前のカラム名, :変更後のカラム名
```

#### 基本的なカラムの追加、削除、変更

- http://qiita.com/Kaki_Shoichi/items/077d0a282255cd92cff3
- https://qiita.com/zaru/items/cde2c46b6126867a1a64

```
# カラムの削除（外部制約も外す）
$ bundle exec rails g migration Removeカラム名Fromテーブル名 カラム名:references

# 外部キーのカラム追加 参考：[外部キー周りの注意](http://b.pyar.bz/blog/2014/10/22/foreigner/)
$ bundle exec rails g migration Addカラム名RefToテーブル名 user:references（外部キーの追加：_idは記載しない）  
$ bundle exec rails g migration AddUserRefToTweets user:references

$ bundle exec rake db:migrate
```

#### Railsでカラムのデータ型を変更する場合の手順  

https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&sqi=2&ved=0CDcQFjAE&url=http%3A%2F%2Fblog.jnito.com%2Fentry%2F20120514%2F1336951768&ei=6YK-VIDQKYPDmwXivoGoCg&usg=AFQjCNG3Xr6JaoHp-pOZmurl52AT8nv8Zw&sig2=eH76S7nwMYjykmYn-DmeJA&bvm=bv.83829542,d.dGY&cad=rja  
　  
　  
- - - 
　  
　  
## ■ controller

rails generateコマンドは、  

- 単数系か複数系かは用途に合わせて
- キャメルケースでもスネークケースでもどちらでも良い

```
$ bundle exec rails g controller my_book --no-helper --no-assets
$ bundle exec rails g controller MyBook --no-helper --no-assets
```

### 生成しない設定（helper、stylesheets、javascripts、test）

/config/application.rb

```ruby
module Xxx
  class Application < Rails::Application
    config.generators do |g|
      g.helper false
      g.stylesheets false
      g.javascripts false
    end
    # Don't generate system test files.
    config.generators.system_tests = nil
  end
end
```
