import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import GameIndex from './game_index';
import { fetchGames } from '../../actions/game_actions';

const mapStateToProps = (state) => {
  return {
    games: Object.values(state.entities.games)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
