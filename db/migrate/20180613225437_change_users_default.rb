class ChangeUsersDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default(
      :users, 
      :image_url,
      'https://s.pinimg.com/images/user/default_280.png'
    )
  end
end
