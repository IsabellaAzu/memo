
# vue.js


## Vue.jsのロードマップ

https://github.com/vuejs/roadmap



## 今からVue.jsを始める人のための「知るのを後回しにしてよい」n個のこと  

https://qiita.com/fruitriin/items/3249bb24d60932bb42ee  


## Vue.jsを100時間勉強して分かったこと

https://qiita.com/kskinaba/items/3e8887d45b11f9132012

## 2019年版Vue.jsを使ってる人には必ず知っていてほしいVue.jsの武器とドキュメントに書かれていないコンポーネントやメンテナンスの際に役立つTips

https://qiita.com/kahirokunn/items/6b4834b9a13406535f32


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








