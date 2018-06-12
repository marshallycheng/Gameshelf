import React from 'react';
import { sendIcon, homeIcon, favoriteIcon, fullStar, halfStar, emptyStar } from '../logo';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';
import GameReviewsContainer from './game_reviews/game_reviews_container';
import CreateReviewContainer from './game_reviews/create_review_form_container';

class GameShow extends React.Component {
  constructor(props){
    super(props);
    this.updateReviews = this.updateReviews.bind(this);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.gameId);
  }

  updateReviews() {
    this.setState();
  }

  render(){
    console.log(this.props);
    const { game } = this.props;
    let genres;
    if (game) {
      if (game.genres) {
        genres = game.genres.map(genre => {
          return <span className="genre-tag" key={genre}>{genre}</span>;
        });
      }
    } else {
      genres = [];
    }

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
                      {game.release_date}
                    </span>
                  </div>
                  <div className="game-stats-right">
                    <span className="game-genres">
                      <span className="game-genres-label">
                        Genres:
                      </span>
                      {genres}
                    </span>
                    <span className="game-rating">
                      <span className="game-rating-label">
                        Rating:
                      </span>
                      {game.rating}
                    </span>
                  </div>


                </div>
                <CreateReviewContainer callback={this.updateReviews} game={game}/>
              </div>
              <div className="game-show-description">
                {game.description}
              </div>
            </div>
            <div className="game-reviews">
              <div className="review-header">
                Reviews
              </div>
              <div className="reviews-list-container">
                <GameReviewsContainer gameId={game.id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );}
  }
}

export default GameShow;
