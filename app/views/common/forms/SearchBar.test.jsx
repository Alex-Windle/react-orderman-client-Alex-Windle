/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import SearchBar from './SearchBar';


describe('SearchBar component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <SearchBar
        handleSearch={jest.fn()}
        disabled={false}
        placeholder="Placeholder"
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
