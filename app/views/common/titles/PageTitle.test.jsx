/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import PageTitle from './PageTitle';


describe('PageTitle component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <PageTitle title="Sample Title" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
