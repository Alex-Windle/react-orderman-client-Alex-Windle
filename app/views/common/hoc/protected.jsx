/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


// Custom imports
import {
  isAuthenticated,
} from '../../../utilities/authUtilities';

/**
 * HOC to detect Authentication Status and Route
 */
export default BaseComponent => {
  class Protected extends Component {
    componentWillMount() {
      isAuthenticated();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        isAuthenticated();
      }
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }
  return withRouter(Protected);
}
