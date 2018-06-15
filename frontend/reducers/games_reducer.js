import merge from 'lodash/merge';
import { RECEIVE_GAMES, RECEIVE_GAME } from '../actions/game_actions';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';
const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_GAMES:
      return merge({}, state, action.games);
    case RECEIVE_GAME:
      return merge({}, state, {[action.game.id]: action.game});
    case RECEIVE_FAVORITE:
      let gameId = action.favorite.game_id;
      let game = oldState[gameId];
      game.favorited_user_ids.push(action.favorite.user_id);
      return oldState;
    case REMOVE_FAVORITE:
      gameId = action.favorite.game_id;
      game = oldState[gameId];
      const deleteIndex = game.favorited_user_ids.indexOf(action.favorite.user_id);
      game.favorited_user_ids.splice(deleteIndex, 1);
      return oldState;
    default:
      return state;
  }
};

export default gamesReducer;
