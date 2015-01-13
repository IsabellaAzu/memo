
## MySQLの使い方

（超絶編集中）






```
# ログイン
$ mysql -u root
```

- - -

> 参考  
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

2015年に起こりうる問題  
>  
うるう秒バグ(2015,GIGAZINE)  
http://gigazine.net/news/20150108-leap-time-internet/  
うるう秒バグ対策：2012-07-01 MySQLなどのCPU使用率が高騰  
http://wevew.net/dev/2012/07/2012-07-01-mysqldjavacpu.html
Jenkinsなどの対応
http://spring-mt.tumblr.com/post/26316963476  
```  
* サーバを再起動する  
* date `date +'%m%d%H%M%C%y.%S'` # 日付を再設定する  
```  

関連情報  
>  
MariaDBの場合  
http://qiita.com/kozmats/items/ac32f1ac1d676a09e3b2  
ER図作成　Workbench  
http://dev.mysql.com/downloads/workbench/  
GUIで閲覧、編集：Sequel Pro  
http://www.sequelpro.com  


