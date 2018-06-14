export const selectGameReviews = (state, game) => {
  if (game && game.review_ids) {
    return game.review_ids.map(id => state.entities.reviews[id]);
  } else {
    return [];
  } 
};

export const selectReviewer = (state, review) => {
  return review ? state.entities.users[review.user_id] : null;
};

export const selectFavoritedGames = (state, user) => {
  if (user && user.favorited_game_ids) {
    return user.favorited_game_ids.map(id => state.entities.games[id]);
  } else {
    return [];
  }
};
