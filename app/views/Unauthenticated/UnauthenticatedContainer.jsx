/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// Component imports
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
// import SuccessButton from '../common/buttons/SuccessButton';

/**
 * @class UnauthenticatedContainer
 * @description Routing container for unauthenticated components
 * like Login and Signup.
 * @description Here, we're rendering an UnauthenticatedLayout which shows a Logo on
 * top, and then renders "children" passed into it. In this case, the "children" are
 * two Routes:
 *   "/login" renders the LoginForm
 *   "/" renders the SignupForm
 *
 * Unauth Container
 * > Unauth Layout
 * > Signup or Login form
 *
 *
 */
export default class UnauthenticatedContainer extends Component {
  render() {
    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route path="/login" render={LoginForm} />
          <Route path="/" render={SignupForm} />
        </Switch>
      </UnauthenticatedLayout>
    );
  }
}


UnauthenticatedContainer.propTypes = {};

UnauthenticatedContainer.defaultProps = {};
