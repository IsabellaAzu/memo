
# controller関連

　  
　  
- - - 
## ■debug関連
### controllerに記載してxxxの値を、logで確認できる
```ruby
  logger.debug(decide_user_params["xxx"])
```
　  
- - - 
## ■xxx関連

### newとbuildのちがい
buildを使うと親モデルに対する外部参照キーを自動でセットできる
　  
　  
- - - 
## ■xxx関連
### includeとjoinのちがい
http://qiita.com/south37/items/b2c81932756d2cd84d7d  
　  
　  
- - - 
## ■繰り返し処理関連
### 【Ruby】繰り返し処理について（for, while, until, each, time, loop）
http://www.task-notes.com/entry/20141117/1416153598  
　  
　  
- - - 
## ■変数を動的に変える
evalは文字列をRubyのコードとして解釈してくれる素敵なメソッド  
```ruby
# サンプル
value1 = 1
value2 = 2
value3 = 3
value4 = 4
value5 = 5
```
```ruby
i = 1
5.times{
  eval("value#{i}") = i
  i += 1
}
```

## ■includeとjoinのちがい
http://qiita.com/south37/items/b2c81932756d2cd84d7d  
