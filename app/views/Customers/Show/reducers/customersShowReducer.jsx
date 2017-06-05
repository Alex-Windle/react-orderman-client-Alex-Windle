/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_CUSTOMERS_SHOW_ACTION,
  RECEIVE_CUSTOMERS_SHOW_SUCCESS,
  RECEIVE_CUSTOMERS_SHOW_FAILURE,
} from '../actions/customersShowActions';


export const initialState = {
  isFetching: false,
  customer: {},
  error: null,
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_CUSTOMERS_SHOW_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_CUSTOMERS_SHOW_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
        customer: payload.customer,
      };
    case RECEIVE_CUSTOMERS_SHOW_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
