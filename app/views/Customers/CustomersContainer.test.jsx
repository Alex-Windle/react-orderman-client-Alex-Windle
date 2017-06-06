/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import CustomersContainer from './CustomersContainer';


describe('CustomersContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomersContainer />,
    );

    expect(wrapper).toBeTruthy();
  });
});
