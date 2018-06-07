@games.each do |game|
  json.set! game.id do
    json.partial! 'game', game: game
  end
end
