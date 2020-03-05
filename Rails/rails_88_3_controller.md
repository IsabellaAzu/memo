
# controller関連

controllerはRailsアプリ自体の成長に伴って一番汚れやすい部分で、  
定期的にリファクタリングしていくようにしないとすぐ可読性が落ちてしまう傾向にある  
　  
　  
- - - 
　  
　  
## ■debug関連

### controllerに記載してxxxの値を、logで確認できる
```ruby
logger.debug(decide_user_params["xxx"])
```
　  
　  
- - - 
　  
　  
## ■newとbuildのちがい

buildを使うと親モデルに対する外部参照キーを自動でセットできる
　  
　  
- - - 
　  
　  
## ■ｇｅｎｅｒａｔｅ

rails generateコマンドには、キャメルケースでもスネークケースでもどちらでも良い

```
rails g controller my_book
rails g controller MyBook
```
　  
　  
- - - 
　  
　  
## ■xxx関連

### includeとjoinのちがい

http://qiita.com/south37/items/b2c81932756d2cd84d7d  
　  
### 関連テーブルの情報をまとめて読み込む:includeオプションのまとめ

https://www.gesource.jp/weblog/?p=477  

#### 1つの関連先テーブルを読み込む

```
:include => :foo
```

#### 複数の関連先テーブルを読み込む

```
:include => [:foo, :bar]
```
#### 多段の関連を一度に読み込む

```
:include => {:foo => :bar}
```

#### さらに多段の関連を一度に読み込む

```
:include => {:foo => {:bar => :baz}}
```

#### 関連先テーブルから複数の関連テーブルを読み込む

```
:include => {:foo => [:bar, :baz]}
```

#### 以上を組み合わせて読み込む

```
:include => [{:foo => {:bar => :baz}}, :hoge]
```
　  
　  
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
　  
　  
- - - 
　  
　  
## ■update時にparamsの内容を書き換えて更新する

http://stackoverflow.com/questions/18640557/update-params-in-ruby-on-rails-controller  

```ruby
def update
  checked_params = xxx_params.clone
  if true
    checked_params[:yyy] = '上書きしたいもの'
  end
  @xxx.update_attributes(checked_params)
end
```

