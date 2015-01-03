
## ターミナルでgitを使う方法
> 参考  
http://massiro.hateblo.jp/entry/2014/04/24/190637  


### 初期設定

##### 1. 初期化
```
# git共通設定
$ git config --global user.name "指定したい名前"
$ git config --global user.email "指定したいメールアドレス"

# フォルダ毎の設定：コミットしたいフォルダで  
$ git init
$ git config user.name "指定したい名前"
$ git config user.email "指定したいメールアドレス"

# リモートリポジトリの指定
$ git remote add origin https://github.com/username/repositori.git
```

- - -

### 基本的な流れ

##### 1. ファイルをコミットするリストに追加
```
$ git add .
$ git status # コミットしたいファイルが追加されてるか確認
```


### 2. コミット
```
$ git commit -m "コミットコメント"
```


### 3. リモートリポジトリにプッシュ
```
$ git push -u origin master
```

- - -

## あるある

### 1. git pushがrejectされたときの対応方法

![](http://i.gyazo.com/e7576c2403a18becb2665ecb6bca21c8.png)

> 参考：上記の画像の様なerrorメッセージが出たら差分があるので下記をcheck！  
https://www.softel.co.jp/blogs/tech/archives/3569  

### 2. 
> 参考：.gitigone指定、指定前にコミットしてしまった場合  
http://www.omakase.org/misc/gitignore.html

