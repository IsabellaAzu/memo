# 運用


## アップデート

https://qiita.com/jnchito/items/0ee47108972a0e302caf

### 

- Rails以外のgemを最新にする
- Rubyのバージョンを最新にする
- Railsをバージョンアップする
- rails app:updateタスクを実行する
- rails cやrails sでRailsが正常に起動することを確認する
- 自動テストと手動テストで動作確認する
- 問題が無さそうならサーバーにデプロイする

```
bundle outdated

```


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


## サーバーが落ちた時などの復旧

### docker-compose up -d でのerror

```
ERROR: for mysql_xxx  Cannot start service mysql_xxx: driver failed programming external connectivity on endpoint mysql_xxx (xxxxxxxxxxxxx):  (iptables failed: iptables --wait -t filter -A DOCKER ! -i xx-xxxxxxx -o xx-xxxxxxx -p tcp -d xxx.xxx.xxx.xxx --dport xx -j ACCEPT: iptables: No chain/target/match by that name.
 (exit status 1))
ERROR: Encountered errors while bringing up the project.
```

### 一旦、起動しているコンテナ、ネットワーク、ボリュームを削除

- `docker ps` `docker ps -a`
- `docker network list`
- `docker volume ls`

### ネットワーク名が無いよ、というerror

```
Network proxy declared as external, but could not be found. Please create the network manually using `docker network create xxx` and try again.
```

### docker networkを作成しようとするが、、、

```
Error response from daemon: Failed to program FILTER chain: iptables failed: iptables --wait -I FORWARD -o br-xxxxx -j DOCKER: iptables v1.4.21: Couldn't load target `DOCKER':No such file or directory

Try `iptables -h' or 'iptables --help' for more information.
```

### dockerを再起動し、ネットワークを新規作成

```
# 下記フォルダあれば削除
$ mv /var/lib/docker/network/files /tmp/docker-iptables-err
$ sudo systemctl restart docker
$ docker network create proxy
# 指定フォルダでにてコンテナ作成、起動
$ docker-compose up -d
# コンテナに開発環境、起動環境が無いのでinstall
$ bundle install --path vendor/bundle
```

### コンテナIDが変わってしまうので、

railsコンテナからMySQLコンテナへの設定を変更する


- - - 


## 参考
[rails generate migrationコマンドまとめ](https://qiita.com/zaru/items/cde2c46b6126867a1a64)  


- - - 


## local環境

### 強制終了（Control+cでプロセスを終了できない時に使える強制終了の手順）

```
app/controllers/api/v1/xxx_controller.rb:93:in `params'  
```

paramsメソッド名の重複で、無限ループになってしまう  
まずは、`Control+z`でプロセスを停止  

```
# ポート3000で起動しているPIDを検索
lsof -i:3000
---------------
COMMAND    PID    USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
ruby      34139
---------------
$ kill 34139
```




