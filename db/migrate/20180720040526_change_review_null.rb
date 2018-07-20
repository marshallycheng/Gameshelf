class ChangeReviewNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :body, true
  end
end
