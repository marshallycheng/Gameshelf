class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token
      t.string :image_url

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token
  end
end
