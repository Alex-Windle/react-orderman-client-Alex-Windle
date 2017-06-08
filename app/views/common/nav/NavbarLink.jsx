/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/**
 * @class NavbarLink
 * @description A link that sits in the Navbar to route to different pages
 */
export default class NavbarLink extends Component {
  render() {
    const {
      path,
      pathname,
      title,
    } = this.props;

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
