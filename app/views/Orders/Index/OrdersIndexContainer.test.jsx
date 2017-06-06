/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { OrdersIndexContainer } from './OrdersIndexContainer';


// Test data imports
import {
  testOrder,
  testPagination,
} from '../../../spec/specData';


describe('OrdersIndexContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <OrdersIndexContainer
        performOrdersIndexAction={jest.fn()}
        ordersIndex={{
          isFetching: false,
          orders: [testOrder],
          error: null,
          pagination: testPagination,
        }}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
