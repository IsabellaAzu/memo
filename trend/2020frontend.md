
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

　  
- - - 
　  
　  
## :trident:2020 and Beyond Programming Trend Predictions

https://eigo-no-jikan.hatenablog.com/entry/2019/10/03/2020-programming-trend-predictions

　  
- - - 
　  
　  
## :trident:JSフレームワーク事情2020年始め

https://note.com/erukiti/n/na654ad7bd9bb
　  
　  
- - - 
　  
　  
## :trident:markdown

- https://www.webfx.com/tools/emoji-cheat-sheet/
- https://qiita.com/Qiita/items/c686397e4a0f4f11683d

<details><summary>サンプルコード</summary><div>

```rb
puts 'Hello, World'
```
</div></details>
