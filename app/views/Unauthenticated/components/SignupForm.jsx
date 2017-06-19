import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import SuccessButton from '../../common/buttons/SuccessButton';

// export default class SignupForm extends Component {
//   render() {
//     // const { handleSubmit } = this.props;
//     return (
//       <div>SignupForm</div>
//     );
//   }
// }

const SignupForm = () => (
  <div>
    Signup Form!<br />
    <Link to="/login">Take me to login.</Link>
  </div>
);

export default SignupForm;

// SignupForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };


SignupForm.defaultProps = {};
