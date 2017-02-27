
# 各種cloud-config.yml

## 参考
http://qiita.com/ma2shita/items/e069b6019688d8e848f5  
https://github.com/miyasakura/my-docker-sample/blob/master/server_scripts/cloud-config.yml  

<a href="#anc1">(1)coreosの本ストール前のネットワーク設定用</a>  
<a href="#anc2">(2)coreosの本ストール後、sshdを自動起動する（SSH接続するため）</a>  
<a href="#anc3">(3)各種設定</a>  

<a id="anc1" name="anc1"></a>  
## (1)coreosの本ストール前のネットワーク設定用
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
    passwd: xxx # $ openssl passwd -1 "xxx"
    groups:
      - sudo
```
　  
   
<a id="anc2" name="anc2"></a>  
## (2)coreosの本ストール後、sshdを自動起動する（SSH接続するため）
```
#cloud-config

hostname: core

ssh-authorized-keys:
  - ssh-rsa AAAA... core@localhost

users:
  - name: xxx
    passwd: xxx # $ openssl passwd -1の出力結果
    groups:
      - sudo
    ssh-authorized-keys:
      - ssh-rsa AAAA... core@localhost

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
  - path: /etc/ssh/sshd_config
    permissions: 0600
    owner: root:root
    content: |
      # Use most defaults for sshd configuration.
      UsePrivilegeSeparation sandbox
      Subsystem sftp internal-sftp
      ClientAliveInterval 300
      PermitRootLogin no
      AllowUsers core
      PasswordAuthentication no
      ChallengeResponseAuthentication no

coreos:
  units:
  #- name: sshd.socket
  #  command: restart
  #  runtime: true
  #  content: |
  #    [Socket]
  #    # ListenStream=2222
  #    FreeBind=true
  #    Accept=yes
  - name: "sshd.service"
    command: "start"
```
## cloud-configに再設定、　再読み込み、user_dataにコピー
```
$ sudo coreos-cloudinit -from-file=./cloud-config.yml
$ sudo cp cloud-config.yml /var/lib/coreos-install/user_data
$ sudo reboot
```


<a id="anc3" name="anc3"></a>  
## (3)各種設定
```
#cloud-config

hostname: core

ssh-authorized-keys:
  - ssh-rsa AAAA... core@localhost

users:
  - name: xxx
    passwd: xxx # $ openssl passwd -1の出力結果
    groups:
      - sudo
    ssh-authorized-keys:
      - ssh-rsa AAAA... core@localhost

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
  - path: /etc/ssh/sshd_config
    permissions: 0600
    owner: root:root
    content: |
      # Use most defaults for sshd configuration.
      UsePrivilegeSeparation sandbox
      Subsystem sftp internal-sftp
      PermitRootLogin no
      AllowUsers core
      PasswordAuthentication no
      ChallengeResponseAuthentication no

coreos:
  units:
  #- name: sshd.socket
  #  command: restart
  #  runtime: true
  #  content: |
  #    [Socket]
  #    # ListenStream=2222
  #    FreeBind=true
  #    Accept=yes
  - name: docker.service
    command: start
  - name: "sshd.service"
    command: "start"
```
## cloud-configに再設定、　再読み込み、user_dataにコピー
```
$ sudo coreos-cloudinit -from-file=./cloud-config.yml
$ sudo cp cloud-config.yml /var/lib/coreos-install/user_data
$ sudo reboot
```






