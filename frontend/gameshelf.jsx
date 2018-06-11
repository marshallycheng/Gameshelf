import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchGames, fetchGame, receiveGame } from './actions/game_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities : {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  //TESTS
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchGames = fetchGames;
  window.receiveGame = receiveGame;
  window.fetchGame = fetchGame;


  ReactDOM.render(<Root store={store}/>, root);
});
