/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';


// Page imports
import LoginContainer from './Login/LoginContainer';
import SignupContainer from './Signup/SignupContainer';


const history = createHashHistory();


/**
 * Class representing the client-side router for the app
 *
 * @description Depending on the route shown, a different component should
 * be rendered. These components we render are the "pages" of our app.
 *
 * @extends Component
 */
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/login"
            component={LoginContainer}
          />
          <Route
            exact
            path="/"
            component={SignupContainer}
          />
        </Switch>
      </Router>
    );
  }
}
