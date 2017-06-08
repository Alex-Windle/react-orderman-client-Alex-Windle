/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';

import {
  Route,
  Switch,
} from 'react-router-dom';


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
 * @class Routes
 * @description The client-side router for the app
 * @description Different components should be rendered depending on route.
 * These components we render are the "pages" of our app.
 * @description We're not using an "exact" match route, so
 *   any route starting with "/customers" will render the CustomersContainer, protected by an HOC
 *   any route starting with "/orders" will render the OrdersContainer, protected by an HOC
 *   any route starting with anything other than "/customers"
 *     will render the UnauthenticatedContainer, protected by an HOC
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
