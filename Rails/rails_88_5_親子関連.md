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
　  

### 複数のレコードを作成する
http://qiita.com/ftyabu/items/cae912b211e985d74d58  
　  
　  
### 親ー子ー孫と関係のあるモデルを一括で削除する
http://qiita.com/seimiyajun/items/ffefdfc74b9fce76a538

　  
### Railsで階層化された複数モデルに対応するフォームの作り方
http://jetglass.hatenablog.jp/entry/2015/04/15/165236


　  
　  
- - - 
## ■polymorphic関連
多態性：・・・。下記の様な時に使用する
### 「異なる親モデルで、子モデルを集約する」「異なる親モデルを持てる」「親が切り替わる」
http://d.hatena.ne.jp/hichiriki/20100620#12770149270  
### ポリモーフィック関連
http://qiita.com/suguru/items/d6d3ebe7b867c5009231  
### リレーションのオプションでできること、まとめてみた。
http://beck23.hatenablog.com/entry/2014/09/09/145327

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

