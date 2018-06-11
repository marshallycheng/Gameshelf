json.game do
  json.partial! '/api/games/game', game: @game
end

json.reviews do
  @game.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end
