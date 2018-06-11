class Review < ApplicationRecord
  validates :user_id, :game_id, :body, :rating, presence: true
  validates :user_id, uniqueness: { scope: :game_id, message: "You've already reviewed this game." }
  validates :rating, inclusion: {in: 0..5 }

  belongs_to :user 
  belongs_to :game
end
