export const fetchSearchGames = (search) => (
  $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: { search }
  })
);
