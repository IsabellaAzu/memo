
　  
# railsよく探しそうな情報

> 
[・view関連](https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_88_1_view.md)  
[・controller関連](https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_88_2_controller.md)  
[・model関連](https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_88_3_model.md)  
[・親子関連](https://github.com/IsabellaAzu/memo/blob/master/Rails/rails_88_4_親子関連.md)  

　  
　  
### railsのソースを参考にしたい！
http://post.simplie.jp/posts/19  
http://bojovs.com/2012/04/24/ruby-coding-style/  
酒と泪とRubyとRailsと  
http://morizyun.github.io/  
　  
### 新規サービス立ち上げ時にやること
http://blog.nanapi.co.jp/tech/2014/04/17/rails_development/
　  
　  
### 一括登録方法
[参考1：DRYING UP RAILS CONTROLLERS: POLYMORPHIC AND SUPER CONTROLLERS](http://rails.densan-labs.net/form/bulk_registration_form.html)  
[参考2：](http://j-caw.co.jp/blog/?p=1590)  
[参考3：](http://j-caw.co.jp/blog/?p=1415)  
[参考4：](http://qiita.com/hiroki_y/items/377a5b8bc2e1b7e1a3f4)  
[参考5：](http://ja.stackoverflow.com/questions/22697/rails%E3%81%AEscaffold-controller%E3%81%A7%E8%A4%87%E6%95%B0%E8%A1%8C%E3%82%92%E4%B8%80%E6%B0%97%E3%81%ABcreate%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)  
[参考6：fields_for、accepts_nested_attributes_forを使う](http://archive.aerial.st/archive/2011/06/11/insert-has-many-relations)
　  
　  
- - - 
## ログ周り
### assetのログを非表示に
http://rainbowdevil.jp/?p=1074
```Ruby
# /config/initializers/quiet_logs.rbにファイル新規作成
Rails.application.assets.logger = Logger.new('/dev/null') 
Rails::Rack::Logger.class_eval do
  def call_with_quiet_assets(env)
    previous_level = Rails.logger.level
    Rails.logger.level = Logger::ERROR if env['PATH_INFO'].index("/assets/") == 0
    call_without_quiet_assets(env).tap do
      Rails.logger.level = previous_level
    end
  end
  alias_method_chain :call, :quiet_assets
end
```

### renderedのログを非表示に
```Ruby
# /config/application.rbに追加
# logにrederedを表示させない
config.action_view.logger = nil
```

### Ruby on Rails チュートリアル 実例を使ってRailsを学ぼう Michael Hartl (マイケル・ハートル)  
http://railstutorial.jp/  


### fatなcontroller、model問題の対策
http://qiita.com/aDaichiOta/items/3fa5bc302565bcd495a8


### Time.now と Time.current の違い

#### RubyとRailsにおけるTime, Date, DateTime, TimeWithZoneの違い
http://qiita.com/jnchito/items/cae89ee43c30f5d6fa2c

#### rails5でのtime型
http://blog.willnet.in/entry/2015/06/12/063731

   
### Rails4: fields_forとstrong_parametersで複数レコードの更新に対応する方法  
「fields_forで作った要素をstrong_parametersで許可したいんだがなー…。配列じゃなくて…。」  
http://319ring.net/blog/archives/2591   

view  
```
- model_class = Hoge
= form_tag update_enable_list_hoges_path, method: :put do
  table
    thead
      tr
        th = model_class.human_attribute_name(:id)
        th = model_class.human_attribute_name(:name)
        th 有効フラグ
    tbody
      - @hoges.each do |hoge|
        = fields_for('hoges[]', hoge, index: nil) do |fh|
          tr
            td = hoge.id
            td = hoge.name
            td
              = fh.check_box :enable
              = fh.hidden_field :id
  .form-actions
    = submit_tag '更新'
```

controller  
```
class HogesController < ApplicationController
  # 省略
 
  private
  def hoge_params
    # 通常のcreate, updateで呼ばれるほう
  end
 
  def hoges_params
    params.require(:hoges).map do |param|
      ActionController::Parameters.new(param.to_hash).permit(:id, :enable)
    end
  end
end
```

- - -
　  
## 便利メソッド
http://qiita.com/jnchito/items/dedb3b889ab226933ccf
　  
- - -
　  
## 登録確認ページを経由して登録する方法
http://qiita.com/inodev/items/b5600de8580f473cfa94
　  
- - -
　  
## flash：redirect_toする際、別コントローラーのアクションにエラーメッセージを受け渡す
http://qiita.com/hennry/items/6648379aa2740ea978e5
　  
- - -
　  

### デバイスのOS、ユーザーエージェント
https://htaccess.cman.jp/useragent/os/  
http://qiita.com/nightyknite/items/b2590a69f2e0135756dc  
　  
- - - 

## OS、制作環境アップデートで

### (1)localでMySQLが起動できない
http://qiita.com/fujitora/items/d341c52706d1954cae28  
http://qiita.com/carotene512/items/e00076fe3990b9178cc0  

#### よくあるエラー

> Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
いつのまにか消えるらしい
```
$ sudo touch /tmp/mysql.sock
```

> /usr/local/var/mysql/xxx.err: Permission denied
```
$ whoami
$ sudo chown -R _mysql:_mysql /usr/local/var/mysql
$ sudo chown 「whoamiで出た名前」 /usr/local/var/mysql/マックブック名.err
```

> ERROR! MySQL server PID file could not be found!
> .. ERROR! The server quit without updating PID file (/usr/local/var/mysql/xxx.pid).
```
$ touch /usr/local/var/mysql/xxx.pid
```

> touchしたpidファイルが消える
```
(1)my.cnfが複数ないか確認
```

> プロセスの確認
```
$ ps aux | grep mysql
$ kill -9 数字
```

> brew で MySQL uninstall そして install
```
$ brew uninstall --force mysql
$ brew cleanup -s mysql
$ brew prune
$ brew install mysql@5.7
```

> mysqlのバージョンを変更したら、gemも入れ替える(最初に入れたlibraryを読み込み続けちゃう)
```
$ bundle exec gem uninstall mysql2
$ bundle exec gem install mysql2
```

> bash: mysql.server: command not found
```
$ brew info mysql
$ brew doctor
$ brew link mysql
```

> ~/.bashrcに
```
export PATH=/usr/local/opt/mysql@5.7/bin:${PATH}
export DYLD_LIBRARY_PATH=/usr/local/opt/mysql@5.7/:${DYLD_LIBRARY_PATH}
```

> 
```
$ rbenv rehash
```

> シンボルがズレてる？
```
$ rails db:create
=> rails aborted!
=> LoadError: dlopen(/Users/b02662/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/mysql2-0.5.2/lib/mysql2/mysql2.bundle, 9): Library not=>  loaded: /usr/local/opt/mysql/lib/libmysqlclient.20.dylib
```

```
$ bundle exec gem uninstall mysql2
$ bundle install
```
で解決

#### sequel proでログインできない 
MySQLの認証プラグインのerrorログ
```
MySQL の応答: Authentication plugin 'caching_sha2_password' cannot be loaded: dlopen(/usr/local/mysql/lib/plugin/caching_sha2_password.so, 2): image not found
```
https://qiita.com/r641ywork/items/7f0ca12ced72363f9448  

##### 解決策
```
(1)標準ターミナルやiTermで頑張る。
(2)アプリ側のcaching_sha2_passwordへの対応を待つ。
(3)Sequel Proにログインするユーザの認証プラグインを変更する。
```

##### (3)の解決策で対応する場合

my.cnfの場所の確認
```
$ mysql --help | grep my.cnf
```
```
#下記の優先順位で設定ファイルを見ていく
- /etc/my.cnf
- /etc/mysql/my.cnf
- /usr/local/etc/my.cnf
- ~/.my.cnf
```

```
#ターミナル値を変更
$ mysql -u root -p
mysql> SELECT host, user, plugin FROM mysql.user;
```

```
+-----------+------------------+-----------------------+
| host      | user             | plugin                |
+-----------+------------------+-----------------------+
| localhost | root             | caching_sha2_password |
+-----------+------------------+-----------------------+
```

pluginの値を変更
```
mysql> ALTER USER 'root'@"localhost" IDENTIFIED WITH mysql_native_password BY '{password}';
mysql> FLUSH PRIVILEGES;
```

設定の反映
```
mysql> FLUSH PRIVILEGES;
```

### (2)MySQLの再インストール（homebrew）
https://qiita.com/sato11/items/ba887a5655217f60f2a2  
https://qiita.com/kodera123/items/e6c8cc1cf1e51f1debd0  

#### バックアップ  

```
$ mysqldump -u root -p -x --all-databases > dump.sql
```

#### プロセスの確認と切断

```
$ ps -ax | grep mysql
$ kill -9 xxx
```

#### MySQLの停止

```
$ mysql.server stop
```

#### HomebrewでMySQLをアンインストール

```
$ brew remove mysql
$ brew cleanup
```

#### MySQL関連ファイルを削除

```
$ sudo rm /usr/local/mysql
$ sudo rm -rf /usr/local/var/mysql
$ sudo rm -rf /usr/local/mysql*
$ sudo rm ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
$ sudo rm -rf /Library/StartupItems/MySQLCOM
$ sudo rm -rf /Library/PreferencePanes/My*
$ rm -rf ~/Library/PreferencePanes/My*
$ sudo rm -rf /Library/Receipts/mysql*
$ sudo rm -rf /Library/Receipts/MySQL*
$ sudo rm -rf /private/var/db/receipts/*mysql*
```

#### Mac再起動

### Mac Homebrewで入れたMySQLがstopしても、自動で起動し復活するゾンビモードを解消
https://mozy-ok.hatenablog.com/entry/2018/04/10/160331  

#### 原因

> mysqlのplistの設定で、死なないようになってるっぽい(?)
> そのため、~/Library/LaunchAgents/homebrew.mxcl.mysql@5.6.plist 内のKeepAliveの設定を、
> 以下のようにfalse/に変更し、設定を反映することで解決した。
```
<dict>
    <key>KeepAlive</key>
    <false/>
```

### (3)rails sで「/bin/rails:6: warning: previous definition of APP_PATH was here」エラー
Rubyを一度消して再インストールすれば解決  
http://kusu.hateblo.jp/entry/2015/05/12/181134  
　  
### (4)プロジェクトにGemをインストールできたが、gem mysql2 でエラー
```
$ bundle install --path vendor/bundle
```
gem mysql2のバージョンを指定する
http://qiita.com/miyukiw/items/a0e00028ec5ac5c6beb0  
MySQL5.7からMySQL5.6にダウングレードする？（OSX　Yosemite 10.10.5）  
OSとMySQLのバージョンとか  
https://github.com/brianmario/mysql2/issues/603#issuecomment-158705807  

### (5)brewのコンパイラーが古い

各種バージョンの確認
```
$ brew doctor
---
Warning: A newer Command Line Tools release is available.
Update them from Software Update in the App Store.
---
Warning: Your Xcode (8.1) is outdated.
Please update to Xcode 9.2 (or delete it).
Xcode can be updated from the App Store.
```

#### 下記から古いコンパイラーをダウンロードとインストール
https://developer.apple.com/download/more/  
https://qiita.com/TsukasaHasegawa/items/0d7d5c2cf3a2b8ce8993  



