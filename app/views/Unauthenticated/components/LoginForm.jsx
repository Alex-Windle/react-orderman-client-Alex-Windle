import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SuccessButton from '../../common/buttons/SuccessButton';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        System Admin Log in<br />
        <form>
          <input type="email" placeholder="Email" /><br />
          <input type="text" placeholder="Password" /><br />
          <SuccessButton title="Log in" />
        </form>
        <Link to="/">{"I don't have an account yet."}</Link>
      </div>
    );
  }
}

LoginForm.defaultProps = {};
