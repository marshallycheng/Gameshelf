import React from 'react';

const GameIndexItem = ({game}) => {

  return (
    <div className="game-list-item">
      <img className="game-cover-art" src={`${game.image_url}`}/>
    </div>
  );
};

export default GameIndexItem;
