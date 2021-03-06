import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SuccessButton from '../../common/buttons/SuccessButton';

export default class SignupForm extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    return (
      <div className="panel panel-default">
        <div className="container-fluid">
          <form onSubmit={handleSubmit} >
            <div className="spacer" />
            <h3>System Admin <b>Sign up</b></h3>
            <div className="spacer" />
            <div className="col-md-10 col-md-offset-1">
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Password" />
              </div>
              <div className="spacer" />
              <SuccessButton title="Sign up" />
              <div className="spacer" />
            </div>
          </form>
        </div>
        <div className="container-fluid">
          <h4><Link to="/login">I already have an account.</Link></h4>
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
