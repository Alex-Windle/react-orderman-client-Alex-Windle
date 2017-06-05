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
import customersShowReducer from '../views/Customers/Show/reducers/customersShowReducer';
import loginReducer from '../views/Unauthenticated/reducers/loginReducer';
import ordersCreateReducer from '../views/Orders/Create/reducers/ordersCreateReducer';
import ordersIndexReducer from '../views/Orders/Index/reducers/ordersIndexReducer';
import ordersShowReducer from '../views/Orders/Show/reducers/ordersShowReducer';
import signupReducer from '../views/Unauthenticated/reducers/signupReducer';


const appReducer = combineReducers({
  auth: authReducer,
  customersCreate: customersCreateReducer,
  customersIndex: customersIndexReducer,
  customersShow: customersShowReducer,
  form: formReducer,
  login: loginReducer,
  ordersCreate: ordersCreateReducer,
  ordersIndex: ordersIndexReducer,
  ordersShow: ordersShowReducer,
  routing: routerReducer,
  signup: signupReducer,
});

export default (state, action) => appReducer(state, action);
