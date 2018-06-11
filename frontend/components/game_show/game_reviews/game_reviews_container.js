import { connect } from 'react-redux';
import React from 'react';
import { selectGameReviews } from '../../../reducers/selectors';
import GameReviews from './game_reviews';



const msp = (state, ownProps) => {
  const game = state.entities.games[ownProps.gameId];

  return {
    reviews: selectGameReviews(state, game)
  };
};

const mdp = dispatch => {
  return {
  };
};

export default (connect(msp, mdp)(GameReviews));
