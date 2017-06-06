/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { LoginForm } from './LoginForm';


describe('LoginForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LoginForm
        loading={false}
        handleSubmit={jest.fn()}
        invalid={false}
        pristine={false}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
