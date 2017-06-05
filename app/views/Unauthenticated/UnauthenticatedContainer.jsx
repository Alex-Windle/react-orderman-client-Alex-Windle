/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// Component imports
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';


/**
 * UnauthenticatedContainer is a wrapper for the Login and Signup pages of this app.
 *
 * @description Renders:
 *   UnauthenticatedLayout
 *   LoginForm or SignupForm depending on Route
 *
 *
 * @extends Component
 */
export default class UnauthenticatedContainer extends Component {
  constructor(props) {
    super(props);

    this.signup = (event) => {
      event.preventDefault();
    };

    this.login = (event) => {
      event.preventDefault();
    };
  }

  render() {
    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route
            path="/login"
            render={props =>
              (<LoginForm
                {...props}
                handleSubmit={this.login}
              />)
            }
          />
          <Route
            exact
            path="/"
            render={props =>
              (<SignupForm
                {...props}
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
