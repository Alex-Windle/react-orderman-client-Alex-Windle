/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * @class PageTitle
 * @description Reusable title to use for pages. Sits in AuthenticatedLayout
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
