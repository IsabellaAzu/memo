# topics

## Q: CoreOS shows failed units at login, what does it mean?
> sshでcoreOSにログインした時に「Failed Units」が5つある。どうすればいい？  
(参考)[https://www.digitalocean.com/community/questions/coreos-shows-failed-units-at-login-what-does-it-mean]  
```
【状況】
$ ssh core@xxx.xxx.xxx.xxx
Last login: Fri Jan 8 14:36:34 2016 from 101.176.57.46
CoreOS stable (835.9.0)
Failed Units: 5
sshd@16493-188.166.209.155:22-222.186.15.79:2573.service
sshd@1756-188.166.209.155:22-151.25.198.11:59295.service
sshd@1766-188.166.209.155:22-151.25.198.11:55062.service
sshd@23027-188.166.209.155:22-111.74.239.61:2490.service
sshd@23028-188.166.209.155:22-111.74.239.61:2039.service
```

A: 
```
# より多くの情報を見るには
$ systemctl --failed

```
参考:(はじめてのsystemdサービス管理ガイド)[https://dev.classmethod.jp/cloud/aws/service-control-use-systemd/]　(loadされたけど起動に失敗したsystemdのserviceをリセットする)[https://mov.vc/posts/12]
　  
- - - 
　  
- - - 
　  
- - - 
　  





