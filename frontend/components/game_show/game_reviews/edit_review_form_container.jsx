import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/review_actions';
import GameReviewForm from './game_review_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    submitButton: 'Log in',
    navText: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
