class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.timestamps
    end
    add_index :favorites, [:user_id, :game_id], unique: true
  end
end
