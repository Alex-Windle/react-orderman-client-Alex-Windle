/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Field,
  reduxForm,
} from 'redux-form';


// Component imports
import renderTextField from '../../common/forms/renderTextField';
import SuccessButton from '../../common/buttons/SuccessButton';


/**
 * @class LoginForm represents
 * @description The form to authenticate Users (system admins)
 * Contains two inputs and a link
 *   input of type "email"
 *   input of type "password"
 *   Link from "react-router-dom" that routes to the "/" route for the SignupForm
 *
 */
class LoginForm extends Component {
  render() {
    const {
      handleSubmit,
      invalid,
      pristine,
      loading,
    } = this.props;

    return (
      <div className="panel panel-default">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="spacer" />
            <h3>System Admin <b>Log in</b></h3>
            <div className="spacer" />
            <div className="col-md-10 col-md-offset-1">
              <Field
                name="email"
                placeholder="Email"
                component={renderTextField}
              />
              <Field
                name="password"
                placeholder="Password"
                component={renderTextField}
                type="password"
              />
              <div className="spacer" />
              <SuccessButton
                block
                loading={loading}
                title="Log in"
                disabled={pristine || invalid || loading}
              />
              <div className="spacer" />
            </div>
          </form>
        </div>
        <div className="container-fluid">
          <h4>
            <Link to="/signup">
              {"I don't have an account yet"}
            </Link>
          </h4>
        </div>
        <div className="spacer" />
      </div>
    );
  }
}


LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};


LoginForm.defaultProps = {};


const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};


export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);
