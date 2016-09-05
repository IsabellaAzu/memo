
# スニペット

## flashメッセージ
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




