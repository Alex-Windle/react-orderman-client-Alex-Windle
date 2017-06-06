/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import renderer from 'react-test-renderer';


// Component imports
import SuccessButton from './SuccessButton';


describe('SuccessButton component', () => {
  it('matches snapshot- not loading, not disabled, not block', () => {
    const tree = renderer.create(
      <SuccessButton
        title="Go"
        onClick={jest.fn()}
        loading={false}
        disabled={false}
        block={false}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot- not loading, not disabled, block', () => {
    const tree = renderer.create(
      <SuccessButton
        block
        title="Go"
        onClick={jest.fn()}
        loading={false}
        disabled={false}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot- not loading, disabled, block', () => {
    const tree = renderer.create(
      <SuccessButton
        disabled
        title="Go"
        onClick={jest.fn()}
        loading={false}
        block={false}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot- loading, disabled, block', () => {
    const tree = renderer.create(
      <SuccessButton
        block
        disabled
        loading
        title="Go"
        onClick={jest.fn()}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
