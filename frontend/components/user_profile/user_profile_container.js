import { connect } from 'react-redux';
import UserProfile from './user_profile';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(UserProfile);