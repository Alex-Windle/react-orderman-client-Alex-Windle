import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import SuccessButton from '../../common/buttons/SuccessButton';

export default class LoginForm extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    return (
      <div>
        System Admin Log in<br />
        <form onSubmit={handleSubmit} >
          <input type="email" placeholder="Email" /><br />
          <input type="text" placeholder="Password" /><br />
          <SuccessButton title="Log in" />
        </form>
        <Link to="/">{"I don't have an account yet."}</Link>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {};
