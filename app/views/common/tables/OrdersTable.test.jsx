/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import OrdersTable from './OrdersTable';


// Data imports
import {
  testOrder,
  testPagination,
} from '../../../spec/specData';


describe('OrdersTable component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <OrdersTable
        pagination={testPagination}
        handlePageChange={jest.fn()}
        orders={[testOrder]}
      />,
    );

    const target = wrapper.find('tr');
    expect(target.length).toBe(2);
  });
});
