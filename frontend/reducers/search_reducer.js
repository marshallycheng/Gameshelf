import merge from 'lodash/merge';
import { RECEIVE_SEARCH_GAMES, CLEAR_SEARCH_GAMES } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_GAMES:
      return action.searchResults;
    case CLEAR_SEARCH_GAMES:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
