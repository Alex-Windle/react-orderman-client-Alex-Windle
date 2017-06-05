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
import CustomerDetailsForm from './components/CustomerDetailsForm';


// Actions imports
import {
  performRetrieveCustomer,
  performUpdateCustomer,
} from './actions/customersShowActions';


// PropTypes imports
import {
  CustomersShowPropType,
  MatchPropType,
  ReduxFormPropType,
} from '../../../customPropTypes';


/**
 * CustomersShowContainer represents a page with a list of all Customers for a given admin
 *
 * @extends Component
 */
class CustomersShowContainer extends Component {
  constructor(props) {
    super(props);

    this.retrieveCustomer = (id) => {
      this.props.performRetrieveCustomer(id);
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      const { values } = this.props.customerDetailsForm;
      this.props.performUpdateCustomer(this.props.match.params.id, values);
    };
  }

  componentWillMount() {
    this.retrieveCustomer(this.props.match.params.id);
  }

  render() {
    const {
      customersShow: {
        isFetching,
        customer,
      },
    } = this.props;

    const customerName = customer.first_name ?
      `${customer.first_name} ${customer.last_name}` :
      '';

    return (
      <AuthenticatedLayout
        showBackButton
        pageTitle={`Customer Details: ${customerName}`}
      >
        <div>
          <br />
          {(() => {
            if (isFetching) {
              return <h4 className="text-center">Loading Customer...</h4>;
            }
            return (
              <div>
                <CustomerDetailsForm
                  handleSubmit={this.handleSubmit}
                  initialValues={{
                    first_name: customer.first_name,
                    last_name: customer.last_name,
                    email: customer.email,
                  }}
                />
                <div className="spacer" />
              </div>
            );
          })()}
        </div>
      </AuthenticatedLayout>
    );
  }
}


CustomersShowContainer.propTypes = {
  customersShow: CustomersShowPropType.isRequired,
  match: MatchPropType.isRequired,
  performRetrieveCustomer: PropTypes.func.isRequired,
  performUpdateCustomer: PropTypes.func.isRequired,
  customerDetailsForm: ReduxFormPropType,
};


CustomersShowContainer.defaultProps = {
  customerDetailsForm: {},
};


const mapStateToProps = state => ({
  customersShow: state.customersShow,
  customerDetailsForm: state.form.customerDetailsForm,
});


const mapDispatchToProps = () => ({
  performRetrieveCustomer,
  performUpdateCustomer,
});


export default connect(mapStateToProps, mapDispatchToProps())(CustomersShowContainer);
