
# Rubyのgemを探そう
https://rubygems.org/  
　  

- - -
## Ransack(検索)、kaminari(ページング)
### 環境
'ruby' '2.2.1p85'  
'rails', '4.2.1'  
'ransack', '1.7.0'  
'kaminari', '0.16.3'  

### スニペット
```
# コントローラ
    @q        = モデル名.ransack(params[:q])
    results = @q.result(distinct: true)
    @result_length = @q.result.length

# view

```



- - -
## ooo

### 環境
'ruby' '2.2.1p85'  
'rails', '4.2.1'  
'ooo', '0.16.3'

### スニペット
```
# コントローラ

# view
```


- - -
## ooo

### 環境
'ruby' '2.2.1p85'  
'rails', '4.2.1'  
'ooo', '0.16.3'

### スニペット
```
# コントローラ

# view
```


- - -
## Rubyスニペット
```
#インストール可能なバージョン一覧
$ rbenv install -l

# インストール
$ rbenv install バージョン名

#インストール済の一覧
$ rbenv versions

#切り替え
$ rbenv global バージョン名
$ rbenv local バージョン名

#確認
$ ruby --version

# うまくいかない場合
$ rbenv rehash
```

