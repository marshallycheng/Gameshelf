import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import GameIndexContainer from './game_index/game_index_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';



const App = () => (
  <div className='content'>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/" component={GameIndexContainer} />
      <Redirect to='/'></Redirect>
    </Switch>

  </div>
);

export default App;
