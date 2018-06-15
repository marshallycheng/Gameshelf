import { combineReducers } from 'redux';
import gamesReducer from './games_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import favoritesReducer from './favorites_reducer';

export default combineReducers({
  users: usersReducer,
  games: gamesReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer
});
