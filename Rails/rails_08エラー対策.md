
# エラー対策


## rails s　起動時

### master.keyを再作成した

不正な config/master.key が原因でRailsの起動に失敗するケースとその対処方法
https://qiita.com/jnchito/items/a73bc2838bfab5240675

```
encrypted_file.rb:106:in `binread': Permission denied @ rb_sysopen - [path]/config/master.key (Errno::EACCES)
```

localはmaster.keyのファイル名を_master.keyに変更したら起動できた


## bundle install　時

### mysql2 (0.5.3) がインストールできない

`brew info openssl` で出てきた `LDFLAGS` と `CPPFLAGS` のパスで  
`bundle config` する。

```
bundle config --local build.mysql2 "--with-cppflags=-I/usr/local/opt/openssl@1.1/include"
bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl@1.1/lib"
```

をしてから

```
bundle install
```



