/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { CustomersIndexContainer } from './CustomersIndexContainer';


// Test data imports
import {
  testCustomer,
  testPagination,
} from '../../../spec/specData';


describe('CustomersIndexContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomersIndexContainer
        performCustomersIndexSearch={jest.fn()}
        customersIndex={{
          isFetching: false,
          customers: [testCustomer],
          error: null,
          pagination: testPagination,
        }}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
