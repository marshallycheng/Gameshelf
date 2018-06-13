import { connect } from 'react-redux';
import GameSearch from './game_search';
import { fetchSearchGames, clearSearchGames } from '../../actions/search_actions';

const msp = state => {
  return {
    searchResults: Object.values(state.search)
  };
};

const mdp = dispatch => {
  return {
    fetchSearchGames: (query) => dispatch(fetchSearchGames(query)),
    clearSearchGames: () => dispatch(clearSearchGames())
  };
};

export default connect(msp, mdp)(GameSearch);
