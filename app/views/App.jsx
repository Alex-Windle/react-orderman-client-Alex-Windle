/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module Imports
import React, { Component } from 'react';


// Component imports
import SignupContainer from './Signup/SignupContainer';


/**
 * @class App
 * @description This component will only render once, when the app is first loaded.
 * We use it's lifecycle hook componentWillMount to do things that only
 * happen once like creating websocket connections, and starting analytics
 * and error reporting services.
 *
 */
export default class App extends Component {
  render() {
    return <SignupContainer />;
  }
}


App.propTypes = {};


App.defaultProps = {};
