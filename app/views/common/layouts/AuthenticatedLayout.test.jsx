/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import AuthenticatedLayout from './AuthenticatedLayout';


describe('AuthenticatedLayout component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AuthenticatedLayout
        showBackButton={false}
        pageTitle="Title"
      >
        <h3>Children</h3>
      </AuthenticatedLayout>,
    );

    const target = wrapper.find('h3');
    expect(target.length).toBe(1);
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <AuthenticatedLayout
        showBackButton
        pageTitle="Title"
      >
        <h3>Children</h3>
      </AuthenticatedLayout>,
    );

    const target = wrapper.find('h3');
    expect(target.length).toBe(1);
  });
});
