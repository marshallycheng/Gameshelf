json.game do
  json.partial! '/api/games/game', game: @game
end

json.reviews do
  @game.reviews.each do |review|
    json.partial! '/api/reviews/review', review: review
  end
end

json.users do
  @game.reviews.each do |review|
    json.set! review.user_id do
      json.partial! '/api/users/user', user: review.user
    end 
  end
end
