
# rails_スニペット
Project管理というアプリがあったとしてよく使うCRUDのスニペットをまとめる

## Mode
```
$ rails g model Project title
```
```
# 入力必須
class Project < ActiveRecord::Base
  validates :title, presence: {message: "入力必須項目です"},length: {minimum: 3, message: "短過ぎ"}
end
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
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new # newする
  end

  def create
    @project = Project.new(project_params)
    if @project.save # バリデーション
      redirect_to projects_path
    else
      render 'new'
    end
end

  private

    # セキュリティ
    def project_params
      # フィルタリング：projectで渡ってきた中で、title属性だけ許可します
      params[:project].permit(:title)
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

```
# new.html.erb
  <%= form_for @project do |f| %>
    <p><%= f.label :title %>　<%= f.text_field :title %></p>
    <% if @project.errors.any? %>
      <p><%= @project.errors.inspect %></p>
    <% end %>
    <p><%= f.submit %></p>
  <% end %>
```




