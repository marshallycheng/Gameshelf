import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = currentUser => {
  return {
    type: LOGOUT_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = user => dispatch => {
  APIUtil.signup(user)
  .then(serverUser => {
    return dispatch(receiveCurrentUser(serverUser));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const login = user => dispatch => {
  APIUtil.login(user)
  .then(serverUser => {
    return dispatch(receiveCurrentUser(serverUser));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const logout = () => dispatch => {
  APIUtil.logout()
  .then(serverUser => {
    return dispatch(logoutCurrentUser());
  });
};
