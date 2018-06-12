import merge from 'lodash/merge';
import { RECEIVE_GAMES, RECEIVE_GAME } from '../actions/game_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAMES:
      return merge({}, state, action.games);
    case RECEIVE_GAME:
      return merge({}, state, {[action.game.id]: action.game});
    default:
      return state;
  }
};

export default gamesReducer;
