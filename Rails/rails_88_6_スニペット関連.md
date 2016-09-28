

# スニペット
　  
## error処理
　  
### Railsのジェネレータで不要なerror用divを作らせない
```ruby
# config/application.rb
config.action_view.field_error_proc = Proc.new do |html_tag, instance| 
  html_tag
end
```


　  
- - - 
### 入力内容の正規表現チェック
http://qiita.com/akatsuki174/items/81549c3d2d824b986cc8  
http://www.megasoft.co.jp/mifes/seiki/meta.html#replace  
https://gist.github.com/nashirox/38323d5b51063ede1d41  
http://qiita.com/shizuma/items/4279104026964f1efca6  
http://qiita.com/kenju/items/d281049303f7d1d97998  
　  
　  
- - - 
### flashメッセージ
```ruby
# controller
redirect_to action:'index', notice: 'ログイン成功!!'
redirect_to action:'index', alert:  'ログインできません...'
redirect_to action:'index', flash: {xxx: 'ログインに成功しました!!'}
# view
<% if flash[:notice] %>
  <%= flash[:notice] %>
<% end %>
<% if flash[:alert] %>
  <%= flash[:alert] %>
<% end %>
<% if flash[:xxx] %>
  <%= flash[:xxx] %>
<% end %>
```
　  
　  
- - - 
### ■ループが今何回目か（句読点出力用の変数など）
条件を満たしている場合だけ出力する場合でも|xxx|のindex番号はカウントアップされてしまう。
条件敷<% if true %>の時のループが今何回目か知るには、
```ruby
<% target_loop_num = 1 %>
<% @xxx.each do |xxx| %>
  <% if true %>
    <% if target_loop_num < aaa_num %>、<% end %>
    <% target_loop_num += 1 %>
  <% end %>
<% end %>
```
　  
　  
- - - 
### ■Model情報の取得
```ruby
# Modelのカラム名一覧を取得
  <%= debug(モデル名.column_names) %>
# Modelのカラムの型を取得する
  <%= debug(モデル名.columns_hash['カラム名'].type) %>
```
　  
　  
- - - 
### ■hash内のvalueの最大値のhashを返す
```ruby
<% h = {a: 29, b: 23, c: 39, d: 3, e: 39} %>
<%= debug(h.max_by {|_, v| v }) %># => :c 39
<%= debug(h.max_by(&:last)[1]) %># => 39
```

　  
### ■Formに入力した値を維持したままリロードする方法
http://qiita.com/seiya1121/items/cf6b44fae757f6300ada
　  
　  
- - - 
## パラメータ周り
### ■get形式のクエリの渡し方
```ruby
# view
  <%= link_to '追加', xxx_path(xxx.id,:xxx_type => 'add') %>
# controller
  @xxx_type = params[:xxx_type]
```


