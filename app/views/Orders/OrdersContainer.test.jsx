/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import OrdersContainer from './OrdersContainer';


describe('OrdersContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <OrdersContainer />,
    );

    expect(wrapper).toBeTruthy();
  });
});
