
# vue.js


## 10分で始めるVue.js(基本編)2016年10月19日

https://qiita.com/hikarut/items/a71f065feaa3f5bca5e3  



## Vue.jsのロードマップ

https://github.com/vuejs/roadmap



## 今からVue.jsを始める人のための「知るのを後回しにしてよい」n個のこと  

https://qiita.com/fruitriin/items/3249bb24d60932bb42ee  


## Vue.jsを100時間勉強して分かったこと

https://qiita.com/kskinaba/items/3e8887d45b11f9132012



## 2019年版Vue.jsを使ってる人には必ず知っていてほしいVue.jsの武器とドキュメントに書かれていないコンポーネントやメンテナンスの際に役立つTips

https://qiita.com/kahirokunn/items/6b4834b9a13406535f32




## フロントエンドエンジニアにとっての2019年

https://ics.media/entry/190709/  

### ReactやVueユーザーはテンプレート側にJSを書くのか？

JSXやテンプレートのHTMLにおいて、デフォルト挙動のキャンセルのために、ネイティブのon属性等を仕込むのはありでしょうか？  
React、Vue、Angularユーザーに質問しました。

React、Vue、Angularユーザーに質問。
JSXやテンプレートのHTMLにおいて、デフォルト挙動のキャンセルのために、ネイティブのon属性等を仕込むのはアリ？  

234票  

```
例
<a href="javascript:void(0)">
<a onclick="return false;">
<body ondragstart="return false;">
<p oncontextmenu="return false;">
```

- 14% いいよ
- 58% だめ
- 18% どっちでもいい
- 10% <a href="javascript~"のみ許す

個人的にはテンプレート側にJavaScriptが混じるのは分離ができておらず、ベストプラクティスではないと思っています。  
詳細は記事『React/Vue/AngularでDOMのonやhrefにJavaScriptのソース文字列を使うのはアリか？ - Qiita』にまとめたので、  
あわせて参照くださいませ。https://qiita.com/clockmaker/items/05aeaf6c69a57150e315  

### Vue.jsを使うフロントエンジニアに質問

Material Designを使うとき、どのフレームワークを最もよく使いますか？※Twitterのアンケート機能で回答ください  

60票  

- 45% Vue Material
- 47% Vuetify
-  2% MDC Integration
-  6% Material Components Vue

### Vue.jsでTypeScriptを使うなら

Vue.jsをTypeScriptで開発するにはさまざまな書き方ができます。  
Vue.jsの良さは習熟度に応じた作り方がサポートされていることですが、逆にいえばメジャーな書き方がわからないといったデメリットもあります。  
vue-class-componentとvue-property-decoratorを使うと、ほぼAngularライクな書き方でVue.jsを使うことができます。  
本サイト内の記事「webpack+TypeScript+Vue.jsの最小構成」でも手厚く導入方法を解説しています。  

### Vue.jsをTypeScriptで書いている方に質問です。  

コンポーネントを作る際、どの書き方を使っていますか？#vuejs #TypeScript  

249票  

- 32% Vue.extend
- 25% vue-class-component
- 43% vue-property-decoratorと2

### Vue.js v3はクラスベースを断念

React HooksライクなAPIも話があがっていますが、今後、Vue.js v3で定番はどの書き方になるのでしょうか？（vue-class-componentは大丈夫でしょうか・・・）

### Gruntって今も使っている人、いるの？

Gruntはかつてフロントエンドエンジニアの制作効率化に革命を起こしたツールでした。  
今はGulpをはじめ他のツールに役割を奪われている状況ですが、現在も使っている人はいるのでしょうか？  
Gruntを今も使っていますか？※Twitterのアンケート機能で回答ください  

-  2.5% 現役で使っている
-  2.5% たまに使うことがある
- 34.2% もう使わない
- 60.9% 使ったことすらない

### 容量節約に役立つ画像形式webpって使っている？

圧縮効率に優れた画像形式webp（ウェッピー）。高圧縮率でアニメーション情報も含められるなど、多くの用途に利用できます。どのくらい利用されているのでしょうか？  
画像ファイル形式 .webp を使っていますか？※Twitterのアンケート機能で回答ください  

643票  

-  2% よく使っている
- 12% 使ったことがある
- 49% 使ったことはない
- 37% .webpってなに？

### アニGIFより綺麗、APNGって使っている？

APNG（エーピング）とはPNG形式の拡張で、アニメーションを利用できる画像形式です。  
LINEのアニメスタンプにも採用されるなど、次世代のアニメーション画像形式として、一定のニーズがあります。  
はたして、ウェブ制作の現場ではどのくらい利用されているのでしょうか？  

305票  

-  3% よく使っている
-  8% 使ったことがある
- 47% 使ったことはない
- 42% APNGってなに？

### PWAの時代は来るか？

流行の兆しのあるPWA（プログレッシブ・ウェブ・アプリ）。ウェブサイトをホーム画面のアプリとして登録可能にすることで、  
ネイティブアプリのように振る舞うことができ、訪問率向上を期待できます。  
ウェブサイトをホーム画面に登録する人がどのくらいいるのでしょうか？　ユーザー視点の意識を調査してみました。  

スマホのブラウザで「ホーム画面に追加」って使いますか？
※Twitterのアンケート機能で回答ください

244票  

-  5% よく使っている
- 39% たまに使う
- 50% 使わない
-  6% そんな機能は知らない

### 人気のJavaScriptライブラリはどれ？

フロントエンドエンジニアに質問。  
あなたが最近使っているJavaScriptライブラリ/フレームワークはどれ？※Twitterのアンケート機能で回答ください  

3204票  

- 23% React
- 37% Vue
-  7% Angular
- 33% jQuery

- - - 

## React、Angularになじめなかった僕に手を差し伸べてくれたVue.js

https://qiita.com/samuraikun/items/bb2939296bbead341293

### なぜVue.js？？

```
普段の仕事では、Ruby/Railsなので、フロントエンド周りは、jQueryにCoffeeScriptで片手間感覚...
　　　　↓
しかし最近のフロントエンド界隈は、良くも悪くも盛り上がっていて楽しそうだなあと思う日々。
　　　　↓
いろいろ、ググって調べてみると、ES6、Babel、Reactふむふむ...🤔
ん？？ Webpack? JSX?? Flux?? Redux??
「落ち着け！とりあえず日本語でOK」状態。。正にこの記事で書かれている状態そのものでした。
　　　　↓
Reactとかでイケてるフロントエンド開発をちょっと試したいと思っても、BabelやWebpackの設定など環境構築でつまづき、
肝心のアプリケーション開発に着手できず、疲弊していく自分。。
```

### Fluxアーキテクチャに基づいたアプリケーション作成

- MVCだと、規模が大きくなり、どのモデルがどのイベントによっていつ何にデータが変更されたのかが把握することが難しい
- Fluxによって、データの変更を受け付けつけるもの、変更を監視するもの、実際に変更を行うものなどのように責務を分けるようにした

そして、このFluxアーキテクチャーに基づいたライブラリが各JSフレームワーク毎に用意されている。  

- Reactなら「Redux」
- Vue.jsなら 「Vuex」 

#### Vuexとは？

Vue.jsにおける状態管理パターンを実現するためのアーキテクチャであり、ライブラリ。  
アーキテクチャの思想としては、、Flux、 Redux そして The Elm Architectureから影響を受けている。  

#### 漫画で説明するFlux

https://medium.com/samyamashita/%E6%BC%AB%E7%94%BB%E3%81%A7%E8%AA%AC%E6%98%8E%E3%81%99%E3%82%8B-flux-1a219e50232b#.kkglld8lb








