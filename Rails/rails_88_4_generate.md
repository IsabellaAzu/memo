
# rails generate関連

参考：[railsコマンド](http://railsdoc.com/rails)
　  
- - - 
### テーブル作成時
```

```

### カラム追加
bundle exec rails g migration Addカラム名RefToテーブル名 user:references（外部キーの追加：_idは記載しない）  
参考：[外部キー周りの注意](http://b.pyar.bz/blog/2014/10/22/foreigner/)
```
bundle exec rails g migration AddUserRefToTweets user:references
```





### マイグレーション実行
```
bundle exec rake db:migrate
```
