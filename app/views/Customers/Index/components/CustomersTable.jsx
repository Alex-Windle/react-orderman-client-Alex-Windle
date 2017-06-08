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
import Pagination from '../../../common/pagination/Pagination';


// PropTypes imports
import {
  CustomerPropType,
  PaginationPropType,
} from '../../../../customPropTypes';


/**
 * @class CustomersTable
 * @description Table for rendering Customers
 */
export default class CustomersTable extends Component {
  render() {
    const {
      customers,
      pagination,
      handlePageChange,
    } = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <table className="table table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th className="hidden-xs hidden-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                if (customers.length) {
                  return customers.map(customer => (
                    <tr key={customer._id}>
                      <td>
                        <Link to={`/customers/${customer._id}`}>
                          {customer.first_name} {customer.last_name}
                        </Link>
                      </td>
                      <td>{customer.email}</td>
                      <td>
                        {moment(customer.createdAt).format('lll')}
                      </td>
                      <td className="hidden-xs hidden-sm">
                        <Link to={`/orders/create/${customer._id}`}>
                          New Order
                        </Link>
                      </td>
                    </tr>
                  ));
                }
                return (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center"
                    >
                      <h3>No Customers Found</h3>
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


CustomersTable.propTypes = {
  customers: PropTypes.arrayOf(CustomerPropType).isRequired,
  pagination: PaginationPropType.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};


CustomersTable.defaultProps = {};
