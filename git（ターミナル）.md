
## ターミナルでgitを使う方法
> 参考  
http://massiro.hateblo.jp/entry/2014/04/24/190637  


### 1. 初期化
コミットしたいフォルダにcdで移動して、  
```
$ git init
```


### 2. リモートリポジトリの指定
```
$ git remote add origin https://github.com/username/repositori.git
```


### 3. ファイルをコミットするリストに追加
```
$ git add .
$ git status # コミットしたいファイルが追加されてるか確認
```


### 4. コミット
```
$ git commit -m "コミットコメント"
```


### 5. リモートリポジトリにプッシュ
```
$ git push -u origin master
```

- - -

## あるある

### 1. git pushがrejectされたときの対応方法

![](http://i.gyazo.com/e7576c2403a18becb2665ecb6bca21c8.png)

> 参考  
https://www.softel.co.jp/blogs/tech/archives/3569
上記の画像の様なerrorメッセージが出たら差分がありますね



