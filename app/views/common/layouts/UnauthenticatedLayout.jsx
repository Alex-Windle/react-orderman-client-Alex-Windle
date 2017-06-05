/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Component imports
import Logo from '../logos/Logo';


/**
 * UnauthenticatedLayout gives you a layout to reuse on your
 * unauthenticated pages like Signup and Login
 *
 * @description Renders:
 *   Logo
 *   children (passed in as prop)
 *
 * PROPS:
 *   children {element} React Element
 *
 * @extends Component
 */
export default class UnauthenticatedLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="text-center">
        <div className="container-fluid spacer">
          <Logo />
        </div>
        <div className="container-fluid spacer">
          <div className="col-md-6 col-md-offset-3">
            {children}
          </div>
        </div>
      </div>
    );
  }
}


UnauthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};


UnauthenticatedLayout.defaultProps = {};
