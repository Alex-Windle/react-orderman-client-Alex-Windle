/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import { shallow } from 'enzyme';


// Component imports
import { CustomersCreateContainer } from './CustomersCreateContainer';


describe('CustomersCreateContainer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomersCreateContainer
        performCustomersCreateAction={jest.fn()}
        customersCreateForm={{}}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
