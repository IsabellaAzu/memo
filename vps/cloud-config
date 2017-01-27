
# サンプル
```
#cloud-config

hostname: core

ssh-authorized-keys:
  - ssh-rsa AAAxxx...

write_files:
  - path: /etc/systemd/network/static.network
    permissions: 0644
    content: |
        [Match]
        Name=eth0
        [Network]
        Address=xxx.xxx.xxx.xxx/23
        Gateway=xxx.xxx.xxx.xxx
        DNS=xxx.xxx.xxx.xxx
        DNS=xxx.xxx.xxx.xxx
users:
  - name: xxx
    passwd: xxx # $ openssl passwd -1の出力結果
    groups:
      - sudo
      - docker
```

# 参考
http://qiita.com/ma2shita/items/e069b6019688d8e848f5  
https://github.com/miyasakura/my-docker-sample/blob/master/server_scripts/cloud-config.yml  




