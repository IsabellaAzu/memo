
# view関連

　  
　  
- - - 
## ■form関連
[基本：【Rails】formヘルパーを徹底的に理解する](http://qiita.com/shunsuke227ono/items/7accec12eef6d89b0aa9)

### form_for、form_tag基本

#### form_for：モデルに基づいたフォームを作成
```
<% form_for(@article) do |f| %>
  <div><%= f.text_field :title, class: "hogehoge" %></div>
  <%= f.submit %>
<% end %>
```
⇒ params[:article][:title]


#### form_tag：モデルに基づかないフォームを作成
```ruby
<% form_tag(:controller => article, :action => create) %>
  <div><%= text_field :title, class: "hogehoge" %></div>
  <%= submit_tag "作成" %>
<% end %>
```
⇒ params[:article]


### パーツ基本

#### input
```
<%= f.text_field :title, class: 'hoge' %>
```
#### hidden
```
<%= f.hidden_field :title, class: 'hoge', value: => 'hoge' %>
```
#### textarea
```
<%= f.text_area :content, class: 'hoge', size: '100x50' %>
```
#### select
```
<%= f.collection_select :category, Category.all, :id, :category_name, include_blank: true %>
```
#### checkbox 
```
<%= f.collection_check_boxes(:article, :tag_ids, Tag.all, :id, :tag_name) do |b| %> 
  <%= b.label {b.check_box + b.text} %>
<% end %>
# StrongParameters
params.require(:article).permit({:tag_ids=>[]}
```
#### radio 
```
<%= f.collection_radio_buttons(:article, :type_ids, Type.all, :id, :type_name) do |b| %>
  <%= b.label {b.radio_button + b.text} %>
<% end %>
```
#### 新規作成formの作り方~newとbuildの違い~
http://qiita.com/shizuma/items/5cef6768c5a5d899e54d  
親の中で子を新規作成など  
```

```
　  
- - - 
　  
## 日付のフォーマット
http://ruby-rails.hatenadiary.com/entry/20141226/1419600679
　  
　  
- - - 
## ■Model情報の取得
```ruby
# Modelのカラム名一覧を取得
  <%= debug(モデル名.column_names) %>
# Modelのカラムの型を取得する
  <%= debug(モデル名.columns_hash['カラム名'].type) %>
```
　  
　  
- - - 
## ■hash内のvalueの最大値のhashを返す
```ruby
<% h = {a: 29, b: 23, c: 39, d: 3, e: 39} %>
<%= debug(h.max_by {|_, v| v }) %># => :c 39
<%= debug(h.max_by(&:last)[1]) %># => 39
```

　  
　  
- - - 
## ■xxx関連
