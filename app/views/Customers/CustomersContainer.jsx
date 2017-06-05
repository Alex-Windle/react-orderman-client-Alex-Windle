/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


// Component imports
import AuthenticatedLayout from '../common/layouts/AuthenticatedLayout';


// Actions imports


// Other imports
import {} from '../../customPropTypes';


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
      <AuthenticatedLayout pageTitle="Hello">
        <Switch>
          <Route
            exact
            path="/customers/create"
            render={props =>
              <h1>Hello Create!</h1>
            }
          />
          <Route
            exact
            path="/customers/:id"
            render={props =>
              <h1>Hello Show!</h1>
            }
          />
          <Route
            path="/customers"
            render={props =>
              <h1>Hello Index!</h1>
            }
          />
        </Switch>
      </AuthenticatedLayout>
    );
  }
}


CustomersContainer.propTypes = {};


CustomersContainer.defaultProps = {};

