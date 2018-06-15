@favorites.each do |favorite|
  json.partial! 'favorite', favorite: favorite
end 