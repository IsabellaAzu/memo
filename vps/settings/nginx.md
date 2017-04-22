
#nginx各種設定

> <a href="#anc1">IPアドレス直打ちのアクセスを弾きたい</a><br>
> <a href="#anc2">アクセス制限</a><br>
> <a href="#anc3"></a><br>
> <a href="#anc4"></a><br>
> <a href="#anc5"></a><br>


<a id="anc1"></a>
## IPアドレス直打ちのアクセスを弾きたい

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



<a id="anc2"></a>
## アクセス制限









