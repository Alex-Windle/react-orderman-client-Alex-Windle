/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This is where your app kicks off
 * This is where we take a base React component and connect it to the DOM
 */


// Module imports
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


/**
 * Even though we don't import anything, this allows
 * for the CSS files to be included in the project.
 */
import {} from './styles/cssImports';


// Component imports
import Routes from './views/Routes';


/**
 * We're saying that the <App /> should be mounted on the div with
 * ID 'app'. If you look at our `index.ejs` file, you'll see that
 * there is a simple div with the ID 'app'.
 */
ReactDOM.render(
  <Routes />,
  document.getElementById('app'),
);
