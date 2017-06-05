/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Module imports
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


// Custom reducer imports


const appReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
});

export default (state, action) => appReducer(state, action);
