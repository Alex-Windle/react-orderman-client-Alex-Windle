/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// Component imports
import CustomersCreateContainer from './Create/CustomersCreateContainer';
import CustomersIndexContainer from './Index/CustomersIndexContainer';
import CustomersShowContainer from './Show/CustomersShowContainer';


/**
 * @class CustomersContainer
 * @description Routing container for pertinent Customers routes
 *   "/customers/create" exact Route renders the CustomersCreateContainer
 *   "/customers/:id" exact Route renders the CustomersShowContainer
 *   "/customers" Route renders the CustomersIndexContainer
 */
export default class CustomersContainer extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/customers/create"
          component={CustomersCreateContainer}
        />
        <Route
          exact
          path="/customers/:id"
          component={CustomersShowContainer}
        />
        <Route
          path="/customers"
          component={CustomersIndexContainer}
        />
      </Switch>
    );
  }
}


CustomersContainer.propTypes = {};


CustomersContainer.defaultProps = {};

