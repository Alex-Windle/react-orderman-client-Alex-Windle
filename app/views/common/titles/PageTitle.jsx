/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * PageTitle represents a title at the top of each authenticated page that
 * tells the user where they are.
 *
 * @description Renders a heading element that takes:
 *   title
 *
 * @extends Component
 */
export default class PageTitle extends Component {
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}


PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};


PageTitle.defaultProps = {};
