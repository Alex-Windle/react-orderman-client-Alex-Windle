/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { OrderDetailsForm } from './OrderDetailsForm';


describe('OrderDetailsForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <OrderDetailsForm
        handleSubmit={jest.fn()}
        invalid={false}
        pristine={false}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
