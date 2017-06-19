import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import SuccessButton from '../../common/buttons/SuccessButton';

export default class SignupForm extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    return (
      <div>
        System Admin Sign up<br />
        <form onSubmit={handleSubmit} >
          <input type="email" placeholder="Email" /><br />
          <input type="text" placeholder="Password" /><br />
          <SuccessButton title="Sign up" />
        </form>
        <Link to="/login">I already have an account.</Link>
      </div>
    );
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

SignupForm.defaultProps = {};
