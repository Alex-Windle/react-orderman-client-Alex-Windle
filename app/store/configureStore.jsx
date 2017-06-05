/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import thunkMiddleware from 'redux-thunk';
import createHashHistory from 'history/createHashHistory';

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import {
  routerMiddleware,
} from 'react-router-redux';


// Custom imports
import rootReducer from './rootReducer';


/**
 * @description Exports the created Redux Store with
 * Thunk Middleware and Redux DevTools
 */
export default createStore(rootReducer, {}, compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(createHashHistory()),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
