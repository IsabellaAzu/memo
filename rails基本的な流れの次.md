
# rails基本的な流れの次のステップ

## アプリを作ってみよう

### モデルの設計
### モデルのテスト
### リレーショナル



### よくやること

#### projectと紐付けを忘れた場合（Modelの関連付けも手動になる）
```
# TaskはProjectに所属する
$ rails g migration AddProjectToTask project:references
```

