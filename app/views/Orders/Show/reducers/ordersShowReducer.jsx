/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_ORDERS_SHOW_ACTION,
  RECEIVE_ORDERS_SHOW_SUCCESS,
  RECEIVE_ORDERS_SHOW_FAILURE,
} from '../actions/ordersShowActions';


export const initialState = {
  isFetching: false,
  order: {},
  error: null,
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ORDERS_SHOW_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_ORDERS_SHOW_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
        order: payload.order,
      };
    case RECEIVE_ORDERS_SHOW_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
