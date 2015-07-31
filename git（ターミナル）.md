
## ターミナルでgitを使う方法
> 参考  
http://sourceforge.jp/magazine/09/03/16/0831212/3  


### 初期設定

##### コミットするユーザーの設定
```
$ git config --global user.name "指定したい名前"
$ git config --global user.email "指定したいメールアドレス"
```

##### フォルダ毎の設定：コミットしたいフォルダで  
```
$ git init
$ git config user.name "指定したい名前"
$ git config user.email "指定したいメールアドレス"
```

##### リモートリポジトリの指定（どこにコミットするか）
```
$ git remote add origin https://github.com/username/repositori.git
```

- - -

### 基本的な作業

##### git clone ☆
```
$ git clone https://github.com/username/repositori.git
```

##### git status
```
$ git status
$ git status -s
$ git status -b
```
-sオプション：説明文を表示しない  
-bオプション：説明文は表示しないけど、ブランチ名は表示する  


##### 編集したファイルをコミットリストに追加
```
$ git add . # 全部
$ git add ファイル名 # 指定ファイル
$ git reset HEAD ファイル名 # 指定ファイルのaddを取り消し
$ git status # コミットしたいファイルが追加されてるか確認
```


##### コミット
```
$ git commit -m "コミットコメント"
```


##### リモートリポジトリにプッシュ
```
$ git push -u origin master
```
※「 -u origin master」はリポジトリにファイルが無い場合の最初のpush  
　  
- - -

## あるある

### git pushがrejectされたときの対応方法

![](http://i.gyazo.com/e7576c2403a18becb2665ecb6bca21c8.png)

> 参考：上記の画像の様なerrorメッセージが出たら差分があるので下記をcheck！  
https://www.softel.co.jp/blogs/tech/archives/3569  

### ignore指定前にコミットしてしまった場合 
> 参考  
http://www.omakase.org/misc/gitignore.html

### rebase
> 参考  
http://liginc.co.jp/web/tool/79390  

### git clone エラー（https:の設定になっているのを下記に変更）
```
[remote "origin"]
	url = https://github.com/ユーザ名/リポジトリ名
	　↓
	url = git@github.com:ユーザ名/リポジトリ名
```
> 参考
http://qiita.com/HirofumiYashima/items/49f7aa6899a322dd26b4

### 他にも
> 参考　
http://keisuke69.hatenablog.jp/entry/2013/12/16/130110  




