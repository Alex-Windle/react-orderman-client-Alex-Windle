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
 * UnauthenticatedContainer is a routing container for unauthenticated components
 * like Login and Signup.
 *
 * @description Here, we're rendering an UnauthenticatedLayout which shows a Logo on
 * top, and then renders "children" passed into it. In this case, the "children" are
 * two Routes:
 *   "/login" renders the LoginForm
 *   "/" renders the SignupForm
 *
 */
class UnauthenticatedContainer extends Component {
  constructor(props) {
    super(props);


    /**
     * onSubmit handler for the LoginForm
     * @param event
     */
    this.signup = (event) => {
      event.preventDefault();
      const { values } = this.props.signupForm;
      this.props.performSignup(values);
    };


    /**
     * onSubmit handler for the SignupForm
     * @param event
     */
    this.login = (event) => {
      event.preventDefault();
      const { values } = this.props.loginForm;
      this.props.performLogin(values);
    };
  }

  render() {
    const {
      login,
      signup,
    } = this.props;

    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route
            exact
            path="/login"
            render={props =>
              (<LoginForm
                {...props}
                loading={login.isFetching}
                handleSubmit={this.login}
              />)
            }
          />
          <Route
            exact
            path="/signup"
            render={props =>
              (<SignupForm
                {...props}
                loading={signup.isFetching}
                handleSubmit={this.signup}
              />)
            }
          />
          <Route
            path="/"
            render={props =>
              (<LoginForm
                {...props}
                loading={login.isFetching}
                handleSubmit={this.login}
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
