import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEW,
  CLEAR_ERRORS,
  REMOVE_REVIEW
} from '../actions/review_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_REVIEW:
      return [];
    case REMOVE_REVIEW:
      return [];
    default:
      return state;
  }
};
