
# VPSの設定

```
今後はUbuntsu
```
https://gihyo.jp/admin/clip/01/linux_dt/202001/29  
https://thinkit.co.jp/story/2015/03/06/5672  
　↓  
https://knowledge.sakura.ad.jp/4217/  
https://www.projectatomic.io/  
https://news.mynavi.jp/article/20191001-902542/  
　  
202002  
```
1	Ubuntu	38.7%	38.7%
2	Debian	18.7%	19.4%
3	CentOS	16.8%	16.9%
4	Red Hat	1.9%	1.9%
```
　  
201909  
```
1	Ubuntu	37.4%	37.5%
2	Debian	21.4%	21.4%
3	CentOS	16.9%	17.0%
4	Red Hat	2.0%	2.0%
```
　  
　  
coreOSは202002以降使わない

　  
　  
　  
## さくらVPSでcoreOSベースの設定手順   
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
CoreOS will remove fleet from Container Linux on February 1, 2018 [fleet:x]  
https://coreos.com/blog/migrating-from-fleet-to-kubernetes.html  
※ fleet : コンテナを動かすスケジューリングとコンテナの管理(2018/02/1以降CoreOSから外れる)  
Docker CoreOS Cluster  
https://hondou.homedns.org/pukiwiki/pukiwiki.php?Docker%2520CoreOS%2520Cluster  
　  　  
### [systemd]
- CoreOSではサービスの管理はこれを使用する(Docker再起動したりなど)
- 起動時の処理などを管理してくれるもの。
- chkconfig/serviceと大体同じ役割と思っておけばよさそう。
- Fedora系で採用されているようだ

「Systemd」を理解する ーシステム管理編ー  
http://equj65.net/tech/systemd-manage/　　
　  
