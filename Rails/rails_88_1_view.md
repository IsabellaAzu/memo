
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
```ruby
<%= f.text_field :title, class: 'hoge' %>
```

#### hidden
```ruby
<%= f.hidden_field :title, class: 'hoge', value: => 'hoge' %>
```

#### textarea
```ruby
<%= f.text_area :content, class: 'hoge', size: '100x50' %>
```

#### select
option内をCategoryモデルから取得する場合  
```ruby
# view
<%= f.collection_select :category, Category.all, :id, :category_name, include_blank: true %>
```
option内をcontrollerに定義する場合  
```ruby
# (1)
# controller
@aaa = [1,2,3]
# view
<%= f.select(:xxx, options_for_select(@aaa) %>
```
```ruby
# (2)
# controller
@aaa = [["○",1],["×",2],["△",3]]
# view
<%= f.select(:label, @aaa,selected: f.object.label) %>
```

##### Railsでoptgroup付きプルダウンメニューを配列・ハッシュから作成
http://easyramble.com/rails_grouped_options_for_select.html  
##### Ajaxで絞り込んだり
http://blog.scimpr.com/2016/01/04/rails4-2%E3%81%A7select%E3%82%92%E7%B5%9E%E8%BE%BC%E3%81%A7%E3%81%8D%E3%82%8Bselect2%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%E3%80%9Cselect2/  

#### checkbox 
```ruby
# 単数1
<%= check_box_tag :sample %>
<%= label_tag :sample, 'チェックボックス' %>

# 複数1
<%= f.collection_check_boxes(:article, :tag_ids, Tag.all, :id, :tag_name) do |b| %> 
  <%= b.label {b.check_box + b.text} %>
<% end %>
# StrongParameters
params.require(:article).permit({:tag_ids=>[]})

# 複数2 Categoryモデルから
<% Category.all.each do |category| %>
  <%= check_box_tag "product[category_ids][]", category.id, @product.categories.include?(category), id: "product_category_ids_#{category.id}" %>
  <%= label_tag "product[category_ids][#{category.id}]", category.name %>
<% end %>
```
Modelのvalidatesと連携
http://kiyotakakubo.hatenablog.com/entry/20090109/1231517603

#### radio 
```ruby
<%= f.collection_radio_buttons(:article, :type_ids, Type.all, :id, :type_name) do |b| %>
  <%= b.label {b.radio_button + b.text} %>
<% end %>
```

#### submit
特に違うコントローラや違うアクション内からsubmitボタンで削除したい場合  
```ruby
<%= form_for @user,:url => {:controller => :xxxs, :action => :destroy}, method: :delete do |f| %>
 <%= f.submit '削除する' %>
<% end %>
# StrongParameters
params.require(:xxx).permit(:_destroy)
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
