/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Component imports


/**
 * @class UnauthenticatedLayout
 * @description Reusable layout to reuse on your
 * unauthenticated pages like Signup and Login
 *
 */
export default class UnauthenticatedLayout extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>{children}</div>
    );
  }
}


UnauthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};


UnauthenticatedLayout.defaultProps = {};
