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
(3)「shift + ;」で「:」と入力できる  
　  
## 設定index
<a href="./1.OSインストール.md">1.OSインストール</a>  
<a href="./2.OS設定.md">2.OS設定</a>  
<a href="./3.Units設定.md">3.Units設定</a>  
<a href="./4.コンテナにいれるアプリケーション.md">4.コンテナにいれるアプリケーション</a>  
　  

- - - 
## 参考情報

### [初期設定]
初期アカウントがパスワード無しでsudo出来るのが気持ち悪いという貴方へ  
http://blog.serverworks.co.jp/tech/2013/08/16/sudo-without-password-makes-me-feel-disgusting/  
基礎からのネットワーク&サーバ構築　まとめ  
http://qiita.com/chrischris0801/items/7987982bb1d895493d36  
　  
   
### [MySQL]
Dockerの公式MySQLイメージの使い方を徹底的に解説するよ(データ投入とか)  
http://dqn.sakusakutto.jp/2015/10/docker_mysqld_tutorial.html  
Docker でデータのポータビリティをあげ永続化しよう  
http://qiita.com/mopemope/items/b05ff7f603a5ad74bf55  
Dockerで予め欲しいデータをつっこんだMySQLをこしらえる(Mac用)  
http://ihcomega.hatenadiary.com/entry/2016/06/02/223221  
　  
### [クラスタリング]
CoreOS + etcd + fleetによるクラスタリング事始め（さくらのナレッジ）  
http://knowledge.sakura.ad.jp/tech/2519/  
CoreOSでクラスタ構成を組む(etcd2 + fleet)  
http://qiita.com/umchifre/items/00580b35b96e2bedb5df  
CoreOSのクラスタ環境（CoreOS+etcd+fleet）でdocker-composeを使う方法  
http://qiita.com/kanga/items/a7714f73aced9f872427  
Docker CoreOS Cluster  
https://hondou.homedns.org/pukiwiki/pukiwiki.php?Docker%2520CoreOS%2520Cluster  
　  
　  
### [コンテナ]
Dockerを使って1サーバで複数Webサービスを運用するためのマイベストプラクティス(cloud-config.yml、Dockerfileで設定できる項目を確認)  
http://qiita.com/miyasakura_/items/5cd3b05aa9c5e4f3f4be  
コンテナの自動起動  
http://qiita.com/aki/items/979b25ff555eb7ab96fc  
　  
### [systemd]
- CoreOSではサービスの管理はこれを使用する(Docker再起動したりなど)
- 起動時の処理などを管理してくれるもの。
- chkconfig/serviceと大体同じ役割と思っておけばよさそう。
- Fedora系で採用されているようだ

「Systemd」を理解する ーシステム管理編ー  
http://equj65.net/tech/systemd-manage/　　
　  
### [Vulcand]
Docker コンテナをブルーグリーンデプロイ  

