class Favorite < ApplicationRecord
  validates :user_id, :game_id, presence: true
  validates :user_id, uniqueness: { scope: :game_id }

  belongs_to :user 
  belongs_to :game
end
