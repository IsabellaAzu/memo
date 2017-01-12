# VPSの設定

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
　  
### [CoreOS toolbox]
CoreOS でも tcpdump したい (CoreOS toolbox)  
http://qiita.com/dtan4/items/50fd75b56660ed8aa158  
　  
### [クラスタリング]
CoreOS + etcd + fleetによるクラスタリング事始め（さくらのナレッジ）  
http://knowledge.sakura.ad.jp/tech/2519/  
CoreOSでクラスタ構成を組む(etcd2 + fleet)  
http://qiita.com/umchifre/items/00580b35b96e2bedb5df  
CoreOSのクラスタ環境（CoreOS+etcd+fleet）でdocker-composeを使う方法  
http://qiita.com/kanga/items/a7714f73aced9f872427  
　  
### [nginx]
CoreOSでRocketを使ってnginxを動かす  
http://qiita.com/yakumomo/items/4ee2d0f13f24b8f024b6  
　  
### [コンテナ]
CoreOSでDockerインストールしてRemote API使用してコンテナを操作してみる  
http://qiita.com/makotoomori@github/items/de0e39c5d67e5c69a741  
Dockerを使って1サーバで複数Webサービスを運用するためのマイベストプラクティス  
http://qiita.com/miyasakura_/items/5cd3b05aa9c5e4f3f4be  
さくらのVPSにCoreOSをインストールしてDocker専用機にする  
http://qiita.com/yujiod/items/dc154120c4df2e938111  
「Docker」と新コンテナランタイム「rkt」をサクっと比較してみる  
http://qiita.com/datake914/items/a61a1aead43ffa058da9  
　  
### [systemd]
- CoreOSではサービスの管理はこれを使用する(Docker再起動したりなど)
- 起動時の処理などを管理してくれるもの。
- chkconfig/serviceと大体同じ役割と思っておけばよさそう。
- Fedora系で採用されているようだ

AWS+CoreOS+Dockerでコンテナの自動起動  
http://qiita.com/aki/items/979b25ff555eb7ab96fc  

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
