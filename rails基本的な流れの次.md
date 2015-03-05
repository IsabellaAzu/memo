
# rails基本的な流れの後、よくやりそうなこと

## index
> ・<a href="#">projectと紐付けを忘れた場合（Modelの関連付けも手動になる）</a>  
・<a href="#">Routing</a>  
・<a href="#">hoge_idのカラムの値でページを表示させるには</a>  
・<a href="#">hoge_idのカラムの値で、大文字小文字を区別する</a>  
・<a href="#">[0..9][a..z][A..Z]の文字列を使って文字列を生成</a>  
・<a href="#">Rails でDBの重複エラーが発生した場合の対処</a>  
・<a href="#">変数の中身を表示</a>  
・<a href="#">１つのsubmitで複数テーブルのフィールドをnew/create</a>  
・<a href="#">aa</a>  
・<a href="#">aa</a>  
・<a href="#">aa</a>  
・<a href="#">aa</a>  
・<a href="#">aa</a>  
・<a href="#">Rails事例</a>  


　  
　  

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
#### Routing
```Ruby
  resources :projects, only:[:new,:create,:edit,:show,:update,:destroy] do
    resources :conditions, only:[:new,:create,:edit,:update,:destroy]
  end
```

　  
　  
- - -
#### hoge_idのカラムの値でページを表示させるには
> rails generate migrationコマンドまとめ  
http://qiita.com/zaru/items/cde2c46b6126867a1a64  

###### 1.Routingの設定
resourcesに「param: :hoge_id」を追加  
```Ruby
#/config/routes.rb
  resources :projects, only:[:new,:create,:edit,:show,:update,:destroy] do
    resources :conditions, only:[:new,:create,:edit,:update,:destroy]
  end
　　↓
  resources :projects, param: :hoge_id, only:[:new,:create,:edit,:show,:update,:destroy] do
    resources :conditions, param: :hoge_id, only:[:new,:create,:edit,:update,:destroy]
  end
```

###### 2.テーブルにhoge_idのカラム追加、削除

```Ruby
# Addカラム名To追加したいテーブル名 カラム名:型名
$ rails g migration AddColumnToProject hoge_id:string
$ rails g migration AddColumnToCondition hoge_id:string

# Removeカラム名from削除したいテーブル名 カラム名:型名
$ rails g migration RemoveColumnfromCondition hoge_id:string

$ rake db:migrate
$ rake routes
```

###### 3.show、edit、update、deleteで置き換えたhoge_idでページを表示させるには
```Ruby
# params[:id]のレコードのsecret_idの値で検索する
def show
  @project = Project.find_by_secret_id(params[:id])
end
```

　  
　  
- - -
#### hoge_idのカラムの値で、大文字小文字を区別する
※MySQLのstring型は大文字小文字を区別しない  

###### 1.カラムの型変換

　(1) change_datatype_カラム名_of_テーブル名
```Ruby
$ rails g migration change_datatype_hoge_id_of_projects
```

　(2) 該当のマイグレーションファイルに追記  
```Ruby
class ChangeDatatypeHogeIdOfProjects < ActiveRecord::Migration
  def change
  end
end
　↓
class ChangeDatatypeHogeIdOfProjects < ActiveRecord::Migration
  def change
    #change_column :テーブル名, :カラム名, :新しい型, オプション（null: true）
    change_column :projects, :hoge_id, :binary, null: true
  end
end

$ rake db:migrate
$ rake routes
```



###### 2.インデックスを貼る




###### 3.カラム名を変更

　(1) rename_変えたいカラム名_column_to_テーブル名  
```Ruby
$ rails g migration rename_hoge_id_column_to_projects
```

　(2) 該当のマイグレーションファイルに追記  
```Ruby
class RenameHogeIdColumnToConditions < ActiveRecord::Migration
  def change
  end
end
　↓
class RenameHogeIdColumnToConditions < ActiveRecord::Migration
  def change
  	# rename_column :テーブル名, :古いカラム名, :新しいカラム名
  	rename_column :conditions, :hoge_id, :secret_id
  end
end

$ rake db:migrate
$ rake routes
```


　  
　  
- - -
#### [0..9][a..z][A..Z]の文字列を使って文字列を生成
※ secret_token  
http://easyramble.com/rails-development-flow.html#crayon-54efff4009fbb406803080
```Ruby
# 27の3分の4倍の文字列量で生成される
SecureRandom.urlsafe_base64(27, true)
```
> 一意性
http://hbnist76.blog.fc2.com/blog-entry-128.html  

　  
　  
- - -
#### Rails でDBの重複エラーが発生した場合の対処
http://qa.atmarkit.co.jp/q/2085  
http://tmtms.hatenablog.com/entry/20120602/rails_unique  
http://ruby-rails.hatenadiary.com/entry/20140724/1406145303#model-validation-definettions-uniqueness  


　  
- - -
#### 変数の中身を表示
```Ruby
render :text => hoge
```

　  
- - -

<a id="anc_1submit_for_many_tables"></a>
#### １つのsubmitで複数テーブルのフィールドをnew/create
http://ruby-rails.hatenadiary.com/entry/20141208/1418018874  

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

###### has_menyで関連付けたレコードは自動的に削除
> http://stackoverflow.com/questions/2797339/rails-dependent-destroy-vs-dependent-delete-all  
```Ruby
# has_many :子供のtable名, :dependent => true, :foreign_key => "外部キー名"
has_many :conditions, :dependent => true, :foreign_key => "project_id"
```

  
###### 関連キーワード
> バルクインサート  
http://npb.somewhatgood.com/blog/archives/901  
トランザクション  
http://qiita.com/ysk_1031/items/d669157225e67d3a40bf

　  
　  

- - -
#### Mysql2::Error: Cannot delete or update a parent row: a foreign key constraint fails
has_manyで子レコードを持つ親レコードをdestroyしようとすると出るerror  
→ 「has_many」メソッドのテーブル指定の後に、「, dependent: :destroy」を追加するだけ！  
http://ruby-rails.hatenadiary.com/entry/20141203/1417601540  
```Ruby
# 子modelの設定ファイルで
class Project < ActiveRecord::Base
  ・・・
  has_many :conditions, dependent: :destroy
  accepts_nested_attributes_for :conditions
  ・・・
end
```
※accepts_nested_attributes_forに、「, allow_destroy: true」を指定しなくても大丈夫  

　  
　  
- - -
#### 親をcreateした後のshowやedit画面で、子が複数表示されてしまう。。。（調査中）
> http://qiita.com/hmuronaka/items/256e59214a66a296cfa5


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
#### 関連付け
http://ruby.studio-kingdom.com/rails/guides/association_basics  

　  
　  
- - -
#### Railsで１フォームに複数のサブミット(Submit)ボタンを配置するTips
http://ruby-rails.hatenadiary.com/entry/20141225/1419515057  




- - -
#### railsのhtmlヘルパー周り
> http://qiita.com/sfkirthna/items/b17cf7a217e9b8d3172a  
  

　  
　  
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



- - -
### 日付と時刻
> http://www.namaraii.com/rubytips/?%E6%97%A5%E4%BB%98%E3%81%A8%E6%99%82%E5%88%BB  
```Ruby
day = Time.now
p day #=> "Mon March 2 22:31:46 JST 2015"
p day.year #=> 2001
p day.month #=> 5
p day.day #=> 20
p day.hour #=> 23
p day.min #=> 48
p day.sec #=> 45
```




- - -
### Rails事例
> サイバーエージェントでRailsを使っているコミュニティサービスのお話 2014年11月27日(木)  
http://ameblo.jp/principia-ca/entry-11868598377.html  


Railsのポリモーフィックアソシエーション???
http://o.inchiki.jp/obbr/149
