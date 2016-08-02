# 親子関連

　  
　  
- - - 
## ■基本
###
　  
　  
- - - 
## ■親子孫関連
###
　  
　  
- - - 
## ■polymorphic関連
###

polymorphic指定の追加
polymorphic指定の基本的な流れ  
http://ruby-rails.hatenadiary.com/entry/20141207/1417926599  


polymorphicのカラム追加（子、孫などにxxxable_idとxxxable_typeの追加）
```
$ bundle exec rails g migration AddImageableToProducts imageable:references{polymorphic}
```
[参考：DRYING UP RAILS CONTROLLERS: POLYMORPHIC AND SUPER CONTROLLERS](http://pathfindersoftware.com/2008/07/drying-up-rails-controllers-polymorphic-and-super-controllers/)
　  

### 親子孫のpolymorphic
[参考：親子孫のmodelの設定](http://qiita.com/mah_lab/items/14f906b6236d834bef96)  
　　　　　 親  
子１　　　　　　　　子２  
　　　　　 孫  
```ruby
# 【例】
# user.rb（親）
class User < ActiveRecord::Base
  has_many :subscriptions, through: :study_participants, source: :study, source_type: 'Subscription'
  has_many :adoptions, through: :study_participants, source: :study, source_type: 'Adoption'
  has_many :study_participants
end
# subscription.rb（子１）
class Subscription < ActiveRecord::Base
  has_many :study_participants, as: :study
end
# adoption.rb（子２）
class Adoption < ActiveRecord::Base
  has_many :study_participants, as: :study
end
# study_participant.rb（孫）
class StudyParticipant < ActiveRecord::Base
  belongs_to :study, polymorphic: true
end
```



　  
　  
http://rails-bestpractices.com/posts/2010/08/18/use-sti-and-polymorphic-model-for-multiple-uploads/  
http://qiita.com/kasei-san/items/c6ded7c45ff5ce680e9b  
http://qiita.com/mah_lab/items/14f906b6236d834bef96  
http://stackoverflow.com/questions/19043300/rails-best-practice-to-use-polymorphic-association  
