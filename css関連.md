
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

### [2019年10月7日]古いCSSリセットからはもう卒業！モダンブラウザに適した新しいCSSリセット -A Modern CSS Reset

https://coliss.com/articles/build-websites/operation/css/a-modern-css-reset.html 

```
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
```

```
*,
*::before,
*::after {
  box-sizing: border-box;
}
```


## flex

### CSS Flexboxのレイアウトで起きる厄介な問題をJavaScriptを使用せずに、解決するテクニック

https://coliss.com/articles/build-websites/operation/css/css-flexbox-holy-albatross.html





##

