/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import CustomersTable from './CustomersTable';


// Test data imports
import {
  testCustomer,
  testPagination,
} from '../../../../spec/specData';


describe('CustomersTable component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <CustomersTable
        pagination={testPagination}
        handlePageChange={jest.fn()}
        customers={testCustomer}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
