import * as ReviewAPIUtil from '../util/review_api_util';

// export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

const removeReview = (id) => {
  return {
    type: REMOVE_REVIEW,
    reviewId: id
  };
};

export const createReview = (review) => dispatch => {
  ReviewAPIUtil.createReview(review)
  .then(serverReview => {
    return dispatch(receiveReview(serverReview));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const editReview = (review) => dispatch => {
  ReviewAPIUtil.editReview(review)
  .then(serverReview => {
    return dispatch(receiveReview(serverReview));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteReview = (id) => dispatch => {
  ReviewAPIUtil.deleteReview(id)
  .then(serverReview => {
    return dispatch(removeReview(id));
  });
};
