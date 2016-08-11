
# 要注意


### モデルの初期化処理を書きたい場合の注意
http://o.inchiki.jp/obbr/127  
・after_initialize、after_find  
・findメソッドはRails4からは廃止　→　whereメソッドに切り替え  

### パフォーマンス
http://qiita.com/r7kamura/items/7a31b79f855d7af581ec  

### rakendb:migrateする時、テーブル名、ポリモーフィックなどが長いとerrorに（最大62文字まで）
テーブル名、カラム名は短く設計しましょう！  
```
# errorログ
Index name 'index_テーブル名_on_ポリモーフィック_id_and_ポリモーフィック_type' on table 'テーブル名' is too long; the limit is 62 characters
```
