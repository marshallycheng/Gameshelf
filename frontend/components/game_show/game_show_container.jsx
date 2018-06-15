import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import GameShow from './game_show';
import { fetchGame } from '../../actions/game_actions';
import { selectFavorite } from '../../reducers/selectors';
import { createFavorite, deleteFavorite, fetchFavorites } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => {
  const gameId = ownProps.match.params.gameId;
  const currentUserId = state.session.id;
  return {
    // should try to clean this up later. need to fix games reducer to append review_id
    reviews: Object.values(state.entities.reviews).filter((review) => (review.game_id === parseInt(gameId))),
    game: state.entities.games[gameId],
    gameId,
    currentUserId,
    favorite: Object.values(state.entities.favorites).filter(favorite => (favorite.game_id === parseInt(gameId)))[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: id => dispatch(fetchGame(id)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
    fetchFavorites: () => dispatch(fetchFavorites())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);
