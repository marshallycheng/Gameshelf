import React from 'react';
import { sendIcon, homeIcon, favoriteIcon, fullStar, halfStar, emptyStar } from '../logo';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="home-button">{homeIcon} Home</Link>
        <div className="game-show-content">


          <div className="game-show-container">
            <div className="container-links">
              <button className="send-button">{sendIcon} Send</button>
              <button className="favorite-button">{favoriteIcon} Favorite</button>
            </div>
            <div className="container-content">
              <span className="game-show-title">
                {game.title}
              </span>
              <img className="game-show-image" src={`${game.image_url}`}/>
              <div className="game-details">
                <div className="game-stats">
                  <div className="game-stats-left">
                    <span className="game-score">
                      {fullStar}
                      {fullStar}
                      {fullStar}
                      {halfStar}
                      {emptyStar}
                      3.5
                    </span>
                    <span className="game-release-date">
                      <span className="game-release-date-label">
                        Released on:
                      </span>
                      Jan 26, 1995
                    </span>
                  </div>
                  <div className="game-stats-right">
                    <span className="game-genres">
                      <span className="game-genres-label">
                        Genres:
                      </span>
                      Action
                    </span>
                    <span className="game-rating">
                      <span className="game-rating-label">
                        Rating:
                      </span>
                      T
                    </span>
                  </div>


                </div>
                <div className="review-form">
                  Review form
                </div>
              </div>
              <div className="game-show-description">
                {game.description}
              </div>
            </div>
            <div className="game-reviews">
              <div className="review-header">
                Reviews
              </div>
              <div className="reviews-list">
                reviews list
                reviews list
                reviews list
              </div>
            </div>
          </div>
        </div>
      </div>
    );}
  }
}

export default GameShow;
