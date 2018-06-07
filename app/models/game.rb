class Game < ApplicationRecord
  validates :title, :image_url, presence: true
  validates :title, uniqueness: true
end
