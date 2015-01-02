
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



