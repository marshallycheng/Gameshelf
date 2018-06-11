import React from 'react';

const GameReviewsItem = ({reviewer, review}) => {
  const reviewerUsername = (reviewer) ? reviewer.username : "Loading";
  const reviewButtons = (review.user_id === window.currentUser.id) ?
  (<div className="review-buttons">
    <button className="review-edit-button"> Edit </button>
    <button className="review-delete-button"> Delete </button>
  </div>) : <div> </div>;

  return (
    <li className="game-review-item">
      <div className="review-info">

        <div className="review-info-left">
          <div className="review-info-username">
            {reviewerUsername}
          </div>

            gave it

          <div className="review-info-rating">
            {review.rating}
          </div>
          {reviewButtons}
        </div>


        <div className="review-info-date">
          {(new Date(review.created_at).toDateString())}
        </div>

      </div>
      <div className="review-content">
        {review.body}
      </div>
    </li>
  );
};

export default GameReviewsItem;
