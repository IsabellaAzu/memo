# VPSの設定

## ConoHaのVPSにCoreOSをインストール(月額450円/100GB:超安いけど使い方がREST API)
https://www.conoha.jp/guide/objectstorage.php  
conoHaのVPSにCoreOSをインストール  
http://qiita.com/miyasakura_/items/4d81dc5fe6f9de0f0dd5  

## さくらVPSでcoreOSベースの設定手順   
（さくらVPSのcentOSの設定の場合https://goo.gl/BOV6LH）  
さくらVPSのコンソールのvimコマンド：「sudo vim ファイル名」で開いておく  
　「:q!」　→　「control + z」  
　「:wq」　→　「shift + z」を２回(大文字のZを2回)  

## キーボードの設定
さくらVPSのコンソールのキーボードは厄介。  
(1)コントロールパネル内の「設定」 → 「サーバ情報編集」 → 「VNCコンソールキー配列」 → 「ja」  
(2)コンソールのshutdownコマンド、もしくはコントロールパネルの強制停止ボタン  
　　→ サーバを停止 → コントロールパネルの起動で設定を反映  
(3)「shift + ;」で「:wq!」など入力できるようになる  
　  
## 初期設定
<a href="./1.OSインストール.md">1.OSインストール</a>  
<a href="./2.セキュリティ設定.md">2.セキュリティ設定</a>  
<a href="./3.一般ユーザー追加.md">3.一般ユーザー追加</a>  
<a href="./4.SSH接続の設定変更.md">4.SSH接続の設定変更</a>  
<a href="./5.ファイアウォールの設定.md">5.ファイアウォールの設定</a>  
　  

- - - 
## 参考(あとで移動)  

### [初期設定]
基礎からのネットワーク&サーバ構築　まとめ  
http://qiita.com/chrischris0801/items/7987982bb1d895493d36  
ConoHaのVPSで複数台のローカルネットワークをかんたん構築  
http://qiita.com/tadatti/items/02dc3fec8d6ea49d50ce  
ー  
さくらVPS　初期設定　（ユーザー作って、セキュリティ設定するまで）  
http://qiita.com/aild_arch_bfmv/items/99dd58fc6be84f87a075  
CoreOSをインストールしてから接続するまで  
http://qiita.com/chroju/items/081db52cf046e21eed86  
最小限の労力でCoreOS on さくらVPSにSSH接続する  
http://geek.3101.me/server/setup-coreos-on-sakuravps/  
【CoreOS】cloud-config解説〜インストール  
http://qiita.com/xshsaku/items/1ba3f930ff80bef685a6  
http://qiita.com/xshsaku/items/c1d0c093f5d5b6589621  
さくらのVPSにCoreOSをインストールしてDocker専用機にする  
http://qiita.com/yujiod/items/dc154120c4df2e938111  
cloud-configのシンタックス  
https://github.com/coreos/coreos-cloudinit/blob/master/Documentation/cloud-config.md  
CoreOS用のcloud-config.ymlを晒しておく  
http://qiita.com/ma2shita/items/e069b6019688d8e848f5  
さくらVPSでdocker環境  
https://www.machu.jp/diary/20150516.html  
Vagrant・CoreOS・Dockerでインフラ素人が自宅サーバを立てた話  
http://qiita.com/y_hokkey/items/3dd0d8f20f9daadbbf0b  
CoreOS用cloud-config.ymlメモ2  
http://qiita.com/tukiyo3/items/615afb0509bf76f4f277  
実例で学ぶ CoreOS 超入門  
https://blog.f99aq8ove.net/2015/07/24/coreos-introduction.html  
CoreOS 入門  
http://aeas44.github.io/2016/03/08/coreos-%E5%85%A5%E9%96%80/  
　  
### [CoreOS toolbox]
CoreOS でも tcpdump したい (CoreOS toolbox)  
http://qiita.com/dtan4/items/50fd75b56660ed8aa158  
　  
### [MySQL]
Dockerの公式MySQLイメージの使い方を徹底的に解説するよ(データ投入とか)  
http://dqn.sakusakutto.jp/2015/10/docker_mysqld_tutorial.html  
Docker でデータのポータビリティをあげ永続化しよう  
http://qiita.com/mopemope/items/b05ff7f603a5ad74bf55  
　  
### [クラスタリング]
CoreOS + etcd + fleetによるクラスタリング事始め（さくらのナレッジ）  
http://knowledge.sakura.ad.jp/tech/2519/  
CoreOSでクラスタ構成を組む(etcd2 + fleet)  
http://qiita.com/umchifre/items/00580b35b96e2bedb5df  
CoreOSのクラスタ環境（CoreOS+etcd+fleet）でdocker-composeを使う方法  
http://qiita.com/kanga/items/a7714f73aced9f872427  
TerraformでCoreOSクラスタを構築する  
http://deeeet.com/writing/2015/01/07/terraform-coreos/  
Docker CoreOS Cluster  
https://hondou.homedns.org/pukiwiki/pukiwiki.php?Docker%2520CoreOS%2520Cluster  

### [nginx]
CoreOSでRocketを使ってnginxを動かす  
http://qiita.com/yakumomo/items/4ee2d0f13f24b8f024b6  
　  
### [コンテナ]
CoreOSでDockerインストールしてRemote API使用してコンテナを操作してみる  
http://qiita.com/makotoomori@github/items/de0e39c5d67e5c69a741  
Dockerを使って1サーバで複数Webサービスを運用するためのマイベストプラクティス(cloud-config.yml、Dockerfileで設定できる項目を確認)  
http://qiita.com/miyasakura_/items/5cd3b05aa9c5e4f3f4be  
さくらのVPSにCoreOSをインストールしてDocker専用機にする  
http://qiita.com/yujiod/items/dc154120c4df2e938111  
「Docker」と新コンテナランタイム「rkt」をサクっと比較してみる  
http://qiita.com/datake914/items/a61a1aead43ffa058da9  
コンテナの自動起動  
http://qiita.com/aki/items/979b25ff555eb7ab96fc  
macにDockerを入れてNginxでwebサーバーを立てるまで  
https://www.youtube.com/watch?v=Ts3O8s-z-D4  
Dockerではじめるコンテナ型仮想化環境  
http://www.devlog.atlas.jp/2015/01/29/450  
　  
### [systemd]
- CoreOSではサービスの管理はこれを使用する(Docker再起動したりなど)
- 起動時の処理などを管理してくれるもの。
- chkconfig/serviceと大体同じ役割と思っておけばよさそう。
- Fedora系で採用されているようだ

AWS+CoreOS+Dockerでコンテナの自動起動  
http://qiita.com/aki/items/979b25ff555eb7ab96fc  

### [rails]
さくらVPSにまっさらな状態からRuby2.1.0+Rails4.2.1+nginx+unicorn+capistranoの環境を構築  
http://qiita.com/noppefoxwolf/items/e1e5a5ab221f8224890d  


### 検索結果 : "CoreOS" 一覧
http://knowledge.sakura.ad.jp/?s=CoreOS  

### これ、やれば良かった？？
(ちょっと自動で)さくらのVPSにCoreOSを入れるメモ  
http://qiita.com/koki_cheese/items/6f773a830a4d726a1fac  
さくらのVPSにCoreOSをインストールしてDocker専用機にする  
http://qiita.com/yujiod/items/dc154120c4df2e938111  
インストール時にネットワーク設定とSSH公開鍵を設定するため、先ほどの cloud-config をアップロードします。以下はscpでコピーする例です。  
```
# これか！？
local) $ scp cloud-config core@<IPアドレス>:~/
```
CoreOSをズボラなcloud-configでインストールしてみる(インストールする場所かな)  
http://qiita.com/tubone/items/5995581b8e27c2277ba8  

### [備忘録]
cloud-config作成　→　SCPでアップロード　→　cloud-configを元にcoreOSをインストール、再起動　の流れか？
