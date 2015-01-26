
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

#### 複数レコードを new/create
http://qiita.com/hiroki_y/items/377a5b8bc2e1b7e1a3f4  
http://www.rokurofire.info/2014/02/26/rails_tablerelationship/  
http://qiita.com/gotohiro55/items/6d075fd40058e7b56752  
http://ruby-rails.hatenadiary.com/entry/20141204/1417688260  
http://b.pyar.bz/blog/2014/10/16/many-to-many-table/  
http://blog.kz-dev.com/archives/453  
http://qiita.com/samurairunner/items/cbd91bb9e3f8b0433b99  

