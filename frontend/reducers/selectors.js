export const selectGameReviews = (state, game) => {
  return game ? game.review_ids.map(id => state.entities.reviews[id]) : [];
};

export const selectReviewer = (state, review) => {
  return review ? state.entities.users[review.user_id] : null;
};
