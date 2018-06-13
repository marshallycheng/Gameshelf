import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_GAMES = 'RECEIVE_SEARCH_GAMES';
export const CLEAR_SEARCH_GAMES = 'CLEAR_SEARCH_GAMES';

const receiveSearchGames = (searchResults) => {
  return {
    type: RECEIVE_SEARCH_GAMES,
    searchResults
  };
};

export const fetchSearchGames = (search) => dispatch => {
  return SearchAPIUtil.fetchSearchGames(search)
  .then(serverGames => {
    dispatch(receiveSearchGames(serverGames));
  });
};

export const clearSearchGames = () => {
  return {
    type: CLEAR_SEARCH_GAMES
  };
};
