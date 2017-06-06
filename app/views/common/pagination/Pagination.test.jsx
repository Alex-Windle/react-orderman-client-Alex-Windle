/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import Pagination from './Pagination';


// Data imports
import {
  testPagination,
} from '../../../spec/specData';


describe('Pagination component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Pagination
        handlePageChange={jest.fn()}
        pagination={testPagination}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
