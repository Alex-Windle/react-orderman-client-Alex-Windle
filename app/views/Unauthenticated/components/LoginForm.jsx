import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SuccessButton from '../../common/buttons/SuccessButton';

// export default class LoginForm extends Component {
//   render() {
//     const { handleSubmit } = this.props;
//     return (
//     );
//   }
// }


// LoginForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

const LoginForm = () => (
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

export default LoginForm;

LoginForm.defaultProps = {};
