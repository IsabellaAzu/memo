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
<a href="./2.各種設定.md">2.各種設定</a>  
<a href="./3.一般ユーザー追加.md">3.一般ユーザー追加</a>  
<a href="./4.SSH接続の設定変更.md">4.SSH接続の設定変更</a>  
<a href="./5.ファイアウォールの設定.md">5.ファイアウォールの設定</a>  
　  

- - - 
## 参考(あとで移動)  

### [初期設定]
初期アカウントがパスワード無しでsudo出来るのが気持ち悪いという貴方へ  
http://blog.serverworks.co.jp/tech/2013/08/16/sudo-without-password-makes-me-feel-disgusting/  
基礎からのネットワーク&サーバ構築　まとめ  
http://qiita.com/chrischris0801/items/7987982bb1d895493d36  
さくらのVPSにCoreOSをインストールしてDocker専用機にする  
http://qiita.com/yujiod/items/dc154120c4df2e938111  
さくらVPSでdocker環境  
https://www.machu.jp/diary/20150516.html  
Vagrant・CoreOS・Dockerでインフラ素人が自宅サーバを立てた話  
http://qiita.com/y_hokkey/items/3dd0d8f20f9daadbbf0b  
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
Dockerで予め欲しいデータをつっこんだMySQLをこしらえる(Mac用)  
http://ihcomega.hatenadiary.com/entry/2016/06/02/223221  

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
Docker + nginx-proxy でGitLab環境(Let's Encrypt付き)を構築する  
http://qiita.com/ABE_TAKASHI/items/654ef6ed22071c93d6f2  
VirtualHostをお手軽に実現できるDockerコンテナnginx-proxyの起動方法  
https://suin.io/531  
　  
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
macにDockerを入れてNginxでwebサーバーを立てるまで[動画]  
https://www.youtube.com/watch?v=Ts3O8s-z-D4  
Dockerではじめるコンテナ型仮想化環境  
http://www.devlog.atlas.jp/2015/01/29/450  
Scaling Docker #4 - Docker Service Discovery and Load Balancing  
https://www.youtube.com/watch?v=R39VRocQtrQ  
Dockerのbusyboxは永続コンテナと言いながらexport/saveコマンドでは持ち運びできないよ  
http://qiita.com/kumechang/items/fc108b1ec4683f3765d8  
　  
### [systemd]
- CoreOSではサービスの管理はこれを使用する(Docker再起動したりなど)
- 起動時の処理などを管理してくれるもの。
- chkconfig/serviceと大体同じ役割と思っておけばよさそう。
- Fedora系で採用されているようだ
AWS+CoreOS+Dockerでコンテナの自動起動  
http://qiita.com/aki/items/979b25ff555eb7ab96fc  
「Systemd」を理解する ーシステム管理編ー  
http://equj65.net/tech/systemd-manage/  
　  
### [Vulcand]
Vulcand  
https://vulcand.github.io/quickstart.html#quick-start  
Vulcand を使って Docker コンテナをブルーグリーンデプロイする  
http://qiita.com/spesnova/items/34d787f6b46761f775a4  
　  
### [rails]
さくらVPSにまっさらな状態からRuby2.1.0+Rails4.2.1+nginx+unicorn+capistranoの環境を構築  
http://qiita.com/noppefoxwolf/items/e1e5a5ab221f8224890d  
コンテナ仮想化「Docker」技術[動画]  
https://www.youtube.com/watch?v=7xn8_gO0nn8  
　  
### [Let's Encrypt]
nginxを止めずに証明書を更新する  
http://qiita.com/D4prog/items/b00baae1008da2de9b66  
Let's Encryptを使ってSSL通信をする(※Let's EncryptではIPアドレスに対して証明書が発行出来ません)  
http://qiita.com/HitoshiHaga/items/67378de7f97fbaa6d356  
https://letsencrypt.org/getting-started/  
Docker × Nginx × Let'sEncrypt | 俺の考えた最強のサーバー構築方法！
https://hackerslog.net/post/my-tech/server/letsencrypt-on-docker-and-nginx/  
Dockerを使って1サーバで複数Webサービスを運用するためのマイベストプラクティス(上記にも同じページ有り)  
http://qiita.com/miyasakura_/items/5cd3b05aa9c5e4f3f4be  
