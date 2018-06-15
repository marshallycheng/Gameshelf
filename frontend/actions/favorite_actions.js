import * as FavoriteAPIUtil from '../util/favorite_api_util';
import { receiveGame } from './game_actions';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'; 

const receiveFavorite = favorite => {
  return {
    type: RECEIVE_FAVORITE,
    favorite
  };
};

const receiveFavorites = favorites => {
  return {
    type: RECEIVE_FAVORITES,
    favorites
  };
};

const removeFavorite = favorite => {
  return {
    type: REMOVE_FAVORITE,
    favorite
  };
};

export const createFavorite = favorite => dispatch => {
  FavoriteAPIUtil.createFavorite(favorite)
  .then(serverFavorite => {
    return dispatch(receiveFavorite(serverFavorite));
  });
};

export const deleteFavorite = favoriteId => dispatch => {
  FavoriteAPIUtil.deleteFavorite(favoriteId)
  .then(serverFavorite => {
    return dispatch(removeFavorite(serverFavorite));
  });
};

export const fetchFavorites = () => dispatch => {
  FavoriteAPIUtil.fetchFavorites()
  .then(serverFavorites => {
    return dispatch(receiveFavorites(serverFavorites));
  });
};

