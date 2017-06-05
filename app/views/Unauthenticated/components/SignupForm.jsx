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
 * SignupForm represents the form to register new Users (system admins)
 *
 * @description Renders 2 fields and a SuccessButton
 *   email input
 *   password input
 *   SuccessButton
 *
 * PROPS:
 *   handleSubmit {func} Form onSubmit handler
 *
 * @extends Component
 */
class SignupForm extends Component {
  render() {
    const {
      handleSubmit,
      invalid,
      pristine,
    } = this.props;

    return (
      <div className="panel panel-default">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="spacer" />
            <h3>System Admin <b>Sign up</b></h3>
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
                onClick={() => {}}
                title="Sign up"
                loading={false}
                disabled={pristine || invalid}
              />
              <div className="spacer" />
            </div>
          </form>
        </div>
        <div className="container-fluid">
          <h4>
            <Link to="/login">
              I already have an account
            </Link>
          </h4>
        </div>
        <div className="spacer" />
      </div>
    );
  }
}


SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};


SignupForm.defaultProps = {};


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
  form: 'signupForm',
  validate,
})(SignupForm);
