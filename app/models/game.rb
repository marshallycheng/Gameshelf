class Game < ApplicationRecord
  validates :title, :image_url, presence: true
  validates :title, uniqueness: true

  has_many :reviews
  has_many :favorites

  has_many :favorited_users,
  through: :favorites,
  source: :user 
  
  def self.search_by_title(query)
    fuzzy_query = "%" + query.downcase.split('').join('%') + "%"
    @games = Game.where("lower(title) LIKE ?", fuzzy_query).limit(10)
  end
end
