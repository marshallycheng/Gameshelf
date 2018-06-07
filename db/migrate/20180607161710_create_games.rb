class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :genre
      t.string :image_url, null: false
      t.text :description

      t.timestamps
    end
    add_index :games, :title, unique: true
    add_index :games, :genre
  end
end
