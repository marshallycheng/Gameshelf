import React from 'react';
import { Redirect } from 'react-router-dom';

class GameSearchItem extends React.Component {
  constructor(props){
    super(props);
    this.redirectGameshow = this.redirectGameshow.bind(this);
  }

  redirectGameshow(){
    window.location.href = `/#/games/${this.props.game.id}`;
  }

  render(){
    const { game } = this.props;
    return (
      <li className="search-results-item">
        <div className="search-item-div" onClick={this.redirectGameshow}>
          <img
            className="search-item-image"
            src={`${game.image_url}`}
          />
          {game.title}
        </div>
      </li>
    );
  }
}

export default GameSearchItem;
