
まっさらからの環境構築のメモ（201412）  
=====================================
[Githubのマークダウン記法](http://codechord.com/2012/01/readme-markdown/ "") 

【ハード】
----------
*	MacBook (13-inch, Late 2009)
*	プロセッサ 2.26 GHz Intel Core 2 Duo
*	メモリ 4GB 1067 MHz DDR3
*	グラフィクス NVIDIA GeForce 9400M 256 MB

【OS】
----------
*	MacOSX 10.10.1（14B25）

【準備作業】
----------
1. Command Line Tools  
Command Line Tools(OS X 10.10)for Xcode - Xcode 6.1.1   
https://developer.apple.com/からダウンロード  
2. 公開鍵と秘密鍵作成  
  * http://git-scm.com/book/ja/v1/Git-サーバー-SSH-公開鍵の作成  
  * http://monsat.hatenablog.com/entry/generating-ssh-keys-for-github  
ターミナルで、$ ssh-keygen[Enter]、「The key fingerprint is:」が出てくるまで[Enter]  
cat ~/.ssh/id_rsa.pub[Enter]で公開鍵の確認  
$ pbcopy < ~/.ssh/id_rsa.pubでクリップボードにコピーしてGithubのSSHKeysの設定ページに貼り付ける。  
$ ssh -T git@github.comで接続テスト  
3. あああ

