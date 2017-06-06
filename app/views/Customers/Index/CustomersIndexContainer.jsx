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
import CustomersTable from './components/CustomersTable';
import SearchBar from '../../common/forms/SearchBar';
import SuccessButton from '../../common/buttons/SuccessButton';


// Actions imports
import { performCustomersIndexSearch } from './actions/customersIndexActions';


// Custom imports
import { history } from '../../Routes';


// PropTypes imports
import {
  CustomersIndexPropType,
} from '../../../customPropTypes';


/**
 * CustomersIndexContainer represents a page with a list of all Customers for a given admin
 *
 * @description Renders:
 *   AuthenticatedLayout
 *   CustomersTable
 *   Pagination
 *
 * @extends Component
 */
export class CustomersIndexContainer extends Component {
  constructor(props) {
    super(props);

    this.findCustomers = (page = 1) => {
      this.props.performCustomersIndexSearch(page, this.state.searchTerm);
    };

    this.handleSearch = (searchTerm) => {
      this.setState({
        searchTerm,
      });
      this.findCustomers(1);
    };
  }

  state = {
    searchTerm: null,
  };

  componentWillMount() {
    this.findCustomers(1);
  }

  render() {
    const {
      customersIndex: {
        isFetching,
        customers,
        pagination,
      },
    } = this.props;

    return (
      <AuthenticatedLayout
        pageTitle="Customers"
      >
        <div>
          <div className="spacer" />
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <SearchBar
                handleSearch={this.handleSearch}
                disabled={false}
                placeholder="Search Customers"
              />
            </div>
            <div className="col-xs-12 col-md-6 text-right">
              <SuccessButton
                disabled={isFetching}
                loading={false}
                title="New Customer"
                onClick={() => history.push('/customers/create')}
              />
            </div>
          </div>
          <br className="hidden-md hidden-lg" />
          <div className="row">
            <div className="container-fluid">
              {(() => {
                if (isFetching) {
                  return <h4 className="text-center">Loading your Customers...</h4>;
                }
                return (
                  <CustomersTable
                    handlePageChange={this.findCustomers}
                    pagination={pagination}
                    customers={customers}
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


CustomersIndexContainer.propTypes = {
  customersIndex: CustomersIndexPropType.isRequired,
  performCustomersIndexSearch: PropTypes.func.isRequired,
};


CustomersIndexContainer.defaultProps = {};


const mapStateToProps = state => ({
  customersIndex: state.customersIndex,
});


const mapDispatchToProps = () => ({
  performCustomersIndexSearch,
});


export default connect(mapStateToProps, mapDispatchToProps())(CustomersIndexContainer);
