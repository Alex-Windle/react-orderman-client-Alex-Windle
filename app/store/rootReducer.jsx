/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Module imports
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


// Custom reducer imports
import authReducer from '../views/Unauthenticated/reducers/authReducer';
import customersCreateReducer from '../views/Customers/Create/reducers/customersCreateReducers';
import customersIndexReducer from '../views/Customers/Index/reducers/customersIndexReducers';
import loginReducer from '../views/Unauthenticated/reducers/loginReducer';
import signupReducer from '../views/Unauthenticated/reducers/signupReducer';


const appReducer = combineReducers({
  auth: authReducer,
  customersCreate: customersCreateReducer,
  customersIndex: customersIndexReducer,
  form: formReducer,
  login: loginReducer,
  routing: routerReducer,
  signup: signupReducer,
});

export default (state, action) => appReducer(state, action);
