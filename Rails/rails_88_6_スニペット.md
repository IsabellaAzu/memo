
# スニペット
　  
　  
　  
## リンク
　  
```erb
ｐａｔｈ
<%= link_to “文字”, "https://" %>
<%= link_to “文字”, root_path %>
class名
<%= link_to "TOP", root_path, class: "xxx" %>
アンカー、ターゲット
<%= link_to "TOP", user_path(@user, anchor: "anc"), "class"=>"m_", target: "_blank" %>
パラメータ、アンカー
<%= link_to "TOP", users_path(user_category_id: user_category.id, anchor: "anc") %>

削除
<%= link_to "削除", member_path(params[:id]), method: :delete %>
ブロックタグ
<%= link_to users_path do %>
  <i class="m_">リンク</i>
<% end %>
```
　  
　  
## 日付

### 時刻や日付を扱うメソッドの基本情報まとめ【Ruby】【Rails】

https://fuchiaz.com/ruby-rails-time-date/

### 表記

```ruby
02/04(月)
Time.now.strftime("%m/%d(#{%w(日 月 火 水 木 金 土)[Time.now.wday]})")
2016年10月06日 15:37:49
Time.now.strftime("%Y年%m月%d日 %H:%M:%S")
16-10-06
Time.now.strftime("%y-%m-%d")
04:18 PM
Time.now.strftime("%I:%M %p")
```

### 曜日

```erb
【controller】
@day_names = ["日", "月", "火", "水", "木", "金", "土"]
【view】
<% day_name = @day_names[user.created_at.strftime('%w').to_i] %>
<% user.created_at.strftime('%Y/%m/%d('+ day_name +') %H:%M') %>
=> 2019/02/04(月) 13:52
```
　  
　  
## form　Rails5以降向け

ｆｏｒｍ_ｆｏｒ、form_tagは廃止予定

```erb
format
<%= form_with(model: 〇〇, scope: 〇〇, url: 〇〇遷移先, local: true, format: 〇〇, class: "〇〇" ・・・) %>
<% end %>
省略可
<%= form_with(model: post, local: true) do |form| %>
<% end %>
```

属性説明一覧 [https://techracho.bpsinc.jp/hachi8833/2017_05_01/39502](https://techracho.bpsinc.jp/hachi8833/2017_05_01/39502)

|          |      |
| -------- | ---- |
| :url     | フォームの送信先URLを指定します。<br>渡せる値は、url_forやlink_toで渡せる値と似ています。たとえば、名前付きルートを直接渡すこともできますし、:urlなしで:scopeを渡すと、現在のURLにフォームを送信することもできます。  |
| :method  | フォーム送信時のHTTPメソッド（verb）を指定します。<br>通常は:getや:postを指定します。<br>:patch、:put、:deleteを指定すると、隠しinput名の後ろに_methodが追加され、POST verb上でこれらのHTTP verbをシミュレートします。  |
| :format  | フォーム送信先であるルーティングのフォーマットを指定します。<br>:jsonなど通常と異なるリソースタイプを送信するのに便利です。<br>:urlがオプションに渡されている場合、このオプションはスキップされます。 |
| :scope   | inputフィールド名のプレフィックスにスコープを追加します。これにより、送信されたパラメータをコントローラでグループ化できます。 |
| :model   | :urlや:scopeの自動推測に使うモデルオブジェクトを指定し、inputフィールドにモデルの値を表示します。<br>たとえば、title属性の値が"Ahoy!"ならtitleの入力フィールドの値に"Ahoy"と表示されます。<br>モデルが新しいレコードの場合は作成用フォームが生成され、モデルが既存のレコードの場合は更新用フォームが生成されます。<br>デフォルトの動作を上書きするには、:scopeか:urlを渡します（params[:post]をparams[:article]に変更するなど）。 |
| :local   | local: trueを指定するとフォームのリモート + unobtrusive XHR送信が無効になります（デフォルトのフォームではリモート + unobtrusive XHRが有効になります）。 |
| :builder | フォームのビルドに使うオブジェクトをオーバーライドします。 |
| :id      | HTMLのid属性を指定します（オプション）。 |
| :class   | HTMLのclass属性を指定します（オプション）。 |
| :data    | HTMLのdata属性を指定します（オプション）。 |
| :html    | 上以外のHTML属性を使う場合に指定します（オプション）。 |
| :skip_enforcing_utf8 | trueを指定すると、送信時にutf8という隠しフィールドがスキップされます（デフォルトの送信ではutf8フィールドが出力されてエンコードがUTF-8になります）。 |
| :authenticity_token  | フォームで使う認証トークンを指定します。<br>カスタムの認証トークンを指定して上書きすることも、falseを渡して認証トークンのフィールドをスキップすることもできます。<br>有効なフィールドのみに制限されている支払用ゲートウェイへのような外部リソースにフォームを送信する場合に便利です。<br>config.action_view.embed_authenticity_token_in_remote_forms = falseを指定すると、埋め込み認証トークンがリモートフォームで省略されることがあります。この指定はフォームでフラグメントキャッシュを使う場合に便利です（リモートフォームがmetaタグから認証トークンを取得するようになるので、JavaScriptがオフになっているブラウザをサポートする場合を除けば認証トークンをフォームに埋め込む必要がなくなります）。 |

https://www.pikawaka.com/rails/form_with  

```erb
<%= form_with url: posts_path do |f| %>
  <%= f.text_field :カラム名 %>

  <%= f.label :name, "名前", {class: 'class_name'} %>
  <%= f.text_field :name %>

  labelブロック
  <%= f.label :display, {class: "p_toggle_checkbox_box"} do %>
    <%= f.check_box :display, :checked => item_display_checkbox %>
  <% end %>

  radio
  <%= f.radio_button :カラム名, 実際にテーブルに登録する値, {:checked => true} %>
  <%= f.label :カラム名, 選択肢に表示する文字, class: "job_type_label" %>

<% end %>
```
　  
　  
## rails g migrate

### カラム追加

```
$ rails g migration AddColumnToUsers_xxx カラム名:string
```

作成されたmigrationファイルにお好みのオプション追加

```ruby
class AddColumnToUsersXXX < ActiveRecord::Migration[5.2]
  def change
    add_column :users_ｘｘｘes, :xxx, :string, default: nil, null: true, :after => :email
  end
end
```

## 三項演算子

```
<% 変数名 ||= 条件 ? "none" : "" %>
```
　  
　  
## debug

```
オブジェクト.inspect
```
　  
　  
## 環境

```ruby
if Rails.env == 'development'
  puts 'devです'
end
```
　  
　  
## どれを使う

### count, length, size
https://www.lanches.co.jp/blog/3199  
sizeを使おう！  

|        | キャッシュ | 内容 |
| ------ | -------- | ---- |
| count  | 使わない  | SQLのCOUNTを使ってカウント |
| length | あれば使う | SQLの実行結果の行数をカウントします |
| size   | あれば使う | SQLのCOUNTを使ってカウントします |

### form_with, form_for, form_tag

|           | 内容            |
| --------- | --------------- |
| form_with | rails5から推奨   |
| form_for  | rails5から非推奨 |
| form_tag  | rails5から非推奨 |


## データの絞り込み

### inner join
https://qiita.com/akishin/items/dd23f9782349f67949b1

```
Select xxxes.yyy_id,xxxes.zzz_id, zzzs.label,zzz_categories.label  
from xxxes 
inner join zzzs on zzzs.id = xxxes.zzz_id 
inner join zzz_categories on zzz_categories.id = zzzs.zzz_category_id 
where zzz_categories.id = 1;
```

### uniq, distinct

|           | 内容                |                     |
| --------- | ------------------ | ------------------- |
| .distinct | sql query method   | Rails5以降で正式メソッド |
| .uniq     | array method       | Rails5以降で非推奨    |
　  
　  
## error回避

### A server is already running. Check プロジェクト名/tmp/pids/server.pid.

```
$ lsof -wni tcp:3000
$ kill -9 PID番号
```
　  
　  
## error処理

### Railsのジェネレータで不要なerror用divを作らせない
```ruby
# config/application.rb
config.action_view.field_error_proc = Proc.new do |html_tag, instance| 
  html_tag
end
```

### 入力内容の正規表現チェック

- http://qiita.com/akatsuki174/items/81549c3d2d824b986cc8  
- http://www.megasoft.co.jp/mifes/seiki/meta.html#replace  
- https://gist.github.com/nashirox/38323d5b51063ede1d41  
- http://qiita.com/shizuma/items/4279104026964f1efca6  
- http://qiita.com/kenju/items/d281049303f7d1d97998  
　  
#### サンプル

```
# 空白文字([\t\r\n\f])と全角スペース
/^[\s　]+$/ =~ str
# 入力無し
/\A\z/ =~ str1
# 半角の大文字小文字の英数字
/^[a-zA-Z0-9]+$/ =~ str
```
　  
　  
## flashメッセージ

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
　  
　  
## ループが今何回目か（句読点出力用の変数など）

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

### Model情報の取得
```ruby
# Modelのカラム名一覧を取得
  <%= debug(モデル名.column_names) %>
# Modelのカラムの型を取得する
  <%= debug(モデル名.columns_hash['カラム名'].type) %>
```
　  
　  
## hash内のvalueの最大値のhashを返す
```ruby
<% h = {a: 29, b: 23, c: 39, d: 3, e: 39} %>
<%= debug(h.max_by {|_, v| v }) %># => :c 39
<%= debug(h.max_by(&:last)[1]) %># => 39
```
　  
　  
## Formに入力した値を維持したままリロードする方法

- http://qiita.com/seiya1121/items/cf6b44fae757f6300ada
　  
　  
## パラメータ周り

### get形式のクエリの渡し方

```ruby
# view
  <%= link_to '追加', xxx_path(xxx.id,:xxx_type => 'add') %>
# controller
  @xxx_type = params[:xxx_type]
```


## 複数レコードの編集update

### ルーティングの設定config/routes.rb

```ruby
resources :items do
  collection do
    get :sort
    put :update_multiple
  end
end
```

### コントローラーの設定

```
class ItemsController < ApplicationController
  def sort
    @items = Item.all
  end

  def update_multiple
    # 更新するアイテムを検索し、それぞれのパラメータで更新する
    params[:items].each do |id, item_params|
      item = Item.find(id)
      item.update(item_params.permit(:name, :description, :price))
    end
    redirect_to items_path, notice: "Items updated successfully"
  end
end
```

### ビューの設定

```
<%= form_with url: update_multiple_items_path, method: :put, local: true do %>
  <% @items.each do |item| %>
      <%= item.id %>
      <%= hidden_field_tag "items[#{item.id}][id]", item.id %>
      <%= text_field_tag "items[#{item.id}][name]", item.name %>
      <%= text_field_tag "items[#{item.id}][description]", item.description %>
      <%= text_field_tag "items[#{item.id}][price]", item.price %>
  <% end %>
  <div>
    <%= submit_tag "Update Items" %>
  </div>
<% end %>
```




