import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createReview, clearErrors } from '../../../actions/review_actions';
import GameReviewForm from './game_review_form';

const mapStateToProps = (state, ownProps) => {
  const review = { title: '', rating: '', body: ''};
  return {
    errors: state.errors.review,
    submitButton: 'Submit Review',
    review
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameReviewForm);
