import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { editReview, clearErrors } from '../../../actions/review_actions';
import GameReviewForm from './game_review_form';

const mapStateToProps = (state, ownProps) => {
  const review = { game_id: ownProps.review.game_id, rating: ownProps.review.rating, body: ownProps.review.body };

  return {
    errors: state.errors.review,
    submitButton: 'Edit Review',
    review
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (review) => dispatch(editReview(review)),
    clearErrors: () => dispatch(clearErrors())
  };
};

class EditReviewForm extends React.Component {
  render() {
    const { processForm, submitButton, clearErrors, errors, review} = this.props;
    return (
      <GameReviewForm
        processForm={processForm}
        submitButton={submitButton}
        clearErrors={clearErrors}
        errors={errors}
        review={review}
      />
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);
