import React from 'react';

const GameReviewsItem = ({reviewer, review}) => {
  const reviewerUsername = (reviewer) ? reviewer.username : "Loading";
  return (
    <li className="game-review-item">
      {reviewerUsername}
      {review.rating}
      {(new Date(review.created_at).toDateString())}
      {review.body}
    </li>
  );
};

export default GameReviewsItem;
