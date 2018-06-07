import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import GameShowContainer from '../game_show/game_show_container';
import { ProtectedRoute } from '../../util/route_util';


const GameIndexItem = ({game}) => {

  return (
    <div className="game-list-item">
      <Link to={`/games/${game.id}`}>
      <img
        className="game-cover-art"
        src={`${game.image_url}`}
      />
    </Link>
    </div>
  );
};

export default GameIndexItem;
