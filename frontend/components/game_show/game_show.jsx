import React from 'react';
import { homeIcon } from '../logo';
import NavBarContainer from '../nav/nav_bar_container';

class GameShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.gameId);
  }

  render(){
    const { game } = this.props;

    if (!game) {
      return 'loading';
    } else {
    return (
      <div className="game-show-page">
        <div className="game-show-content">
          <div class="home-button">
            {homeIcon} Home
          </div>
          <div className="game-show-container">
            <div className="container-links">
            </div>
            <div className="container-content">
              <span className="game-show-title">
                {game.title}
              </span>
              <img className="game-show-image" src={`${game.image_url}`}/>
              <div className="review-form">
                Review Form
              </div>
              <div className="game-show-description">
                {game.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );}
  }
}

export default GameShow;
