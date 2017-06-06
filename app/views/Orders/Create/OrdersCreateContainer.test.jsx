/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { OrdersCreateContainer } from './OrdersCreateContainer';


// Test data import
import {
  testMatch,
  testCustomer,
} from '../../../spec/specData';


describe('OrdersCreateContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <OrdersCreateContainer
        match={testMatch}
        customersShow={{
          isFetching: false,
          customer: testCustomer,
          error: null,
        }}
        performRetrieveCustomer={jest.fn()}
        performOrdersCreateAction={jest.fn()}
        ordersCreateForm={{}}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
