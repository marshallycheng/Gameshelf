import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createReview, clearErrors } from '../../../actions/review_actions';
import GameReviewForm from './game_review_form';

const mapStateToProps = (state, ownProps) => {
  const review = { rating: 0, body: '', game_id: ownProps.game.id};
  return {
    errors: state.errors.review,
    callback: () => ownProps.callback(),
    submitButton: 'Submit Review',
    review,
    game: ownProps.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameReviewForm);
