/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';


// Component imports
import Pagination from '../pagination/Pagination';


// PropTypes imports
import {
  OrderPropType,
  PaginationPropType,
} from '../../../customPropTypes';


/**
 * @class OrdersTable
 * @description Table to display orders
 */
export default class OrdersTable extends Component {
  render() {
    const {
      orders,
      pagination,
      handlePageChange,
    } = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <table className="table table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Date</th>
                <th className="hidden-xs hidden-sm">Description</th>
                <th className="hidden-xs hidden-sm">Created At</th>
                <th className="hidden-xs hidden-sm">Customer</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                if (orders.length) {
                  return orders.map(order => (
                    <tr key={order._id}>
                      <td>
                        <Link to={`/orders/${order._id}`}>
                          {order._id.substring(18)}
                        </Link>
                      </td>
                      <td>{order.status}</td>
                      <td>{moment(order.date).format('lll')}</td>
                      <td className="hidden-xs hidden-sm" width="30%">{order.description}</td>
                      <td className="hidden-xs hidden-sm">
                        {moment(order.createdAt).format('lll')}
                      </td>
                      <td className="hidden-xs hidden-sm">
                        {(() => order.customer_id && (
                          <Link to={`/customers/${order.customer_id._id}`}>
                            {order.customer_id.first_name} {order.customer_id.last_name}
                            {'\n'}
                            ({order.customer_id.email})
                          </Link>
                        ))()}
                      </td>
                    </tr>
                  ));
                }
                return (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center"
                    >
                      <h3>No Orders Found</h3>
                    </td>
                  </tr>
                );
              })()}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Pagination
            handlePageChange={handlePageChange}
            pagination={pagination}
          />
        </div>
      </div>
    );
  }
}


OrdersTable.propTypes = {
  orders: PropTypes.arrayOf(OrderPropType).isRequired,
  pagination: PaginationPropType.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};


OrdersTable.defaultProps = {};
