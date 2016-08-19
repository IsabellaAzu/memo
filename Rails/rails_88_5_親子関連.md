# 親子関連

　  
　  
- - - 
## ■基本

　  
- - - 
## ■親子孫関連
###
http://archive.aerial.st/archive/2011/06/11/insert-has-many-relations  
　  

### 一括new、create
http://qiita.com/hiroki_y/items/377a5b8bc2e1b7e1a3f4  
http://rails.densan-labs.net/form/bulk_registration_form.html  
http://blog.livedoor.jp/sasata299/archives/51931176.html  
「これ!」の部分！  

> 親のページで、子と孫を一括作成手順(親子の部分は割愛)
>#### (1)モデル構成
（親）　　　　親  
（子）　xxx　　　　　yyy  
（孫）　　　　zzz  
xxx:has_many:zzz  
yyy:has_many:zzz  
※throughは使わないパターン、zzzはxxxとyyyと親の外部キーを持つ
#### (2)子「yyy」のmodel
子から孫も作成できるようにaccepts_nested_attributes_forを設定  
```ruby
  has_many :zzzs, dependent: :destroy
  accepts_nested_attributes_for :zzzs, allow_destroy: true
```
#### (3)親のview
```ruby
  <% if !@xxx.zero? %>
    <%= form_for [@親, @親.yyys.build] do |f| %><%# 親から子yyyの作成 %>
      <%= f.text_field :label %>
      <% @親.xxxs.each do |xx| %><%# xxxの数だけzzzを作成：controllerにも仕込みが必要 %>
          <%= f.fields_for :zzzs, xx do |zz| %>
            <p><%= zz.hidden_field :label, :value => 0 %></p>
            <p><%= zz.hidden_field :親_id, :value => @親.id %></p>
            <p><%= zz.hidden_field :xxx_id, :value => xx.id %></p>
          <% end %>
      <% end %>
      <%= f.submit '回答する' %>
    <% end %>
  <% end %>
```
#### (4)controller
```ruby
  # yyyを作成するページの、親のaction
  @yyy = @親.yyys
  # 親のパラメーターの制限
  private
    def 親_params
      params[:親].permit(:label, :url,
        xxxs_attributes: [:label],
        yyys_attributes: [:label]
      )
    end
  # -------------------------------------------
  # yyyのcreate
  def create
    @親 = 親class.find_by(:url => params[:親_url])
    # 親に基づくyyyを作成
    @yyy = @親.yyys.new(label: yyy_params[:label])
    # xxxの数分だけ、上記作成のyyyの枠を作成
    zzz_params = yyy_params[:zzzs_attributes]
    @xxxs = @親.xxxs
    @xxxs.each_with_index do |xx,index|
      zz = zz_params[index.to_s]
      @zzz = @yyy.zzzs.new(label: zz[:label], 親_id: zz[:親_id], xxx_id: dua[:xxx_id])
      @zzz.save
    end
    if @yyy.save
    else
    end
  end




  @xxx_count.times do
    @yyy = @xxx.yyy.build(xxx_params)
  end
```



　  

### 複数のレコードを作成する
http://qiita.com/ftyabu/items/cae912b211e985d74d58  
　  
　  
### 親ー子ー孫と関係のあるモデルを一括で削除する
http://qiita.com/seimiyajun/items/ffefdfc74b9fce76a538

　  
### 子から親を作成
http://d.hatena.ne.jp/donghai821/20110804/1312475967  
```ruby
# 子のモデル
class Child
  belongs_to :parent
  accepts_nested_attributes_for :parent
end
```
```ruby
<%= f.fields_for 'parent_attributes', @child.parent do |parent_f| %>
<% end %>
```
　  
### Railsで階層化された複数モデルに対応するフォームの作り方
http://jetglass.hatenablog.jp/entry/2015/04/15/165236
　  
　  
- - - 
## n対m関連
### １対多
http://ruby-rails.hatenadiary.com/entry/20141203/1417601540  
### 多対多
http://h3poteto.hatenablog.com/entry/2014/06/15/231742  
http://pc-dr.jp/study/tyuukan.html  
　  
　  
- - - 
## 参照元テーブルに外部キーが複数ある場合
http://qiita.com/takeoverjp/items/bb56d6a8eae191cd3732  
http://blog.bitmeister.jp/?p=2739  
　  
　  
- - - 
## ■polymorphic関連
多態性：・・・。下記の様な時に使用する。基本的に同じ構造のテーブルに対して。
　  

### 「異なる親モデルで、子モデルを集約する」「異なる親モデルを持てる」「親が切り替わる」
http://d.hatena.ne.jp/hichiriki/20100620#12770149270  
　  

### ポリモーフィック関連
http://qiita.com/suguru/items/d6d3ebe7b867c5009231  
http://railscasts.com/episodes/154-polymorphic-association  
　  
　  
### ポリモーフィック使用上の注意
http://qiita.com/joker1007/items/9da1e279424554df7bb8
　  
　  
### リレーションのオプションでできること、まとめてみた。
http://beck23.hatenablog.com/entry/2014/09/09/145327
　  
　  
### ポリモーフィックの子から親を生成する
http://interfirm.hatenablog.com/entry/2014/07/30/200431  
　  
　  
### 既存に追加する場合
>#### (1)モデル構成
（親）　　　　project  
（子）　user　　　　　　theme  
（孫）　　　　　task
#### (2)Modelの設定  
```ruby
# 子Model
# 「, :as => :xxx」の追加、xxxは任意
  has_many :task, dependent: :destroy, :as => :xxx
# 孫Model
  belongs_to :xxx, :polymorphic => true
```
#### (3)DBの設定
[migration で polymorphic のカラムを後から追加する](http://qiita.com/yutackall/items/210aa0cb8859aa45af07)
```
bundle exec rails g migration AddXxxToテーブル名 xxx:references{polymorphic}
　↓
# db/migrate/マイグレーションファイル
class AddXxxToTask < ActiveRecord::Migration
  def change
    add_reference :tasks, :xxx, polymorphic: true, index: true
  end
end
　↓
# xxx_id、xxx_typeの２つのカラムが追加される
```

