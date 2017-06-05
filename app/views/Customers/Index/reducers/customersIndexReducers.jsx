/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_CUSTOMERS_INDEX_ACTION,
  RECEIVE_CUSTOMERS_INDEX_SUCCESS,
  RECEIVE_CUSTOMERS_INDEX_FAILURE,
} from '../actions/customersIndexActions';


export const initialState = {
  isFetching: false,
  customers: [],
  pagination: {
    total: 0,
    limit: 10,
    page: 1,
    pages: 1,
  },
  error: null,
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_CUSTOMERS_INDEX_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_CUSTOMERS_INDEX_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
        customers: payload.customers,
        pagination: payload.pagination,
      };
    case RECEIVE_CUSTOMERS_INDEX_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
