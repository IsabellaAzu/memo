
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

#### 変数の中身を表示
```Ruby
render :text => hoge
```

　  
- - -

<a id="anc_1submit_for_many_tables"></a>
http://ruby-rails.hatenadiary.com/entry/20141208/1418018874  

#### １つのsubmitで複数テーブルのフィールドをnew/create
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
※buildはnewのリレーション版（.saveしないと保存されない）

　  
　  
- - -

#### 複数の子レコードをCRUD
http://qiita.com/hmuronaka/items/818c421dc632e3efb7a6

##### 親：Project、子：Condition
###### xxxx_paramsで渡って来た値の親レコードの処理
```Ruby
×：@project = Project.new(project_params)
○：@project = Project.new(title: project_params[:title], memo: project_params[:memo])
→ save時に、×だと子の分も保存してしまう。○で親の分のみ取得してnewする
```

###### xxxx_paramsで渡って来た値の子レコードの処理は、  
```Ruby
#パラメータで渡ってきた、textareaの値を、改行コードを統一してから、配列に変換し、nilもしくわ空の配列を削除
params_condition_title = project_params[:conditions_attributes]["0"][:title].gsub(/\r\n/, "\n").split("\n")
titles = params_condition_title.reject(&:blank?)
```

###### 配列の数だけ処理
```Ruby
# nilや空を取り除いたtitles配列の中身の分だけtitleで処理(.sizeしなくて楽)
for title in titles
  @project.conditions.new(title: title)
end
```

###### has_manyした子のオブジェクトの保存、関連付けなど、「4. 使えるようになるメソッド」 
> http://ruby-rails.hatenadiary.com/entry/20141203/1417601540#model-relation-one-n-methods  
> http://ruby-rails.hatenadiary.com/entry/20141204/1417688260  
  
###### 関連キーワード
> バルクインサート  
http://npb.somewhatgood.com/blog/archives/901  
トランザクション  
http://qiita.com/ysk_1031/items/d669157225e67d3a40bf

　  
　  

URLにランダムな文字列を
- - -
#### decorator  
> 「Railsで、モデルの内容をビューに出すときにちょっと加工するみたいな時、そのコードはどこに書けばいいんだ問題。」永続化すべきデータかどうか：1〜4は永続化すべきで、○△などはただの置き換えた記号  
http://shgam.hatenadiary.jp/entry/2014/09/17/194633  

https://github.com/funnythingz/reviewer/blob/master/app/decorators/review_decorator.rb  
```Ruby
def choice_type
  case object.choice_type
  when 1 then “◯”
  when 2 then “△”
  when 3 then “☓”
  when 4 then “-”
end
@answer = Answer.find_by(id: params[:id])
@answer.create.choice_type
```
　  
　  
　  
- - -
#### 「時にモデルは自分自身に関連付けを持たせるべきである、という事に気づく事があります。」

> 「2.10 自己結合」  
http://ruby.studio-kingdom.com/rails/guides/association_basics  

```Ruby
class Employee < ActiveRecord::Base
  has_many :subordinates, class_name: "Employee",
                          foreign_key: "manager_id"
  belongs_to :manager, class_name: "Employee"
end
```

　  
　  

- - -





- - -

#### 関連付け
http://ruby.studio-kingdom.com/rails/guides/association_basics  






- - -

#### Railsで１フォームに複数のサブミット(Submit)ボタンを配置するTips
http://ruby-rails.hatenadiary.com/entry/20141225/1419515057  




- - -

#### 新しいマイグレーションを追加してテーブルを変更
http://www.rubylife.jp/rails/model/index7.html#section2




- - -

#### DBに画像を保存
http://www.ckazu.info/blog/2013/12/04/image_upload_to_ar_db/  



- - -

### モデルの設計
### モデルのテスト
## アプリを作ってみよう

id % 2 == 0  
は、  
id.even?  
と書く
