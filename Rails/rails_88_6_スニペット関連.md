
# スニペット
　  
## error処理
　  
### Railsのジェネレータで不要なerror用divを作らせない
```ruby
# config/application.rb
config.action_view.field_error_proc = Proc.new do |html_tag, instance| 
  html_tag
end
```
　  
### flashメッセージ
```ruby
# controller
redirect_to action:'index', notice: 'ログイン成功!!'
redirect_to action:'index', alert:  'ログインできません...'
redirect_to action:'index', flash: {xxx: 'ログインに成功しました!!'}
# view
<% if flash[:notice] %>
  <%= flash[:notice] %>
<% end %>
<% if flash[:alert] %>
  <%= flash[:alert] %>
<% end %>
<% if flash[:xxx] %>
  <%= flash[:xxx] %>
<% end %>
```

### Formに入力した値を維持したままリロードする方法
http://qiita.com/seiya1121/items/cf6b44fae757f6300ada




