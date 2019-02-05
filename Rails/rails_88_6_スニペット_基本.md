
　  
　  
# スニペット_基本
　  
## link_to
　  
```
ｐａｔｈ
<%= link_to “文字”, "https://" %>
<%= link_to “文字”, root_path %>
attributes
<%= link_to "TOP", root_path, class: "xxx" %>
<%= link_to "TOP", users_path(@user, anchor: "anc"), "class"=>"m_", target: "_blank" %>
削除
<%= link_to "削除", member_path(params[:id]), method: :delete %>
タグ
<%= link_to users_path do %>
  <i class="m_">リンク</i>
<% end %>
```

## 日付

```
02/04(月)
Time.now.strftime("%m/%d(#{%w(日 月 火 水 木 金 土)[Time.now.wday]})")
2016年10月06日 15:37:49
Time.now.strftime("%Y年%m月%d日 %H:%M:%S")
16-10-06
Time.now.strftime("%y-%m-%d")
04:18 PM
Time.now.strftime("%I:%M %p")
```

```
【controller】
@day_names = ["日", "月", "火", "水", "木", "金", "土"]
【view】
<% day_name = @day_names[user.created_at.strftime('%w').to_i] %>
<% user.created_at.strftime('%Y/%m/%d('+ day_name +') %H:%M') %>
=> 2019/02/04(月) 13:52
```

## form

Rails5系向け

```
format
<%= form_with(model: 〇〇, scope: 〇〇, url: 〇〇遷移先, local: true, format: 〇〇, class: "〇〇" ・・・) %>
<% end %>
省略可
<%= form_with(model: post, local: true) do |form| %>
<% end %>
```

属性説明一覧 [https://techracho.bpsinc.jp/hachi8833/2017_05_01/39502](https://techracho.bpsinc.jp/hachi8833/2017_05_01/39502)


|       ||   |
|-------||----|
|:url   ||フォームの送信先URLを指定します。<br>渡せる値は、url_forやlink_toで渡せる値と似ています。たとえば、名前付きルートを直接渡すこともできますし、:urlなしで:scopeを渡すと、現在のURLにフォームを送信することもできます。|
|:method||フォーム送信時のHTTPメソッド（verb）を指定します。<br>通常は:getや:postを指定します。<br>:patch、:put、:deleteを指定すると、隠しinput名の後ろに_methodが追加され、POST verb上でこれらのHTTP verbをシミュレートします。|


##### :format
フォーム送信先であるルーティングのフォーマットを指定します。
:jsonなど通常と異なるリソースタイプを送信するのに便利です。
:urlがオプションに渡されている場合、このオプションはスキップされます。

##### :scope
inputフィールド名のプレフィックスにスコープを追加します。これにより、送信されたパラメータをコントローラでグループ化できます。
|   ||   |
|:-:||:-:|
|   ||   |

##### :model
:urlや:scopeの自動推測に使うモデルオブジェクトを指定し、inputフィールドにモデルの値を表示します。
たとえば、title属性の値が"Ahoy!"ならtitleの入力フィールドの値に"Ahoy"と表示されます。
モデルが新しいレコードの場合は作成用フォームが生成され、モデルが既存のレコードの場合は更新用フォームが生成されます。
デフォルトの動作を上書きするには、:scopeか:urlを渡します（params[:post]をparams[:article]に変更するなど）。

##### :authenticity_token
フォームで使う認証トークンを指定します。
カスタムの認証トークンを指定して上書きすることも、falseを渡して認証トークンのフィールドをスキップすることもできます。
有効なフィールドのみに制限されている支払用ゲートウェイへのような外部リソースにフォームを送信する場合に便利です。

config.action_view.embed_authenticity_token_in_remote_forms = falseを指定すると、埋め込み認証トークンがリモートフォームで省略されることがあります。この指定はフォームでフラグメントキャッシュを使う場合に便利です（リモートフォームがmetaタグから認証トークンを取得するようになるので、JavaScriptがオフになっているブラウザをサポートする場合を除けば認証トークンをフォームに埋め込む必要がなくなります）。

##### :local
local: trueを指定するとフォームのリモート + unobtrusive XHR送信が無効になります（デフォルトのフォームではリモート + unobtrusive XHRが有効になります）。

##### :skip_enforcing_utf8
trueを指定すると、送信時にutf8という隠しフィールドがスキップされます（デフォルトの送信ではutf8フィールドが出力されてエンコードがUTF-8になります）。

##### :builder
フォームのビルドに使うオブジェクトをオーバーライドします。

##### :id
HTMLのid属性を指定します（オプション）。

##### :class
HTMLのclass属性を指定します（オプション）。

##### :data
HTMLのdata属性を指定します（オプション）。

##### :html
上以外のHTML属性を使う場合に指定します（オプション）。



### text

```
<%= f.text_field :カラム名 %>
```

### radio

```
<%= form_with  |f| %>
  <%= f.radio_button :カラム名, 実際にテーブルに登録する値, {:checked => true} %>選択肢に表示する文字
<% end %>
```

### textarea

```
```

### select,option

```
```

### submit

```
```


