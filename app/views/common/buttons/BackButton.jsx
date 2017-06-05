/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

/**
 * BackButton is a button used for back actions.
 *
 * @description Renders a Bootstrap button that can have:
 *
 * @extends Component
 */
export default class BackButton extends Component {
  render() {
    return (
      <h4>
        <a
          role="button"
          onClick={() => hashHistory.goBack()}
        >
          Go Back
        </a>
      </h4>
    );
  }
}


BackButton.propTypes = {};


BackButton.defaultProps = {};
