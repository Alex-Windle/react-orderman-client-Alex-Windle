/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { SignupForm } from './SignupForm';


describe('SignupForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SignupForm
        loading={false}
        handleSubmit={jest.fn()}
        invalid={false}
        pristine={false}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
