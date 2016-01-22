
# rails新しい場所に乗せ換える

　  
　  
## index
> ・<a href="#anc_1">プロジェクト作成から初期起動まで</a>  
 ・<a href="#anc_2">aaaa</a>  

　  
　  
<a id="anc_1"></a>
### プロジェクト作成から初期起動まで
```
$ rails new プロジェクト名 -d mysql # MySQLで（SQLightなら-dのオプション無しで）
$ mysql.server start # gemファイル内でmysql2のバージョン指定をしないとﾀﾞﾒかも
（/Gemfile：gem 'mysql2'　→　gem 'mysql2', '~> 0.3.20'）
（$ bundle update）
$ cd プロジェクト名
$ rails s # rails serverの省略形
$ rails s -p 8888 #localhost:8888のポート番号で起動
$ rake db:create
```

　  
　  
<a id="anc_2"></a>
### 2. aaa
```erb
aaa
```


