/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import { history } from '../../../Routes';
import { post } from '../../../../utilities/apiUtilities';


export const REQUEST_CUSTOMERS_CREATE_ACTION = 'REQUEST_CUSTOMERS_CREATE_ACTION';
export const RECEIVE_CUSTOMERS_CREATE_SUCCESS = 'RECEIVE_CUSTOMERS_CREATE_SUCCESS';
export const RECEIVE_CUSTOMERS_CREATE_FAILURE = 'RECEIVE_CUSTOMERS_CREATE_FAILURE';


/**
 * @function requestCustomersCreateAction
 * @description Action-creator
 */
const requestCustomersCreateAction = () => ({
  type: REQUEST_CUSTOMERS_CREATE_ACTION,
});


/**
 * @function receiveCustomersCreateSuccess
 * @description Action-creator
 */
const receiveCustomersCreateSuccess = () => ({
  type: RECEIVE_CUSTOMERS_CREATE_SUCCESS,
});


/**
 * @function receiveCustomersCreateFailure
 * @description Action-creator
 * @param error
 */
const receiveCustomersCreateFailure = error => ({
  type: RECEIVE_CUSTOMERS_CREATE_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function performCustomersCreateAction
 * @description POSTS to /customers to create a customer
 * @param params
 */
export const performCustomersCreateAction = params =>
  (dispatch) => {
    dispatch(requestCustomersCreateAction());
    return post('/customers', params)
      .then(() => {
        dispatch(receiveCustomersCreateSuccess());
        history.push('/customers');
      })
      .catch((e) => {
        dispatch(receiveCustomersCreateFailure(e));
      });
  };
