
## MySQLの使い方

> MySQLのsnippet  
https://github.com/IsabellaAzu/snippet/tree/master/mysql

```
# 手動起動、停止
$ mysql.server start
$ mysql.server stop

# ログイン
$ mysql -u root
```

- - -

> 参考  

bundle install がこける
https://qiita.com/tktcorporation/items/0ef8c930fc18ce72c301
```
$ bundle config --local build.mysql2 "--with-cppflags=-I/usr/local/opt/openssl/include"
  or
$ bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl/lib"
  or
$ bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include"

$ bundle install --path vendor/bundle
```


ダウングレードしたい時  
http://sue445.hatenablog.com/entry/2013/02/25/163538  
Mac起動時にMySQLを起動、起動に失敗した時など  
http://qiita.com/maru_cc/items/2d8f558c83631354f54d  
schema_migrationsが壊れたら  
http://wayohoo.com/mysql/how-to-deal-with-when-schema_migrations-broke-of-rails.html  
MySQLの違うバージョンをインストール  
http://qiita.com/STAR_ZERO/items/a5dd537564244c21aa9e
SQLプログラミング作法
http://www.geocities.jp/mickindex/database/db_manner.html#LocalLink-capital
　  
　  
### MySQLの文字列型が大文字と小文字を区別してくれない  
文字列型のカラムにBINARY属性を指定する（Railsだと面倒？）  
http://d.hatena.ne.jp/spitfire_tree/20120627/1340789986  
> 
検索時にBINARY属性を指定だと、  
・インデックスの利用方法などが変化する  
・大体の場合においてパフォーマンスが低下する  
　  
　  
### データベースの正規化
http://www.oss-db.jp/measures/dojo_info_04.shtml  
　  

- - -
関連情報  
>  
MariaDBの場合  
http://qiita.com/kozmats/items/ac32f1ac1d676a09e3b2  
ER図作成　Workbench  
http://dev.mysql.com/downloads/workbench/  
GUIで閲覧、編集：Sequel Pro  
http://www.sequelpro.com  


