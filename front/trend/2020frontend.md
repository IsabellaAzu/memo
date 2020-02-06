
# 2020frontend.md
　  
　  
　  
- - - 
　  
　  
## :trident:【2019年】Web開発トレンド総まとめ – フロントエンド開発編

https://ryosukemizuta.com/2019_web_development_front_end/

### エディタ

- VSCode
- Sublime Text

### css

- CSS Variables(IE11は使用できない:x:[https://caniuse.com/#search=CSS%20Variables](https://caniuse.com/#search=CSS%20Variables))

### Responsive Layout

- Set viewport
- Media queris  
  [コピペで済ませていませんか？改めて学び直したい「Viewport」のすべて](https://ferret-plus.com/6033)  
- Fluid widths  
  幅の全体をブラウザのウインドウに対して相対値(%)で指定する流動的なレイアウト  
- pxよりrem  
  IE11以降:o:[caniuse](https://caniuse.com/#search=rem)  
  [CSSの基本単位としてremを使うと超絶便利](https://qiita.com/butchi_y/items/453654828d9d6c9f94b0)

### GitHub Pages

[無料で使える！GitHub Pagesを使ってWebページを公開する方法](https://techacademy.jp/magazine/6445)  


### javascript

#### Fetch API

リクエストやレスポンスといったHTTP のパイプラインを構成する要素を操作できる  
[Fetch を使う - MDN](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)  

#### ES6

[ES2015(ES6) 入門](https://qiita.com/soarflat/items/b251caf9cb59b72beb9b)  

#### JS フレームワーク

- React
- Vue
- Angular

#### 状態管理

- Redux  
  - Reactを使用するのであればRedux  
  - [Redux入門 1日目 Reduxとは(公式ドキュメント和訳)](https://qiita.com/kitagawamac/items/b001839150ab04a6a427)  
- Context API  
  - react本来の機能で実装でき、Redexより学習コストが低く、可読性が高い
  - [React v16で実装された new Context APIを使って、Reduxへ別れを告げる](https://qiita.com/kaba/items/50126e874b24ff984471)  
- Apollo(GraphQL Client)  
  [世のフロントエンドエンジニアにApollo Clientを布教したい](https://qiita.com/seya/items/26c8a0dc549a10efcdf8)  
- VueX  
  - Vueアプリケーションの状態管理を適切に扱うためのライブラリ  
  - [Vuex とは何か？](https://vuex.vuejs.org/ja/)  
- NgRx
  - Angularアプリケーションの状態管理を適切に扱うためのライブラリ
  - [ngrx紹介](https://qiita.com/kouMatsumoto/items/c8297466c1824953632f)  

### tool

#### NPM or Yarn

- Node.jsのライブラリやパッケージを管理することができるツール
- Yarnは、Facebook発のJavaScriptパッケージマネジャー

[Yarn：Facebook発のパッケージマネジャーはnpmに代わるスタンダードになるか](https://www.webprofessional.jp/yarn-vs-npm/)  

#### Webpack or Parcel

モジュールバンドラーは複数のファイルを1つにまとめてくれます

- Webpackは、多機能で痒いところまで手が届くモジュールバンドラー
- Parcelは細かい設定は苦手なものの、ビルドがお手軽にできるモジュールバンドラー

[Webpackってどんなもの？](https://qiita.com/kamykn/items/45fb4690ace32216ca25)  

#### Gulp or Grunt  

どちらもNode.jsをベースとしたタスクランナー

- SassやLessをCSSに自動変換 [現場で使えるGulp入門](https://app.codegrid.net/entry/gulp-1)
- JavaScriptやCSSファイルの結合・圧縮を自動化 [現場で使えるGrunt入門](https://app.codegrid.net/entry/grunt-introduction)

### 【2019年版】最高の海外プログラミング学習サイトTop10

- Udemy
- Coursera
- edX
- SKILLSHARE
- Code.org
- freeCodeCamp
- Udacity
- Learn Code Academy
- Scotch.io
- Tuts+


- - - 
　  
　  
## :trident:2020年以降のプログラミング技術のトレンド予想

https://qiita.com/baby-degu/items/a311ca07d155037253c8

### Rustが主流になる

Rustは、安全、特にスレッドセーフな処理に焦点を当てたマルチパラダイムシステムプログラミング言語

### GraphQLの利用は拡大を続ける

```
一般的なREST APIは、データ取得の際、複数のURLからロードする必要がありますが、
GraphQL APIは1回のリクエストでアプリに必要なすべてのデータを取得できます。
```

### プログレッシブWebアプリを検討すべき

プログレッシブWebアプリ（PWA）は、  
アプリケーションを構築するためWebの最も優れた機能と最高品質のモバイルアプリを組み合わせる新しいアプローチです。

- [PWAとはなにか。なぜ今それを活用すべきなのか？](https://qiita.com/baby-degu/items/a2bba910b3807c4036c1)  
- [学習](https://medium.com/better-programming/everything-you-need-to-know-about-pwas-8e41a7e745aa)  
- [service workers](https://caniuse.com/#search=service%20workers)

```
Web開発者は、ネイティブアプリの開発者よりもはるかに数が多いです。
大企業がWeb開発者を使ってプログレッシブWebアプリケーションを作成できることに気付いたら、
PWAの巨大な波が押し寄せるでしょう。
しかし、大企業がそれに気づくまでにはしばらく時間がかかるでしょう。
これはテクノロジーにとってはごく普通のことです。
ほとんどの場合、Web開発はWeb Workers API（ネイティブブラウザーAPI）とのやり取りなので、
プログレッシブ部分は一般にフロントエンド開発に向けられます。
Webアプリは主流から外れることはないでしょう。
一つで複数のプラットフォームに対応できるPWAは、
時間を節約できてもっとお金を稼げると考える人が増えています。
```

### WebAssemblyはより軽く快適に

```
WebAssembly（略称Wasm）は、スタックベースの仮想マシン用のバイナリ命令形式です。
Wasmは、C、C ++、Rustなどの高レベル言語をコンパイルするためのポータブルターゲットとして設計されています。
Wasmは、クライアントおよびサーバーアプリケーションのWeb上での展開も可能にします。
PWAもWasmを使用できます。
つまり、WebAssemblyは、JavaScriptテクノロジをよりレベルの高いテクノロジと結び付ける方法なのです。
ReactアプリでRust画像処理ライブラリを使用することを考えてください。
WebAssemblyなら、すぐにそれができるのです。
パフォーマンスが重要であり、データ量が増えると、良好なパフォーマンスを維持することがさらに難しくなります。
そのとき、C++またはRustの低レベルなライブラリが登場して、
そこから大企業がWebAssemblyとsnowballを採用することになるでしょう。
```

### Reactはこれからも圧倒的な人気

```
ライブラリの目標は「物事を成し遂げること」だということを忘れないでください。  
フレームワークを選ぶのは好みの問題ではなく、どれが一番物事を上手く成し遂げるかということに重点を置いてください。
どのフレームワークが「ベスト」であるかを議論するのはまったく非生産的です。
まずフレームワークを選び、すべてのエネルギーをプログラミングに注ぎ込むのが重要です。
```

### これからもJavaScriptに賭ける

```
2010年代はJavaScriptの10年だったと自信を持って言えます。
この10年でJavaScriptは大きく成長しましたが、その成長速度が低下しているようには見えません。
JavaScriptの開発者は、「本物の開発者ではない」という汚名を着せられて来ました。
JavaScriptは、Netflix、Facebook、Googleなど多くの大企業の心臓部です。
したがって、言語としてのJavaScriptは、他のプログラミング言語と同様に全く正当なものです。
私はJavaScript開発者であることを誇りに思います。
結局のところ、最もクールで革新的なプロダクトのいくつかは、JavaScriptのコミュニティによって作られてきたのです。
ほとんどすべてのWebサイトがJavaScriptをある程度使っています。
この世にウェブサイトはいくつあるんでしょうか？
おそらく何百万という数字じゃないでしょうか！
JavaScript開発者になるのはこれまでにないほど良いタイミングでした。
給与は増え、コミュニティは相変わらず活気があり、雇用市場は巨大です。
JavaScriptを学びたいと思うなら、「あなたはJSを知らない」という本のシリーズはおススメです。
```
　  
　  
- - - 
　  
　  
## :trident:11 Must-Know FrontEnd Trends for 2020 の翻訳

https://lifewood.hatenablog.com/entry/2020/01/04/223150  

1. Micro frontends  
  （[Bit](https://bit.dev/)を使用すると、）個々のフロントエンド/コンポーネントを分離、バージョン化、ビルド、テスト、更新できる
2. Atomic Design  
  ```
  Atomic コンポーネントの利点は、
  モジュール式で再利用可能なコンポーネントを介したモジュール式 UI アプリケーションの構築にとどまりません。
  このパラダイムにより、構成を考えるように強制されるため、
  すべてのコンポーネントの役割と API 、それらの階層、およびアプリケーションの構築プロセスを
  効果的かつ効率的な方法で抽象化する方法をよりよく理解できます。
  ```
  - [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)  
  - [Atomic Design and UI Components: Theory to Practice](https://blog.bitsrc.io/atomic-design-and-ui-components-theory-to-practice-f200db337c24)  
3. カプセル化されたStyling と Shadow Dom  
  - マークアップ構造、スタイル、および動作をページ上の他のコードから隠して分離できる
  - [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)  
4. TypeScript take over  
  - [開発者の 80 ％が次のプロジェクトで TypeScript を使用または学習したいと認めていることが報告されています。](https://2018.stateofjs.com/javascript-flavors/typescript/)  
  -  TS コードは理解しやすく、実装が速く、バグが少なく、定型文も少なくて済む
5. Web components  
6. コンポーネントライブラリからダイナミックコレクションまで  
7. 状態管理：Bye Bye Redux？ （ない…。）  
  - Redux は辞めるのが難しい道具
  - フロントエンドのモジュール化が進むにつれて、アプリの状態をグローバルに管理することの苦痛はより明確になる
8. ESM CDN  
9. プログレッシブ Web アプリ。 まだ成長しています。  
10. デザイナーと開発者の統合  
11. Web assembly — 未来へ？  
　  
　  
- - - 
　  
　  
## :trident:JSフレームワーク事情2020年始め

https://note.com/erukiti/n/na654ad7bd9bb  

![picture_pc_d44a3b47c863bf737083c265bf3a0f84](https://user-images.githubusercontent.com/1782095/72397202-84b5bb00-3782-11ea-9736-25a046f0d105.png)  

- 世界的な数字で人気・シェアを見るとReactが圧倒的。ずっと右肩上がりで80.3%。
- シェアだけで見るとAngularとAngularJS（Angular系の1.x系）の合計値はVueよりも高いですが、  
  「今後はもう採用したくない」と考える率が高く、Angular/AngularJSの人気が低下しているということは間違いありません。
- Vue系のフレームワークであるNuxtの人気は日本では高いように観測され  
- React系のNextとGatsbyがそれぞれNuxtの2倍くらいの人気・シェアを持っています。  
  まだ日本ではNextやGatsbyは知名度が高くないようですが、  
  海外に比べて遅く浸透する日本の傾向を考えると、今年や来年くらいには浸透しているかもしれません。
- 世界の7割はReactという風潮

### TypeScript

- Reactは独自の型システムとしてFlowを採用
- TypeScriptとの互換性の高さ
- VueやNuxtは後追いでTypeScript化を進めていますが、  
  元から型を前提として作られたReactやそのエコシステムと比べて、  
  現時点ではVueエコシステムでのTypeScriptの導入しやすさや使いやすさでは劣る
- VueがReactを覆せる可能性は現時点では無さそう

> VueのTypeScript対応が完了した今、これから勉強してWebアプリを作りたい！という人にとっては、
> なかなかVueとReactどっちを取るかというのは難しいなぁと思いました。
> サクッと作るならVueのほうが絶対コスト少ないと感じる  

> 将来のフレームワーク乗り換えのリスクなどを考えるとやはりReactが無難だとは思います
> 今はとりあえずReact（もちろんReact Hooksと一緒に）を使っておくのが最善そう

### Nuxt/Next/Gatsby/Angular

- Nuxtも良いフレームワークだとは思いますが、  
  これもNextとGatsbyというフレームワークと比べると伸びは期待しづらい  
- 静的サイトジェネレータは別にNextやNuxtじゃなくてもいいのでは？という風潮に  
- SSRはさほど重要ではないと考えられ始めています。  
  - GoogleのクローラーがJavaScript対応していること  
  - SSR自体が面倒な割には得るものが少ないこと  
  などから

### Ruby on Rails

- これまた世界では急速に忘れられているものの1つです。  
- アジア圏ではまだ人気がありますが、世界で見るとシェアを一気に落としています。  
- その影響でRubyも言語シェアをなくしている

  - フルスタックフレームワークだからという点がとても大きい  
  - Angularが不人気なのもその点が大きい  
  - 同様にNuxtもそうなりうる危険性があるように見えます

### フルスタックフレームワーク

Ruby on Rails界隈ではなぜかTDDが死んだことになっているくらいには、  
ユニットテストとの相性が悪くなってしまう仕組みです。  

- Nuxt  
  - RailsやAngularよりはフルスタックフレームワーク特有の押しつけは少ない  
  - そういったものにウンザリした反動でミニマルなものを好む傾向がある  
- Nextは組み合わせが面倒  
  - ミニマルな方が取り回しがよく、今の時代にマッチしているということなのでしょう  

### React + Redux / React Hooks

- 人気を増している理由の1つは、2019年でReact Hooksが浸透したこと
- React HooksはそれまでReact界隈で主流だった  
  ```
  React + Redux + 非同期ミドルウェア + Recompose / HoC
  ```
  という組み合わせを完全に過去のものに変えました  
- React Hooksを基軸として、どうしても必要ならReduxを導入すればいいというものにしてしまいました
- Reduxの人気がここ二年で一気に落ちていて、今後は利用しないという人が増えている
- Redux自体が悪いというより、なんでもかんでもRedux使ってアンチパターンに陥ってる環境が多い
- React Hooksは、ローカルステートで良いものはローカルで持てばいいし、  
  非同期処理をこなすための仕組みがあるため、Reduxで不必要に複雑化していたものをほぐして分解できます

### JSX or HTMLテンプレート

JSXは、JavaScript/TypeScriptのソースコードの中にHTMLに酷似したナニカを埋め込むものです。  
JSXは決して、テンプレートの中にロジックを埋め込むものではありません。  

- Reactのシェアと人気がともに高い理由は、意外にJSXにもあるのではないか？
- VueもAngularも基本的にはHTMLをベースとしたテンプレート言語を採用

[JSXが実はベターな解だったのではないか？](https://note.com/erukiti/n/n6f673021469e)  

```
HTMLとJSのどちらが制御構造を持てばいいのか？
でいえばJS側が持つ方がリファクタリングしやすいため、
JSXの方が良いというものです。
```

[202x年代のJS開発における複雑性との戦い](https://note.com/erukiti/n/nf9c27c7796ab)  

```
React/Vueのどっちかをやっておけば潰しは大体効くので、
ReactでもVueでも好きな方を選べばいいという点は間違いないとは思っています。
ただ、Reactの方がミニマルなため、今後の時代には適合しやすいでしょう。
```

```
Angularを選ばない理由
- そもそもフレームワークというものは、仮にその時点で80点を取れたとしても技術的負債になりがちです。
- 特にガチガチなほど、その傾向があります。
- 次に新しい技術が来たときの移行コストが高すぎる
- フレームワークの持つ複雑性は、それだけで技術的負債になりえます。
- AngularはAngularJSよりはマシかもしれませんが、それでもフレームワークであり、Vueよりもさらに大きく複雑
```

```
ソフトウェア開発は、
- 問題解決が主体
- そこにあるビジネスロジック・ユースケースが重要
- ライブラリやフレームワークの選定は二の次
- なるべくならライブラリやフレームワークには依存しない方が望ましい
```

```
HTMLとJSの関係について
- Angularは、HTMLとJavaScript（TypeScript）を分割してかきます。
- Reactは、JavaScriptの中にHTMLを書きます。
- Vueは、HTMLにJavaScriptを書きます。
```

### エンジニアリング

```
ビジネス環境の変化と如何にして戦うか？
つまり不確定性との戦いの時代になりました。
フルスタックフレームワークは、
たとえばAngularやNuxtを捨てたくなったときに、次に移るのが面倒です。
```

　  
- - - 
　  
　  
## :trident:2020年の開発者が知っておくべき11の必須スキル


https://qiita.com/rana_kualu/items/c79a16ff503c86b27483

01. Containers (Docker and Kubernetes)
02. Cloud Platform (AWS, GCP, or Azure)
03. Data Structure and Algorithm
04. A Version Control Tool (Git)
05. One Text Editors (VIM)
06. IDEs (VSCode or IntelliJIDEA)
07. Database and SQL
08. UNIX (Linux)
09. An OOP Programming language (C++, Java or Python)
10. Networking basics
11. One Scripting language
　  
　  
- - - 
　  
　  
## :trident:この TypeScript が Hello, world! のくせに慎重すぎる

https://qiita.com/matzkoh/items/90baab22ad489b78384b
　  
　  
- - - 
　  
　  
## :trident:20 良いコードの書き方

https://qiita.com/alt_yamamoto/items/25eda376e6b947208996
　  
　  
- - - 
　  
　  
## :trident:20 年代のフロントエンド

https://qiita.com/mizchi/items/50937c7f702da566e989
　  
　  
- - - 
　  
　  
## :trident:markdown

- https://www.webfx.com/tools/emoji-cheat-sheet/
- https://qiita.com/Qiita/items/c686397e4a0f4f11683d
- https://gist.github.com/Phroneris/e7e6c869640b95bd42434bdc995cd4f6

<details>
<summary>サンプルコード</summary>
```rb
puts 'Hello, World'
```
</details>
