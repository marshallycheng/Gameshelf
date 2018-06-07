import React from 'react';

const GameIndexItem = ({game}) => {

  return (
    <li>
      <img className="game-cover-art" src={`${game.image_url}`}/>
    </li>
  );
};

export default GameIndexItem;
