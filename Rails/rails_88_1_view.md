
# view関連
>index<br>
・<a href="#anc_01">form関連</a><br>
・<a href="#anc_02">日付関連</a><br>
・<a href="#anc_03"></a><br>

　  
　  
- - - 
<a id="anc_01"></a>
## ■form関連
[基本：【Rails】formヘルパーを徹底的に理解する](http://qiita.com/shunsuke227ono/items/7accec12eef6d89b0aa9)

### form_for、form_tag基本

#### form_for：モデルに基づいたフォームを作成
```ruby
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
```ruby

```
　  
- - - 
<a id="anc_02"></a>
## 日付関連
　  
### フォーマット
http://docs.ruby-lang.org/ja/2.0.0/class/Time.html#I_STRFTIME
```ruby
_now = Time.current 
@now = _now.strftime("%Y年%m月%d日 %H時%M分")
%A: 曜日の名称(Sunday, Monday ... )
%a: 曜日の省略名(Sun, Mon ... )
%B: 月の名称(January, February ... )
%b: 月の省略名(Jan, Feb ... )
%C: 世紀 (2009年であれば 20)
%c: 日付と時刻
%D: 日付 (%m/%d/%y)
%d: 日(01-31)
%e: 日。一桁の場合、半角空白で埋める ( 1..31)
%F: %Y-%m-%d と同等 (ISO 8601の日付フォーマット)
%H: 24時間制の時(00-23)
%h: %b と同等
%I: 12時間制の時(01-12)
%j: 年中の通算日(001-366)
%k: 24時間制の時。一桁の場合、半角空白で埋める ( 0..23)
%L: ミリ秒 (000.999)
%l: 12時間制の時。一桁の場合、半角空白で埋める ( 0..12)
%M: 分(00-59)
%m: 月を表す数字(01-12)
%n: 改行 (\n)
%N: 秒の小数点以下。桁の指定がない場合は9桁 (ナノ秒)、%6N: マイクロ秒 (6桁)、%3N: ミリ秒 (3桁)
%P: 午前または午後(am,pm)
%p: 午前または午後(AM,PM)
%R: 24時間制の時刻。%H:%M と同等。
%r: 12時間制の時刻。%I:%M:%S %p と同等。
%S: 秒(00-60) (60はうるう秒)
%s: 1970-01-01 00:00:00 UTC からの経過秒
%T: 24時間制の時刻。%H:%M:%S と同等。
%t: タブ文字 (\t)
%U: 週を表す数。最初の日曜日が第1週の始まり(00-53)
%u: 月曜日を1とした、曜日の数値表現 (1..7)
%v: VMS形式の日付 (%e-%b-%Y)
%V: ISO 8601形式の暦週 (01..53)
%W: 週を表す数。最初の月曜日が第1週の始まり(00-53)
%w: 曜日を表す数。日曜日が0(0-6)
%X: 時刻
%x: 日付
%Y: 西暦を表す数
%y: 西暦の下2桁(00-99)
%Z: タイムゾーン
%z: タイムゾーン。UTCからのオフセット (例 +0900)
%:z: タイムゾーン。コロンが入ったUTCからのオフセット (例 +09:00)
%::z: タイムゾーン。コロンが入った秒まで含むUTCからのオフセット (例 +09:00:00)
%%: %自身
# オプション
^: 大文字で出力を行なう
#: 小文字であれば大文字に、大文字であれば小文字に変更する
-: 左寄せにする(0埋めや空白埋めを行わない)
_: 空白埋めにする
0: 0埋めにする
数値: 表示桁数を指定する
```

## よく使う
```ruby
# 現在日時の取得
now = Time.current 
# 昨日
now.yesterday
# 翌日
now.tomorrow
# 2日前、2日後
now.ago(2.days)
now.since(2.days)
# 前月
now.prev_month
# 翌月
now.next_month
# 2ヶ月前、2ヶ月後
now.ago(2.month)
now.since(2.month)
# 前年
now.prev_year
# 翌年
now.next_year
# 2年前、2年後
now.ago(2.years)
now.since(2.years)
# 月初
now.beginning_of_month
# 月末
now.end_of_month
# 今週の最初
now.beginning_of_week
# 今週の末
now.end_of_week
# 先週の月曜日
now.prev_week(:monday)
# 翌週の月曜日
now.next_week(:monday)
```

　  
- - - 
## ■xxx関連
　  
　  
