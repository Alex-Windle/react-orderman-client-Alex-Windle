/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import Logo from './Logo';


describe('Logo component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Logo />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
