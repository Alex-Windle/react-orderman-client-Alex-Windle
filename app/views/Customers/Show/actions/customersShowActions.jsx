/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Custom imports
import { get, patch } from '../../../../utilities/apiUtilities';

export const REQUEST_CUSTOMERS_SHOW_ACTION = 'REQUEST_CUSTOMERS_SHOW_ACTION';
export const RECEIVE_CUSTOMERS_SHOW_SUCCESS = 'RECEIVE_CUSTOMERS_SHOW_SUCCESS';
export const RECEIVE_CUSTOMERS_SHOW_FAILURE = 'RECEIVE_CUSTOMERS_SHOW_FAILURE';


const requestCustomersShowAction = () => ({
  type: REQUEST_CUSTOMERS_SHOW_ACTION,
});


const receiveCustomersShowSuccess = customer => ({
  type: RECEIVE_CUSTOMERS_SHOW_SUCCESS,
  payload: {
    customer,
  },
});


const receiveCustomersShowFailure = error => ({
  type: RECEIVE_CUSTOMERS_SHOW_FAILURE,
  payload: {
    error,
  },
});

export const performRetrieveCustomer = id =>
  (dispatch) => {
    dispatch(requestCustomersShowAction());
    return get(`/customers/${id}`)
      .then((response) => {
        dispatch(receiveCustomersShowSuccess(response.customer));
      })
      .catch((e) => {
        dispatch(receiveCustomersShowFailure(e));
      });
  };

export const performUpdateCustomer = (id, updates) =>
  (dispatch) => {
    dispatch(requestCustomersShowAction());
    return patch(`/customers/${id}`, updates)
      .then((response) => {
        dispatch(receiveCustomersShowSuccess(response.customer));
      })
      .catch((e) => {
        dispatch(receiveCustomersShowFailure(e));
      });
  };
