import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from '../logos/Logo';

/**
 * @class UnauthenticatedLayout
 * @description Reusable layout to reuse on your
 * unauthenticated pages like Signup and Login
 *
 */
export default class UnauthenticatedLayout extends Component {
  render() {
    // I don't totally understand how props are being passed to Layout via
    // the children components, Route/Switch. See Unauth Container.
    const children = this.props.children;
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

// Question: I've never seen props passed down in this manner.
// If you look in UnauthContainer, UnauthLayout contains a Switch and Route
// components, the route components contain the props path, render. How does
// it work that the Route component passes props to UnauthLayout?
UnauthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

UnauthenticatedLayout.defaultProps = {};
