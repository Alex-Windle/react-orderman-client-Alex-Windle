/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { OrdersShowContainer } from './OrdersShowContainer';


// Test data imports
import {
  testMatch,
  testOrder,
} from '../../../spec/specData';


describe('OrdersShowContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <OrdersShowContainer
        match={testMatch}
        performDeleteOrder={jest.fn()}
        performUpdateOrder={jest.fn()}
        performRetrieveOrder={jest.fn()}
        ordersShow={{
          isFetching: false,
          error: null,
          order: testOrder,
        }}
        orderDetailsForm={{}}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
