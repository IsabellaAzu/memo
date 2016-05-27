
# rails_スニペット
Project管理というアプリがあったとしてよく使うCRUDのスニペットをまとめる

## Mode
```
rails g model Project title
```

## Controller

```
rails g controller Projects --no-helper --no-assets
```
```
# /config/routes.rb
resources :projects
```
```
  def index
    @projects = Project.all
  end
  
  def show
    @project = Project.find(params[:id]) # Projectの中から１件だけ情報を持ってくる
  end

  def new
    @project = Project.new # newする
  end


```


## View
```
# index.html.erb
<ul>
  <% @projects.each do |project| %>
  <li><%= project.title %></li>
  <li><%= link_to project.title, project_path(project.id) %></li>
  <% end %>
</ul>
<p><%= link_to "新規プロジェクト作成", new_project_path %></p>
```

```
# show.html.erb
  <%= @project.title %>
```





