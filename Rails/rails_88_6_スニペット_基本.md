
　  
　  
# スニペット_基本
　  
## link_to
　  
```ruby
ｐａｔｈ
<%= link_to “文字”, "https://" %>
<%= link_to “文字”, root_path %>
attributes
<%= link_to "TOP", root_path, class: "xxx" %>
<%= link_to "TOP", users_path(@user, anchor: "anc"), "class"=>"m_", target: "_blank" %>
削除
<%= link_to "削除", member_path(params[:id]), method: :delete %>
タグ
<%= link_to users_path do %>
  <i class="m_">リンク</i>
<% end %>
```

