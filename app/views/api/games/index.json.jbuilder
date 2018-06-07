@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :title, :image_url
  end
end
