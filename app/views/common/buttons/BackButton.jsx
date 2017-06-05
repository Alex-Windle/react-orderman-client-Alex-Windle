/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';


// Custom imports
import { history } from '../../Routes';

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
          onClick={() => history.goBack()}
        >
          Go Back
        </a>
      </h4>
    );
  }
}


BackButton.propTypes = {};


BackButton.defaultProps = {};
