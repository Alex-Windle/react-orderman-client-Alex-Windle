/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';


// Component imports
import AuthenticatedLayout from '../../common/layouts/AuthenticatedLayout';
import OrderDetailsForm from './components/OrderDetailsForm';
import DeleteButton from '../../common/buttons/DeleteButton';


// Actions imports
import {
  performDeleteOrder,
  performRetrieveOrder,
  performUpdateOrder,
} from './actions/ordersShowActions';


// PropTypes imports
import {
  MatchPropType,
  OrdersShowPropType,
  ReduxFormPropType,
} from '../../../customPropTypes';


/**
 * OrdersShowContainer represents a page with an Order
 *
 * @description Renders:
 *   AuthenticatedLayout
 *   OrdersTable
 *
 * @extends Component
 */
export class OrdersShowContainer extends Component {
  constructor(props) {
    super(props);

    this.retrieveOrder = (id) => {
      this.props.performRetrieveOrder(id);
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      const { values } = this.props.orderDetailsForm;
      this.props.performUpdateOrder(this.props.match.params.id, values);
    };

    this.deleteOrder = (id) => {
      this.props.performDeleteOrder(id);
    };
  }

  componentWillMount() {
    this.retrieveOrder(this.props.match.params.id);
  }

  render() {
    const {
      ordersShow: {
        isFetching,
        order,
      },
    } = this.props;

    return (
      <AuthenticatedLayout
        showBackButton
        pageTitle="Order Details"
      >
        <div>
          <div className="row">
            <div className="col-md-6">
              {(() => !isFetching && order.customer_id && (
                <h4>Order For:
                  <b>
                    &nbsp;
                    {order.customer_id.first_name}
                    &nbsp;
                    {order.customer_id.last_name}
                    &nbsp;
                    ({order.customer_id.email})
                  </b>
                </h4>
              ))()}
            </div>
            <div className="col-md-6 text-right">
              <DeleteButton onClick={() => this.deleteOrder(this.props.match.params.id)} />
            </div>
          </div>
          <br />
          {(() => {
            if (isFetching) {
              return <h4 className="text-center">Loading Order...</h4>;
            }
            return (
              <div>
                <OrderDetailsForm
                  handleSubmit={this.handleSubmit}
                  initialValues={{
                    date: moment(order.date).format('YYYY-MM-DD'),
                    description: order.description,
                    status: order.status,
                  }}
                />
              </div>
            );
          })()}
        </div>
      </AuthenticatedLayout>
    );
  }
}


OrdersShowContainer.propTypes = {
  match: MatchPropType.isRequired,
  ordersShow: OrdersShowPropType.isRequired,
  performRetrieveOrder: PropTypes.func.isRequired,
  performUpdateOrder: PropTypes.func.isRequired,
  performDeleteOrder: PropTypes.func.isRequired,
  orderDetailsForm: ReduxFormPropType,
};


OrdersShowContainer.defaultProps = {
  orderDetailsForm: {},
};


const mapStateToProps = state => ({
  ordersShow: state.ordersShow,
  orderDetailsForm: state.form.orderDetailsForm,
});


const mapDispatchToProps = () => ({
  performDeleteOrder,
  performRetrieveOrder,
  performUpdateOrder,
});


export default connect(mapStateToProps, mapDispatchToProps())(OrdersShowContainer);
