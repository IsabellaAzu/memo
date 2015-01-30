
# rails基本的な流れの次のステップ

## アプリを作ってみよう

### モデルの設計
### モデルのテスト
### リレーショナル



### よくやること

#### projectと紐付けを忘れた場合（Modelの関連付けも手動になる）
```
# TaskはProjectに所属する
$ rails g migration AddProjectToTask project:references
$ rake db:migrate
```

#### 複数の子レコードを作成・更新
http://qiita.com/hmuronaka/items/818c421dc632e3efb7a6

#### １つのsubmitで複数テーブルのフィールドをnew/create
[参考] http://ruby-rails.hatenadiary.com/entry/20141208/1418018874  
> inverse_ofの制約  
throughアソシエーションと一緒には動きません  
polymorphicアソシエーションと一緒には動きません  
for belongs_to associations has_many inverse associations are ignored.  

#### 1対多


#### 多対多


#### フォーム要素を動的に追加したり削除したり
http://qiita.com/regonn/items/cdbda32900a15721d59b  
http://blog.scimpr.com/2014/01/20/rails4%E3%81%A7%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E8%A6%81%E7%B4%A0%E3%82%92%E5%8B%95%E7%9A%84%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%82%8A%E5%89%8A%E9%99%A4%E3%81%97%E3%81%9F%E3%82%8A/  

#### Railsで１フォームに複数のサブミット(Submit)ボタンを配置するTips
http://ruby-rails.hatenadiary.com/entry/20141225/1419515057  

#### 新しいマイグレーションを追加してテーブルを変更
http://www.rubylife.jp/rails/model/index7.html#section2




