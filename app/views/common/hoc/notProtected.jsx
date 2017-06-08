/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


// Custom imports
import {
  isNotAuthenticated,
} from '../../../utilities/authUtilities';

import {
  LocationPropType,
} from '../../../customPropTypes';


/**
 * @description HOC to detect authentication status and route accordingly
 * Requires a user to be unauthenticated in order to access the component
 *
 */
export default (BaseComponent) => {
  class NotProtected extends Component {
    componentWillMount() {
      isNotAuthenticated();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        isNotAuthenticated();
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }


  NotProtected.propTypes = {
    location: LocationPropType.isRequired,
  };

  return withRouter(NotProtected);
};
