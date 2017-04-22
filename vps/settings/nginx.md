
#nginx各種設定

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

```
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
              return 404 "<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\n<html><head>\n<title>404 Not Found</title>\n</
              internal;
        }
    }
}
```



