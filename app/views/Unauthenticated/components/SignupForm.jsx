/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// Component imports
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
export default class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="panel panel-default">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="spacer" />
            <h3>System Admin <b>Sign up</b></h3>
            <div className="spacer" />
            <div className="col-md-10 col-md-offset-1">
              <div className="form-group">
                <input
                  autoComplete="off"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <input
                  autoComplete="off"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="spacer" />
              <SuccessButton
                block
                onClick={() => {}}
                title="Sign up"
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
};


SignupForm.defaultProps = {};
