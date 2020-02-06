
# 基本的な流れ_その他

- <a href="#ax2_1">その他 パーシャル（共通化）</a>  
- <a href="#ax2_2">その他 日本語化、多言語化</a>  

<a id="ax2_1"></a>
#### パーシャル（共通化）  
DRYの原則に則って同じ部品の共通化する方法で、  
_呼び出し名.html.erbに共通部分を記述し、  
共通部分を<%= render 'form' %>で上記を呼び出す（includeみたいなもの）

```html
# /app/views/projects/edit.html.erb
# /app/views/projects/new.html.erb
<%= render 'form' %>
```

パーシャルに共通部品を記述
```html
# /app/views/projects/_form.html.erb
<%= form_for @project do |f| %>
  <p><%= f.label :title %>　<%= f.text_field :title %></p>
  <% if @project.errors.any? %>
    <p><%= @project.errors.messages[:title][0] %></p>
  <% end %>
  <p><%= f.submit %></p>
<% end %>
```

#### before_action（共通化）  
DRYの原則に則って同じ部品の共通化する方法で、  
controllerの中のアクションの重複内容をまとめて処理  
どのアクションよりも先に実行される（after_actionもあるよ）
```Ruby
# 記述方法
before_action :関数名
# 他から参照されないのであればprivateの中に定義
private
  def 関数名
    共通化したい処理
  end

# 全てのアクションに対して
before_action :set_project
# 個別のアクションに対して
before_action :set_project, only: [:show, :edit, :update, :destroy]

private
  def set_project
    @project = Project.find(params[:id])
  end
```  

```Ruby
# /controllers/projects_controller.rb（controllerに定義）

class ProjectsController < ApplicationController

  # 一覧表示
  def index
    @projects = Project.all
  end
  
  # 詳細表示
  def show
    @project = Project.find(params[:id])
  end
  
  # 新規作成
  def new
    @project = Project.new
  end
  
  # create
  def create
    @project = Project.new(project_params) # project_paramsはformから渡されたもの
    if @project.save
      redirect_to projects_path # projects_pathにリダイレクト
    else
      render 'new'
    end
  end

  # 編集
  def edit
    @project = Project.find(params[:id])
  end

  # 更新
  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to projects_path
    else
      render 'edit'
    end
  end
  
  # 削除
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path
  end

  private

    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中のもののうち、titleだけ引っ張ってきてね
      params[:project].permit(:title)
    end

end

　↓

class ProjectsController < ApplicationController

  # 共通処理before
  before_action :set_project, only:[:show, :edit, :update, :destroy]

  # 一覧表示
  def index
    @projects = Project.all
  end
  
  # 詳細表示
  def show
  end
  
  # 新規作成
  def new
    @project = Project.new
  end
  
  # create
  def create
    @project = Project.new(project_params) # project_paramsはformから渡されたもの
    if @project.save
      redirect_to projects_path # projects_pathにリダイレクト
    else
      render 'new'
    end
  end
  
  # 編集
  def edit
  end
  
  # 更新
  def update
    if @project.update(project_params)
      redirect_to projects_path
    else
      render 'edit'
    end
  end
  
  # 削除
  def destroy
    @project.destroy
    redirect_to projects_path
  end
  
  private
  
    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中のもののうち、titleだけ引っ張ってきてね
      params[:project].permit(:title)
    end
  
    def set_project
      @project = Project.find(params[:id])
    end

end
```

<a id="ax2_2"></a>
#### 日本語化、多言語化
> 他言語対応したときにURIをどうするか  
http://blog.notsobad.jp/post/87487830571/rails4-i18n  
　  
Railsのlocale設定を変更  
```Ruby
# config/application.rb
  class Application < Rails::Application
    # config.i18n.default_locale = :de
    config.i18n.default_locale = :ja
  end
end
```

> 参考  
http://rails3try.blogspot.jp/2012/01/rails3-i18n.html  
http://memo.yomukaku.net/entries/LXvSUpT  

#### 日本語化(1)  

##### やらないといけないこと  

* viewに直接記載された英語を変更
* controller、modelに記載された英語を、ja.ymlとdevise.ja.ymlで変更  
* 参考：https://gist.github.com/kawamoto/4729292  

##### ファイルの配置  

* ja.yml：config/locales/ja.yml

> 参考  
https://github.com/svenfuchs/rails-i18n/blob/master/MIT-LICENSE.txt  
https://github.com/svenfuchs/rails-i18n/blob/master/rails/locale/ja.yml  


#### 日本語化(2)

> 参考  
http://morizyun.github.io/blog/i18n-english-rails-ruby-many-languages/  

/config/locales/attributes.ja.ymlを使用  
```yml
ja:
  activerecord:
    attributes:
      user:
        email: メールアドレス
        password: パスワード
        password_confirmation: パスワード（再入力）
        remember_me: 次回からパスワード入力を省く
```
#### 多言語化

> 参考  
URLの設計  
http://blog.notsobad.jp/post/87487830571/rails4-i18n  
直接指定  
http://www.serendip.ws/archives/4428  

```Ruby
# view  
<%= f.submit t('xxx.update') %>  
```

```yml
# /config/locales/attributes.ja.yml  
  xxx:  
    update: 更新する  
  ※URI Patternで定義するのもアリ（例）  
  xxx:  
    dir1  
      update: 更新する  
    dir2  
      update: 一新する  
      dir3:
        update: 新しくする  
```

##### 404/500系のページ設定

> 参考  
http://morizyun.github.io/blog/custom-error-404-500-page/


- - -


## 将来の課題（要整理）  

### 運用  

Railsのマイグレーションファイルを既存のスキーマ、データベースを元に作成  
http://blog.digital-squad.net/article/398190260.html  
  
> 見やすいログの設定方法  
http://qiita.com/marqs/items/70588084a87fd0cb164e  

```Ruby
# config/initializers/quiet_assets.rbを作成する
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

#### Strong Parameters

> 参考  
http://o.inchiki.jp/obbr/181  
http://www.techscore.com/blog/2013/01/29/rails4-%E3%81%AE-strong-parameters-%E3%81%A7%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%82%92%E6%A4%9C%E8%A8%BC%E3%81%99%E3%82%8B/  
http://easyramble.com/strong-parameters-on-rails-devise.html  
　  
#### ユーザーが自分自身以外のページへのアクセスや情報編集を制限するには、別途メソッドを実装して before_action で呼ぶなどの必要があります。

> 参考  
http://easyramble.com/devise-on-rails.html#crayon-54b3e98a9a403968501399

```Ruby
private
  def correct_user
    @user = User.find(params[:id])
    redirect_to(root_path) unless current_user?(@user)
  end
```

#### ドメイン駆動設計

http://a-suenami.hatenablog.com/entry/2014/12/07/200427  

#### Rails で "とりあえず動くコード" を書けるようになった人が次に遭遇する問題とそれを解決してくれる本まとめ

> 参考  
http://blog.inouetakuya.info/entry/2014/06/08/194015  

* 問題 1. テストが書けない  
読むべき本: Everyday Rails - RSpec による Rails テスト入門  
* 問題 2. Rails っぽく書けない   
読むべき本 (1) パーフェクト Ruby on Rails  
読むべき本 (2) Rails AntiPatterns  
* 問題 3. Ruby っぽく書けない  
読むべき本: パーフェクト Ruby  
* 問題 4. ライブラリのコードを読んでも意味が分からない  
読むべき本: メタプログラミング Ruby  
* 問題 5. Rails が内部で何をやっているのか分からない  
読むべき本: Crafting Rails 4 Applications  
* 問題 6. 手続き型なコードから抜け出せない。オブジェクト指向で書けない  
読むべき本: リファクタリング Ruby エディション  
* 問題 7. クラス設計力が足りない  
読むべき本: デザインパターンとともに学ぶオブジェクト指向のこころ  

→ [memo/rails基本的な流れの次.md](https://github.com/IsabellaAzu/memo/blob/master/rails%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C%E3%81%AE%E6%AC%A1.md)  

Ruby on Rails によるシステム開発をモデリングで効率的に行う  
http://www.hakkaku.net/series/ruby-on-rails-%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E9%96%8B%E7%99%BA%E3%82%92%E3%83%A2%E3%83%87%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%A7%E5%8A%B9%E7%8E%87%E7%9A%84%E3%81%AB  

暗号化方式一覧（トークンとは別）  
https://md5.znaet.org/md5/ac75e7eca69abf564a76d52fd6e35c1c  
　  
⇒<a href="https://github.com/IsabellaAzu/memo/blob/master/Rails/rails%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%B5%81%E3%82%8C%E3%81%AE%E6%AC%A1.md" target="_blank">rails基本的な流れの次</a>  

