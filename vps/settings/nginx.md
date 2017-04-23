
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
　  
> ・<a href="#anc1">IPアドレス直打ちのアクセスを弾きたい</a><br>
> ・<a href="#anc2">アクセス制限</a><br>
> ・<a href="#anc3">nginxをApacheに見せかける</a><br>
> ・<a href="#anc4"></a><br>
> ・<a href="#anc5"></a><br>

　  
<a id="anc1"></a>
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



<a id="anc2"></a>
## アクセス制限




<a id="anc3"></a>
## nginxをApacheに見せかける
```
http {
    server {
        error_page              403 404 500 502 503 504 = /apache_error.html;
        location = /apache_error.html {
              return 404 "<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\n<html><head>\n<title>404 Not Found</title>\n</head><body>\n<h1>Not Found</h1>\n<p>The requested URL $request_uri was not found on this server.</p>\n<hr>\n<address>Apache/2.2.31 Server at $host Port $server_port</address>\n</body></html>";
              internal;
        }
    }
}
```

HTTPS上で複数のWebサイトの公開を実現するには何種類かの方法があり、<br>
nginxというWebサーバで、TLSの拡張仕様であるSNI(Server Name Indication)を使って複数のHTTPSサイトを公開する例<br>


