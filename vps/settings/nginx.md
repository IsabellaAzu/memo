
# nginx各種設定
　  
   
公式：https://www.nginx.com/resources/wiki/<br>
基礎：http://dev.classmethod.jp/server-side/server/nginx-ip-access-control/<br>
　  
   
```
# /etc/nginx/nginx.conf ベーシックな設定
server {
    listen 80;
    server_name mysite.com;
    return 301 https://$server_name$request_uri; #https にリダイレクト
}
server {
    listen 443 ssl;
    server_name mysite.com;
}
```
　  

## "GET /favicon.ico HTTP/1.1"
https://serverfault.com/questions/654622/confused-about-what-im-seeing-in-my-apache-access-log-think-i-might-have-been


　  
## IPアドレス直打ちのアクセスを弾きたい
http://beniyama.hatenablog.jp/entry/2015/04/05/100000
```
http {
    server {
        if ($host != "xxx.com") {
              return 403;
        }
    }
}
```
　  
　  
　  
　  
## nginxをApacheに見せかける

```
http {
    server {
        error_page              403 404 500 502 503 504 = /apache_error.html;
        location = /apache_error.html {
              return 404 "<!DOCTYPE HTML><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL $request_uri was not found on this server.</p><hr><address>Apache/2.2.31 Server at $host Port $server_port</address></body></html>";
              internal;
        }
    }
}
```


## nginxのServerバージョン番号を出さない
```
http {
    server_tokens off;
}
```


##  海外からのサーバーアタックがあった時の暫定対応
http://qiita.com/snoguchi/items/a4468a53da330d5edeeb  
https://inaba-serverdesign.jp/blog/20140616/nginx_deny_ipaddress.html  


　  
## Nginxで「www」有り、無しのURLを統一する方法
https://keikenchi.com/nginx-www-url

```
http {
    server {
        listen       80;
        server_name  www.xxx.com;
        return       301 http://xxx.com$request_uri;
    }
    server {
        listen                  80 default_server;
        root                    /www;
        index                   index.html index.htm;
        server_name             xxx.com;
    }
}
```

## Nginxによるリバースプロキシの設定方法  
http://qiita.com/schwarz471/items/9b44adfbec006eab60b0  

　  
　  
HTTPS上で複数のWebサイトの公開を実現するには何種類かの方法があり、<br>
nginxというWebサーバで、TLSの拡張仕様であるSNI(Server Name Indication)を使って複数のHTTPSサイトを公開する例<br>


