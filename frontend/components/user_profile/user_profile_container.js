import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchGames } from '../../actions/game_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;

  return {
    user: state.entities.users[userId],
    games: Object.values(state.entities.games),
    userId
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchGames: () => dispatch(fetchGames())
  };
};

export default connect(msp, mdp)(UserProfile);