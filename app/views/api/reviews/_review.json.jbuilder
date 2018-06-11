json.set! review.id do
  json.extract! review, :id, :user_id, :game_id, :body, :rating, :created_at
end
