import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../layout/Main';

import HomeContainer from '../containers/HomeContainer';
import EnterprisesContainer from '../containers/EnterprisesContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import AdminContainer from '../containers/AdminContainer';
import UsersContainer from '../containers/UsersContainer';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Help from '../components/Help';
import Profile from '../components/Profile';

import injectTapEventPlugin from 'react-tap-event-plugin'

import AuthService from '../utils/AuthService';
injectTapEventPlugin();
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
      <Route path="despre" component={About} />
      <Route path="admin" component={AdminContainer} onEnter={requireAuth} />
      <Route path="admin/intreprinderi" component={EnterprisesContainer} onEnter={requireAuth} />
      <Route path="admin/inregistrare" component={RegistrationContainer} onEnter={requireAuth} />
      <Route path="admin/utilizatori" component={UsersContainer} onEnter={requireAuth} />
      <Route path="admin/profil" component={Profile} onEnter={requireAuth} />
      <Route path="admin/ajutor" component={Help} onEnter={requireAuth} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
