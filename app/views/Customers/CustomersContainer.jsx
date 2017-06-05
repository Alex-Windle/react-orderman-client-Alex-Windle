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


/**
 * CustomersContainer is a wrapper for the Customers pages of this app
 *
 * @description Renders:
 *   AuthenticatedLayout
 *   CustomersIndex, CustomersShow, or CustomersCreate depending on Route
 *
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
          render={() =>
            <h1>Hello Show!</h1>
          }
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

