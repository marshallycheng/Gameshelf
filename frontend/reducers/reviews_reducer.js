import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/game_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    case REMOVE_REVIEW:
      const oldState = merge({}, state);
      delete oldState[action.reviewId];
      return oldState;
    default:
      return state;
  }
};

export default reviewsReducer;
