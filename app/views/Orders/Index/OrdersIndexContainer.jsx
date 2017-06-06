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
import OrdersTable from '../../common/tables/OrdersTable';
import SearchBar from '../../common/forms/SearchBar';


// Actions imports
import { performOrdersIndexAction } from './actions/ordersIndexActions';


// Custom imports
import {
  OrdersIndexPropType,
} from '../../../customPropTypes';


/**
 * OrdersIndexContainer represents a page with a list of all Orders for a given admin
 *
 * @description Renders:
 *   AuthenticatedLayout
 *   OrdersTable
 *   Pagination
 *
 * @extends Component
 */
export class OrdersIndexContainer extends Component {
  constructor(props) {
    super(props);

    this.findOrders = (page = 1) => {
      this.props.performOrdersIndexAction(page, this.state.searchTerm);
    };

    this.handleSearch = (searchTerm) => {
      this.setState({
        searchTerm,
      });
      this.findOrders(1);
    };
  }

  state = {
    searchTerm: null,
  };

  componentWillMount() {
    this.findOrders(1);
  }

  render() {
    const {
      ordersIndex: {
        isFetching,
        orders,
        pagination,
      },
    } = this.props;
    return (
      <AuthenticatedLayout
        pageTitle="Orders"
      >
        <div>
          <div className="spacer" />
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <SearchBar
                handleSearch={this.handleSearch}
                disabled={false}
                placeholder="Search Orders"
              />
            </div>
          </div>
          <br className="hidden-md hidden-lg" />
          <div className="row">
            <div className="container-fluid">
              {(() => {
                if (isFetching) {
                  return <h4 className="text-center">Loading your Orders...</h4>;
                }
                return (
                  <OrdersTable
                    handlePageChange={this.findOrders}
                    pagination={pagination}
                    orders={orders}
                  />
                );
              })()}
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }
}


OrdersIndexContainer.propTypes = {
  ordersIndex: OrdersIndexPropType.isRequired,
  performOrdersIndexAction: PropTypes.func.isRequired,
};

OrdersIndexContainer.defaultProps = {};


const mapStateToProps = state => ({
  ordersIndex: state.ordersIndex,
});


const mapDispatchToProps = () => ({
  performOrdersIndexAction,
});


export default connect(mapStateToProps, mapDispatchToProps())(OrdersIndexContainer);
