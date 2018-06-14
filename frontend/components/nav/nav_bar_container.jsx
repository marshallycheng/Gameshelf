import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStatetoProps = state => {
  const currentUserId = state.session.id;

  return {
    currentUserId,
    currentUser: state.entities.users[currentUserId]
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(NavBar));
