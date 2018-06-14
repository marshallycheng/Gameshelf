class AddPurchaseLink < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :purchase_link, :string
  end
end
