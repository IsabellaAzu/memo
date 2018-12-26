# 運用

## Modelとテーブル追加、初期データ投入、controllerとviewの作成まで

### (1)例:CSVの都道府県データの準備
db/prefecture.csv  
表示名はlabelとする

### (2)Modelとテーブル追加

```
# Model作成
$ rails g model Prefecture label:string
# テーブル作成
$ rails db:migrate
```

※model名を `hoge_fuga` とすると、 `/app/models/hoge_fuga.rb` 内のclass名が `HogeFuga` になってしまうので、  
```
class HogeFuga < ApplicationRecord
end
　↓
class Hoge_fuga < ApplicationRecord
end
```
と修正する

### (3)初期データ投入
db/seeds.rbの編集

```
# coding: utf-8
require "csv"
CSV.foreach('db/prefecture.csv') do |row|
  Prefecture.create(:label => row[0])
end
```

```
$ rails db:seed
```

### (4)controllerとviewの作成

#### controller作成

- Model名を複数形にする
- 無駄な helper や assets を生成しない方法

```
$ rails g controller Prefectures --no-helper --no-assets
```

```
class PrefecturesController < ApplicationController
  def index
    # @マークを付けた変数はviewの中でそのまま使える
    # Prefectureの全情報を持ってくる
    @prefectures = Prefecture.all
  end
end
```

#### routing設定

- /config/routes.rbを編集  
prefectureに関するURIを生成

```
Rails.application.routes.draw do
  root 'prefectures#index'
  resources :prefectures
end
```

```
# 確認
$ rails routes
```

#### view作成

/app/views/prefectures/index.html.erb

```
<ul>
  <% @prefectures.each do |prefecture| %>
    <li><%= prefecture.label %></li>
  <% end %>
</ul>
```







## 参考
[rails generate migrationコマンドまとめ](https://qiita.com/zaru/items/cde2c46b6126867a1a64)  
[]()
