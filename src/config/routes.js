import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Admin from '../components/Admin';

import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';
import Settings from '../components/Settings';


import AuthService from '../utils/AuthService';

const auth = new AuthService(
  process.env.REACT_APP_AUTH0_CLIENT_ID,
  process.env.REACT_APP_AUTH0_DOMAIN
);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace({ pathname: '/' });
  }
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Main} auth={auth}>
      <IndexRoute component={HomeContainer} />
      <Route path="setari" component={Settings} onEnter={requireAuth} />
      <Route path="admin" component={Admin} onEnter={requireAuth} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
