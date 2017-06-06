/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { CustomerDetailsForm } from './CustomerDetailsForm';


describe('CustomerDetailsForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomerDetailsForm
        handleSubmit={jest.fn()}
        invalid={false}
        pristine={false}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
