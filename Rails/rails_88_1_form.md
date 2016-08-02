# form関連


## form_for、form_tag

### form_for：モデルに基づいたフォームを作成
```
<% form_for(@article) do |f| %>
  <div><%= f.text_field :title, class: "hogehoge" %></div>
  <%= f.submit %>
<% end %>
```

### form_tag：モデルに基づかないフォームを作成
```ruby
<% form_tag(:controller => article, :action => create) %>
  <div><%= text_field :title, class: "hogehoge" %></div>
  <%= submit_tag "作成" %>
<% end %>
```

