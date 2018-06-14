import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_GAME } from '../actions/game_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser});
    case RECEIVE_GAME:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state), { [action.user.id]: action.user};
    default:
      return state;
  }
};

export default usersReducer;
