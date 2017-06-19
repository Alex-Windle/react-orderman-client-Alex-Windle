import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

/**
 * @class UnauthenticatedContainer
 * @description Routing container for unauthenticated components
 * like Login and Signup.
 * @description Here, we're rendering an UnauthenticatedLayout which shows a Logo on
 * top, and then renders "children" passed into it. In this case, the "children" are
 * two Routes:
 *   "/login" renders the LoginForm
 *   "/" renders the SignupForm
 */
export default class UnauthenticatedContainer extends Component {
  constructor(props) {
    super(props);

    this.login = (event) => {
      // Do not submit form
      event.preventDefault();
    };

    this.signup = (event) => {
      // Do not submit form
      event.preventDefault();
    };
  }

  render() {
    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route
            path="/login"
            render={() =>
              (<LoginForm
                handleSubmit={this.login}
              />)
            }
          />
          <Route
            path="/"
            render={() =>
              (<SignupForm
                handleSubmit={this.signup}
              />)
            }
          />
        </Switch>
      </UnauthenticatedLayout>
    );
  }
}

UnauthenticatedContainer.propTypes = {};

UnauthenticatedContainer.defaultProps = {};
