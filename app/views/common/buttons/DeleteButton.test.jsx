/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import DeleteButton from './DeleteButton';


describe('DeleteButton component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <DeleteButton onClick={jest.fn()} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
