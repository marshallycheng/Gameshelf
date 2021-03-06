import * as GameAPIUtil from '../util/game_api_util';

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';

const receiveGames = (games) => {
  return {
    type: RECEIVE_GAMES,
    games
  };
};
export const receiveGame = (data) => {
  return {
    type: RECEIVE_GAME,
    game: data.game,
    reviews: data.reviews,
    users: data.users
  };
};

export const fetchGames = () => dispatch => {
  GameAPIUtil.fetchGames()
  .then(serverGames => {
    return dispatch(receiveGames(serverGames));
  });
};

export const fetchGame = (id) => dispatch => {
  GameAPIUtil.fetchGame(id)
  .then(serverGame => {
    return dispatch(receiveGame(serverGame));
  });
};
