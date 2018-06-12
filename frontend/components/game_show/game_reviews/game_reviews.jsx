import React from 'react';
import GameReviewsItemContainer from './game_reviews_item_container';

class GameReviews extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { reviews } = this.props;
    const allReviews = reviews.map(review => {
      return <GameReviewsItemContainer key={review.id} review={review} />;
    });

    return (
      <ul className="game-reviews-list">
        {allReviews}
      </ul>
    );
  }
}

export default GameReviews;
