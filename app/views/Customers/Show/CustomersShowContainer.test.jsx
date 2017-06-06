/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { CustomersShowContainer } from './CustomersShowContainer';


// Test data imports
import {
  testCustomer,
  testMatch,
  testOrder,
  testPagination,
} from '../../../spec/specData';


describe('CustomersShowContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomersShowContainer
        ordersIndex={{
          isFetching: false,
          orders: [testOrder],
          error: null,
          pagination: testPagination,
        }}
        performOrdersIndexAction={jest.fn()}
        performRetrieveCustomer={jest.fn()}
        performUpdateCustomer={jest.fn()}
        customersShow={{
          isFetching: false,
          customer: testCustomer,
          error: null,
        }}
        match={testMatch}
        customerDetailsForm={{}}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
