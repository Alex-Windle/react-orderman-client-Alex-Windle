/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_ORDERS_INDEX_ACTION,
  RECEIVE_ORDERS_INDEX_SUCCESS,
  RECEIVE_ORDERS_INDEX_FAILURE,
} from '../actions/ordersIndexActions';


export const initialState = {
  isFetching: false,
  error: null,
  orders: [],
  pagination: {
    total: 0,
    limit: 10,
    page: 1,
    pages: 1,
  },
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ORDERS_INDEX_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_ORDERS_INDEX_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
        orders: payload.orders,
        pagination: payload.pagination,
      };
    case RECEIVE_ORDERS_INDEX_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
