import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import GameShow from './game_show';
import { fetchGame } from '../../actions/game_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => {
  const gameId = ownProps.match.params.gameId;
  const currentUserId = state.session.id;
  return {
    // should try to clean this up later. need to fix games reducer to append review_id
    reviews: Object.values(state.entities.reviews).filter((review) => (review.game_id === parseInt(gameId))),
    game: state.entities.games[gameId],
    gameId,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id)),
    createFavorite: (favorite => dispatch(createFavorite(favorite))),
    deleteFavorite: (gameId) => dispatch(deleteFavorite(gameId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);
