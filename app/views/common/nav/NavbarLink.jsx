/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/**
 * NavbarLink represents a link in the Navbar of the application.
 *
 * @description NavbarLink renders a React-Router Link component in a standardized way.
 *
 * @extends Component
 */
export default class NavbarLink extends Component {
  render() {
    const { pathname, path, title } = this.props;
    return (
      <li className={pathname === path ? 'active' : ''}>
        <Link to={path}>{title}</Link>
      </li>
    );
  }
}


NavbarLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


NavbarLink.defaultProps = {};
