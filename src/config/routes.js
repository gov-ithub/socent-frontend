import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import Main from "../layout/Main";

import HomeContainer from "../containers/HomeContainer";
import EnterprisesContainer from "../containers/EnterprisesContainer";
import RegistrationContainer from "../containers/RegistrationContainer";
import AdminContainer from "../containers/AdminContainer";
import UsersContainer from "../containers/UsersContainer";
import NotFound from "../components/NotFound";
import About from "../components/About";
import Help from "../components/Help";
import Profile from "../components/Profile";

import SignUp from "../layout/SignUp";
import SignIn from "../layout/SignIn";
import SignOut from "../layout/SignOut";
import Welcome from "../layout/Welcome";
import ForgotPassword from "../layout/ForgotPassword";
// import requiresAuth from "../containers/requiresAuth";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const Routes = props => <Router {...props}>
  <Route path="">
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={SignIn} />
    <Route path="/welcome-on-board" component={Welcome} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/signout" component={SignOut} />
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="despre" component={About} />
      <Route path="admin" component={AdminContainer} />
      <Route path="admin/intreprinderi" component={EnterprisesContainer} />
      <Route path="admin/inregistrare/:id" component={RegistrationContainer} />
      <Route path="admin/utilizatori" component={UsersContainer} />
      <Route path="admin/profil" component={Profile} />
      <Route path="admin/ajutor" component={Help} />
    </Route>
    <Route path="*" component={NotFound} status={404} />
  </Route>
</Router>;

export default Routes