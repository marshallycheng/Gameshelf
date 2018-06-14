import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchGames } from '../../actions/game_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    games: Object.values(state.entities.games)
  };
};

const mdp = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames())
  };
};

export default connect(msp, mdp)(UserProfile);