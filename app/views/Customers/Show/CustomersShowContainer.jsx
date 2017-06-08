/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { history } from '../../Routes';


// Component imports
import AuthenticatedLayout from '../../common/layouts/AuthenticatedLayout';
import CustomerDetailsForm from './components/CustomerDetailsForm';
import OrdersTable from '../../common/tables/OrdersTable';
import PageTitle from '../../common/titles/PageTitle';
import SuccessButton from '../../common/buttons/SuccessButton';


// Actions imports
import {
  performRetrieveCustomer,
  performUpdateCustomer,
} from './actions/customersShowActions';

import { performOrdersIndexAction } from '../../Orders/Index/actions/ordersIndexActions';


// PropTypes imports
import {
  CustomersShowPropType,
  MatchPropType,
  OrdersIndexPropType,
  ReduxFormPropType,
} from '../../../customPropTypes';


/**
 * @class CustomersShowContainer
 * @description Container for Customer Display and Updates
 */
export class CustomersShowContainer extends Component {
  constructor(props) {
    super(props);


    /**
     * @function retrieveCustomer
     * @description Retrieves a specific customer by ID
     * @param id
     */
    this.retrieveCustomer = (id) => {
      this.props.performRetrieveCustomer(id);
    };


    /**
     * @function retrieveOrdersForCustomer
     * @description Retrieves Orders for a specific Customer
     * @param page
     */
    this.retrieveOrdersForCustomer = (page = 1) => {
      this.props.performOrdersIndexAction(page, null, this.props.match.params.id);
    };


    /**
     * @function handleSubmit
     * @description Submit handler for Customer updates
     * @param e
     */
    this.handleSubmit = (e) => {
      e.preventDefault();
      const { values } = this.props.customerDetailsForm;
      this.props.performUpdateCustomer(this.props.match.params.id, values);
    };
  }


  componentWillMount() {
    this.retrieveCustomer(this.props.match.params.id);
    this.retrieveOrdersForCustomer(1);
  }


  render() {
    const {
      customersShow: {
        isFetching,
        customer,
      },
      ordersIndex,
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
            if (isFetching || ordersIndex.isFetching) {
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
                <div className="row">
                  <div className="col-md-8">
                    <PageTitle
                      title={`${customer.first_name} ${customer.last_name}'s Orders`}
                    />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <SuccessButton
                      block
                      loading={false}
                      title="Add a New Order"
                      onClick={
                        () => history.push(`/orders/create/${this.props.match.params.id}`)
                      }
                      disabled={false}
                    />
                    <br className="hidden-md hidden-lg" />
                  </div>
                </div>
                <OrdersTable
                  pagination={ordersIndex.pagination}
                  handlePageChange={this.retrieveOrdersForCustomer}
                  orders={ordersIndex.orders}
                />
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
  ordersIndex: OrdersIndexPropType.isRequired,
  match: MatchPropType.isRequired,
  performOrdersIndexAction: PropTypes.func.isRequired,
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
  ordersIndex: state.ordersIndex,
});


const mapDispatchToProps = () => ({
  performOrdersIndexAction,
  performRetrieveCustomer,
  performUpdateCustomer,
});


export default connect(mapStateToProps, mapDispatchToProps())(CustomersShowContainer);
