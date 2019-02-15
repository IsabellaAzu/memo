
# css関連


## reset.css

### CSS Remedy

CSSリセットにも新しい動きが！最近の実装に合わせて、見直すきかっけになる新しいCSSのリセット  
https://coliss.com/articles/build-websites/operation/css/cssremedy.html

### destyle.css

https://github.com/nicolas-cusan/destyle.css/blob/master/destyle.css  
https://nicolas-cusan.github.io/destyle.css/  

### CSSリセットの2019年用私流カスタマイズ方法
https://coliss.com/articles/build-websites/operation/css/my-css-reset-by-ire.html

#### Resetting margins, paddings, and borders

```css
html, body,
h1, h2, h3, h4, h5, h6,
a, p, span,
em, small, strong,
sub, sup,
mark, del, ins, strike,
abbr, dfn,
blockquote, q, cite,
code, pre,
ol, ul, li, dl, dt, dd,
div, section, article,
main, aside, nav,
header, hgroup, footer,
img, figure, figcaption,
address, time,
audio, video,
canvas, iframe,
details, summary,
fieldset, form, label, legend,
table, caption,
tbody, tfoot, thead,
tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
}
```

#### Typography

```css
html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    line-height: 1.4;
}

* {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

a,
a:visited {
    color: inherit;
}
```

#### Layout & box sizing

```css
article,
aside,
footer,
header,
nav,
section,
main {
    display: block;
}

* {
    box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: inherit;
}
```

#### Resetting specific element styles

```css
table {
    border-collapse: collapse;
    border-spacing: 0;
}

ol,
ul {
    list-style: none;
}

img,
video {
    max-width: 100%;
}

img {
    border-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
    content: "";
    content: none;
}
```

#### Attributes & states

```css
[hidden] {
    display: none !important;
}

[disabled] {
    cursor: not-allowed;
}

:focus:not(:focus-visible) {
    outline: none;
}
```

#### Screen reader only utility

```css
.sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    left: -9999px;
    top: -9999px;
}
```

### 2018年おすすめのCSSリセット！「Reboot.css」の特徴と使い方を解説

https://coliss.com/articles/build-websites/operation/css/new-reset-rebootcss.html  

- すべての要素に「box-sizing: border-box;」
```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```
- remを使用したサイズとスペースの指定
- ネイティブのフォントファミリー
- margin-topは無い
- 共通要素はクリーンなスタイル
- すばやく反応するタッチデバイスへの対応
```css
a,
area,
button,
[role="button"],
input:not([type=range]),
label,
select,
summary,
textarea {
  -ms-touch-action: manipulation;
      touch-action: manipulation;
}
```

### Eric MeyerのCSSリセット

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```


## flex
`CSS Flexboxのレイアウトで起きる厄介な問題をJavaScriptを使用せずに、解決するテクニック`
https://coliss.com/articles/build-websites/operation/css/css-flexbox-holy-albatross.html


##

