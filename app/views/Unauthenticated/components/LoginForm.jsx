import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import SuccessButton from '../../common/buttons/SuccessButton';

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
    Login Form!<br />
    <Link to="/">I am not signed up yet.</Link>
  </div>
);

export default LoginForm;

LoginForm.defaultProps = {};
