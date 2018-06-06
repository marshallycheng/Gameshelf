import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';



const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
