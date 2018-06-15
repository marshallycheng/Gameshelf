import merge from 'lodash/merge';
import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const favoritesReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return merge({}, state, action.favorites);
    case RECEIVE_FAVORITE:
      return merge({}, state, {[action.favorite.id]: action.favorite} );
    case REMOVE_FAVORITE:
      const oldState = merge({}, state);
      const favoriteId = action.favorite.id;
      delete oldState[favoriteId];
      return oldState;
    default:
      return state;
  }
};

export default favoritesReducer;
