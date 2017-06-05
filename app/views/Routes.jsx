/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import {
  Route,
  Switch,
} from 'react-router-dom';


import createHashHistory from 'history/createHashHistory';


// Component imports
import CustomersContainer from './Customers/CustomersContainer';
import notProtectedHOC from './common/hoc/notProtected';
import OrdersContainer from './Orders/OrdersContainer';
import protectedHOC from './common/hoc/protected';
import UnauthenticatedContainer from './Unauthenticated/UnauthenticatedContainer';


// Redux imports
import store from '../store/configureStore';


// Create and export history object for ConnectedRouter
export const history = createHashHistory();


/**
 * Class representing the client-side router for the app
 *
 * @description Depending on the route shown, a different component should
 * be rendered. These components we render are the "pages" of our app.
 *
 * @extends Component
 */
export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path="/customers"
              component={protectedHOC(CustomersContainer)}
            />
            <Route
              path="/orders"
              component={protectedHOC(OrdersContainer)}
            />
            <Route
              path="/"
              component={notProtectedHOC(UnauthenticatedContainer)}
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
