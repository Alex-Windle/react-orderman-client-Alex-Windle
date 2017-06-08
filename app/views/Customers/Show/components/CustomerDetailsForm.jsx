/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';


// Custom imports
import renderTextField from '../../../common/forms/renderTextField';
import SuccessButton from '../../../common/buttons/SuccessButton';


/**
 * @class CustomerDetailsForm
 * @description Form for handling Customer details
 * @description Used for both creating new Customers and updating existing Customers
 */
class CustomerDetailsForm extends Component {
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
            <div className="col-md-10 col-md-offset-1">
              <Field
                name="first_name"
                placeholder="First Name"
                component={renderTextField}
              />
              <Field
                name="last_name"
                placeholder="Last Name"
                component={renderTextField}
              />
              <Field
                name="email"
                placeholder="Email"
                component={renderTextField}
              />
              <div className="spacer" />
              <SuccessButton
                block
                title="Save"
                loading={false}
                disabled={pristine || invalid}
              />
              <div className="spacer" />
            </div>
          </form>
        </div>
        <div className="spacer" />
      </div>
    );
  }
}


CustomerDetailsForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


CustomerDetailsForm.defaultProps = {};


/**
 * @function validate
 * @description Function to check for proper values in the connected form
 * @param values
 * @returns {{}}
 */
const validate = (values) => {
  const errors = {};

  if (!values.first_name) {
    errors.first_name = 'Required';
  }

  if (!values.last_name) {
    errors.last_name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  return errors;
};


export default reduxForm({
  form: 'customerDetailsForm',
  validate,
})(CustomerDetailsForm);
