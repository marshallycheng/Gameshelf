import { combineReducers } from 'redux';
import gamesReducer from './games_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
  users: usersReducer,
  games: gamesReducer,
  reviews: reviewsReducer
});
