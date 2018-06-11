class Game < ApplicationRecord
  validates :title, :image_url, presence: true
  validates :title, uniqueness: true

  has_many :reviews
end
