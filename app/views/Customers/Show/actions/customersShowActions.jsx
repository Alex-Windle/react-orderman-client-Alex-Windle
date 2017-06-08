/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Custom imports
import { get, patch } from '../../../../utilities/apiUtilities';


export const REQUEST_CUSTOMERS_SHOW_ACTION = 'REQUEST_CUSTOMERS_SHOW_ACTION';
export const RECEIVE_CUSTOMERS_SHOW_SUCCESS = 'RECEIVE_CUSTOMERS_SHOW_SUCCESS';
export const RECEIVE_CUSTOMERS_SHOW_FAILURE = 'RECEIVE_CUSTOMERS_SHOW_FAILURE';


/**
 * @function requestCustomersShowAction
 * @description Action-creator
 */
const requestCustomersShowAction = () => ({
  type: REQUEST_CUSTOMERS_SHOW_ACTION,
});


/**
 * @function receiveCustomersShowSuccess
 * @description Action-creator
 * @param customer
 */
const receiveCustomersShowSuccess = customer => ({
  type: RECEIVE_CUSTOMERS_SHOW_SUCCESS,
  payload: {
    customer,
  },
});


/**
 * @function receiveCustomersShowFailure
 * @description Action-creator
 * @param error
 */
const receiveCustomersShowFailure = error => ({
  type: RECEIVE_CUSTOMERS_SHOW_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function performRetrieveCustomer
 * @description GET /customers/:id to retrieve a specific Customer
 * @param id
 */
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


/**
 * @function performUpdateCustomer
 * @description PATCH /customers/:id to update a specific Customer
 * @param id
 * @param updates
 */
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
