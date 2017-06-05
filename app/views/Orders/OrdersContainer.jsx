/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// Component imports
import OrdersCreateContainer from './Create/OrdersCreateContainer';
import OrdersIndexContainer from './Index/OrdersIndexContainer';
import OrdersShowContainer from './Show/OrdersShowContainer';


/**
 * OrdersContainer is a wrapper for the Orders pages of this app
 *
 * @description Renders:
 *   AuthenticatedLayout
 *   OrdersIndex, OrdersShow, or OrdersCreate depending on Route
 *
 */
export default class OrdersContainer extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/orders/create/:customer_id"
          component={OrdersCreateContainer}
        />
        <Route
          exact
          path="/orders/:id"
          component={OrdersShowContainer}
        />
        <Route
          path="/orders"
          component={OrdersIndexContainer}
        />
      </Switch>
    );
  }
}


OrdersContainer.propTypes = {};


OrdersContainer.defaultProps = {};

