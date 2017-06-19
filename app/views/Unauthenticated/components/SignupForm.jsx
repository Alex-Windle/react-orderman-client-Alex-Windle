import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SuccessButton from '../../common/buttons/SuccessButton';

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        System Admin Sign up<br />
        <form>
          <input type="email" placeholder="Email" /><br />
          <input type="text" placeholder="Password" /><br />
          <SuccessButton title="Sign up" />
        </form>
        <Link to="/login">I already have an account.</Link>
      </div>
    );
  }
}

SignupForm.defaultProps = {};
