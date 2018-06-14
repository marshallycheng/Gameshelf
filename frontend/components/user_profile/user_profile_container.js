import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchGames } from '../../actions/game_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectFavoritedGames } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  return {
    user,
    games: selectFavoritedGames(state, user),
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