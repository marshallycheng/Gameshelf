class AddColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :rating, :string
    add_column :games, :genres, :text, array: true, default: []
    add_column :games, :release_date, :string
  end
end
