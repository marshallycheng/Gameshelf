import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/game_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME:
      return merge({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
