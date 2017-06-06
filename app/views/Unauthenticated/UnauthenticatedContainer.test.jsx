/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { UnauthenticatedContainer } from './UnauthenticatedContainer';


// Test data imports
import {
  testLogin,
  testSignup,
} from '../../spec/specData';


describe('UnauthenticatedContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <UnauthenticatedContainer
        performLogin={jest.fn()}
        performSignup={jest.fn()}
        login={testLogin}
        signup={testSignup}
        signupForm={{}}
        loginForm={{}}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
