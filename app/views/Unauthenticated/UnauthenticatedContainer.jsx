/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


// Component imports
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';


// Actions imports
import {
  performLogin,
} from './actions/loginActions';

import {
  performSignup,
} from './actions/signupActions';


// Other imports
import {
  ReduxFormPropType,
  LoginPropType,
  SignupPropType,
} from '../../customPropTypes';


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
class UnauthenticatedContainer extends Component {
  constructor(props) {
    super(props);

    this.signup = (event) => {
      event.preventDefault();
      const { values } = this.props.signupForm;
      this.props.performSignup(values);
    };

    this.login = (event) => {
      event.preventDefault();
      const { values } = this.props.loginForm;
      this.props.performLogin(values);
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


UnauthenticatedContainer.propTypes = {
  login: LoginPropType.isRequired,
  loginForm: ReduxFormPropType,
  performLogin: PropTypes.func.isRequired,
  performSignup: PropTypes.func.isRequired,
  signup: SignupPropType.isRequired,
  signupForm: ReduxFormPropType,
};

UnauthenticatedContainer.defaultProps = {
  loginForm: {},
  signupForm: {},
};


const mapStateToProps = state => ({
  login: state.login,
  loginForm: state.form.loginForm,
  signup: state.signup,
  signupForm: state.form.signupForm,
});

const mapDispatchToProps = () => ({
  performLogin,
  performSignup,
});


export default connect(mapStateToProps, mapDispatchToProps())(UnauthenticatedContainer);
