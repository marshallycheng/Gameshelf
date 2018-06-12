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
