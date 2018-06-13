import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GameIndexContainer from './game_index/game_index_container';
import GameShowContainer from './game_show/game_show_container';
import SessionBackground from './session_form/session_background';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import UserProfileContainer from './user_profile/user_profile_container';


const App = () => (
  <div className='content'>

    <Switch>
      <AuthRoute path="/(signup|login)/" component={SessionBackground}/>
      <ProtectedRoute exact path="/games/:gameId" component={GameShowContainer}/>
      <ProtectedRoute exact path="/" component={GameIndexContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer}/>
      <Redirect to="/"></Redirect>
    </Switch>

  </div>
);

export default App;
