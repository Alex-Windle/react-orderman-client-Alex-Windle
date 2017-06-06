/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import UnauthenticatedLayout from './UnauthenticatedLayout';


describe('UnauthenticatedLayout component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <UnauthenticatedLayout
        pageTitle="Title"
      >
        <h3>Children</h3>
      </UnauthenticatedLayout>,
    );

    const target = wrapper.find('h3');
    expect(target.length).toBe(1);
  });
});
