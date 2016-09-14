
# 要注意


### モデルの初期化処理を書きたい場合の注意
http://o.inchiki.jp/obbr/127  
・after_initialize、after_find  
・findメソッドはRails4からは廃止　→　whereメソッドに切り替え  
　  
### よくある頭を悩ます３つの問題
http://qiita.com/haruharuharuby/items/fbca14582a22f413f1b9
- １つのモデルで複数のモデルを操作してしまう  
- 冗長なコードが複数のモデルまたはコントローラに出てくる  
- 表示のためだけに、モデルにメソッドを追加する  
　  

- - - 
## セキュリティ関連
パスワードはDBでハッシュ化していても簡単に見えてしまう
### http://qiita.com/kakkunpakkun/items/622a10c825f5fec77ad5
　  
　  
- - - 
## パフォーマンス関連
### ActiveRecordでPolymorphicにPreloadする
http://qiita.com/r7kamura/items/7a31b79f855d7af581ec  
　  
### rakendb:migrateする時、テーブル名、ポリモーフィックなどが長いとerrorになる  （最大62文字まで）
テーブル名、カラム名は短く設計しましょう！  
```
# errorログ
Index name 'index_テーブル名_on_ポリモーフィック_id_and_ポリモーフィック_type' on table 'テーブル名' is too long; the limit is 62 characters
```

### 高速化
http://blog.degita.net/entry/2013/02/20/42  
　  
　  
### AUTOCOMMITしたデータはしっかり削除するように
http://qiita.com/haracane/items/44b913c300e6c2c943bb
　  
　  
### インデックス
http://qiita.com/kkyouhei/items/e3502ef632c48d94541d
　  
　  
### Railsのキャッシュ
http://postd.cc/the-complete-guide-to-rails-caching/
