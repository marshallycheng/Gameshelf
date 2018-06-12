import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { selectGameReviews } from '../../../reducers/selectors';
import GameReviews from './game_reviews';



const msp = (state, ownProps) => {
  const game = state.entities.games[ownProps.gameId];
  return {
    // should try to clean this up later. need to fix games reducer to append review_id
    reviews: Object.values(state.entities.reviews).filter((review) => (review.game_id === game.id))
  };
};

const mdp = dispatch => {
  return {
  };
};

export default withRouter(connect(msp, mdp)(GameReviews));
