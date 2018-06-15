export const createFavorite = favorite => (
  $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: { favorite }
  })
);

export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites'
  })
);

export const deleteFavorite = favoriteId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${favoriteId}`
  })
);