/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// Component imports
import AuthenticatedLayout from '../../common/layouts/AuthenticatedLayout';
import CustomerDetailsForm from '../Show/components/CustomerDetailsForm';


// Actions imports
import { performCustomersCreateAction } from './actions/customersCreateActions';


// PropTypes imports
import {
  ReduxFormPropType,
} from '../../../customPropTypes';


/**
 * @class CustomersCreateContainer
 * @description Container for Customer creation
 */
class CustomersCreateContainer extends Component {
  constructor(props) {
    super(props);


    /**
     * @function createCustomer
     * @description Fires performCustomersCreateAction
     * @param e
     */
    this.createCustomer = (e) => {
      e.preventDefault();
      const { values } = this.props.customersCreateForm;
      this.props.performCustomersCreateAction(values);
    };
  }

  render() {
    return (
      <AuthenticatedLayout
        showBackButton
        pageTitle="Create a New Customer"
      >
        <div>
          <CustomerDetailsForm
            handleSubmit={this.createCustomer}
          />
        </div>
      </AuthenticatedLayout>
    );
  }
}


CustomersCreateContainer.propTypes = {
  performCustomersCreateAction: PropTypes.func.isRequired,
  customersCreateForm: ReduxFormPropType,
};


CustomersCreateContainer.defaultProps = {
  customersCreateForm: {},
};


const mapStateToProps = state => ({
  customersCreateForm: state.form.customerDetailsForm,
});


const mapDispatchToProps = () => ({
  performCustomersCreateAction,
});


export default connect(mapStateToProps, mapDispatchToProps())(CustomersCreateContainer);
