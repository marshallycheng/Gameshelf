export const fetchGames = () => (
  $.ajax({
    method: 'GET',
    url: '/api/games'
  })
);

export const fetchGame = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/games/${id}`
  })
);
