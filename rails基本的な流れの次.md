
# rails基本的な流れの後、よくやりそうなこと

#### projectと紐付けを忘れた場合（Modelの関連付けも手動になる）
```
# ConditionはProjectに所属する
$ rails g migration AddProjectToCondition project:references
$ rake db:migrate
```

```
# 上記追加を取り消す場合
$ rails destroy migration AddProjectToTask project:references
```



- - -

#### 複数の子レコードを作成・更新
http://qiita.com/hmuronaka/items/818c421dc632e3efb7a6



- - -

<a id="anc_1submit_for_many_tables"></a>
#### １つのsubmitで複数テーブルのフィールドをnew/create
[参考] http://ruby-rails.hatenadiary.com/entry/20141208/1418018874  
> 関連キーワード inverse_of  
http://qiita.com/ryoff/items/e3ba4b8c8be117c79b73  

###### 1. 親model xxxx に追記
```Ruby
has_many :yyyys # 最初小文字複数形
accepts_nested_attributes_for :yyyys # 最初小文字複数形
```

###### 2. 子モデル yyyy に追記
```Ruby
belongs_to :xxxx
```

###### 3. 親モデルのnewのビューなどで、入れ子で使用可能
```Html
<%= form_for @xxxx do |f| %>
  <%= f.fields_for :yyyys do |yyyys_form| %>
    <%= yyyys_form.label :title, "見出し" %>
    <%= yyyys_form.text_field :title %><br />
  <% end %>
<% end %>
```

###### 4. 親コントローラの、例えばnewに追記するなら、そしてStrongParameterにも。
```Ruby
def new
  @xxxx = Xxxx.new
  @xxxx.yyyys.build
end
〜
Private
  def xxxx_params
    def xxxx_params
      params[:xxxx].permit(:title,:yyyys_attributes => [:title])
    end
  end
```
※buildはnewのリレーション版


- - -

#### 同一のリレーショナルなID(ProjectのID)で、複数のレコードを登録  
(1)textareaで改行を観て、配列に変換してDBに登録？  
(2)textareaで改行を観て、hiddenに埋め込む？→コントローラでn.timeってできない？？  
(3)textareaで改行を観て、hiddenに埋め込む？→コントローラで1.upto(20) { @project.conditions.build }とか回数制限
→ (1)かな
> 参考  
http://319ring.net/blog/archives/2591  

```
str = "aaaa
bbbbb
ccccccc
ddddd"
lines = str.rstrip.split(/\r?\n/).map {|line| line.chomp }
```


- - - 
#### 複数レコード項目を一括保存（Conditionの一覧表示から一気に変更）  
http://npb.somewhatgood.com/blog/archives/901  





- - -

### リレーション
#### 1対1
#### 1対多
#### 多対多




- - -

#### 関連付け
http://ruby.studio-kingdom.com/rails/guides/association_basics  




- - -

#### フォーム要素を動的に追加したり削除したり
http://qiita.com/regonn/items/cdbda32900a15721d59b  
http://blog.scimpr.com/2014/01/20/rails4%E3%81%A7%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E8%A6%81%E7%B4%A0%E3%82%92%E5%8B%95%E7%9A%84%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%82%8A%E5%89%8A%E9%99%A4%E3%81%97%E3%81%9F%E3%82%8A/  




- - -

#### Railsで１フォームに複数のサブミット(Submit)ボタンを配置するTips
http://ruby-rails.hatenadiary.com/entry/20141225/1419515057  




- - -

#### 新しいマイグレーションを追加してテーブルを変更
http://www.rubylife.jp/rails/model/index7.html#section2



- - -

### モデルの設計
### モデルのテスト
## アプリを作ってみよう

