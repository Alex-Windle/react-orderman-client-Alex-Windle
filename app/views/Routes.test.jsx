/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import Routes from './Routes';


describe('Routes component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Routes />,
    );

    expect(wrapper).toBeTruthy();
  });
});
