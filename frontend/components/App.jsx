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
import GameShowContainer from './game_show/game_show_container';
import SessionBackground from './session_form/session_background';
import { AuthRoute, ProtectedRoute} from '../util/route_util';



const App = () => (
  <div className='content'>

    <Switch>
      <AuthRoute path="/(signup|login)/" component={SessionBackground}/>
      <ProtectedRoute exact path="/games/:gameId" component={GameShowContainer}/>
      <ProtectedRoute exact path="/" component={GameIndexContainer} />
      <Redirect to="/"></Redirect>
    </Switch>

  </div>
);

export default App;
