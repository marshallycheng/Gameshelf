import { connect } from 'react-redux';
import React from 'react';
import { deleteReview } from '../../../actions/review_actions';
import { selectReviewer } from '../../../reducers/selectors';
import GameReviewsItem from './game_reviews_item';



const msp = (state, ownProps) => {
  const review = ownProps.review;

  return {
    review,
    reviewer: selectReviewer(state, review),
    currentUserId: state.session.id
  };
};

const mdp = dispatch => {
  return {
    deleteReview: (id) => dispatch(deleteReview(id))
  };
};

export default (connect(msp, mdp)(GameReviewsItem));
