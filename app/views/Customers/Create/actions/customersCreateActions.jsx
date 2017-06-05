/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports


// Custom imports
import { history } from '../../../Routes';
import { post } from '../../../../utilities/apiUtilities';

export const REQUEST_CUSTOMERS_CREATE_ACTION = 'REQUEST_CUSTOMERS_CREATE_ACTION';
export const RECEIVE_CUSTOMERS_CREATE_SUCCESS = 'RECEIVE_CUSTOMERS_CREATE_SUCCESS';
export const RECEIVE_CUSTOMERS_CREATE_FAILURE = 'RECEIVE_CUSTOMERS_CREATE_FAILURE';


const requestCustomersCreateAction = () => ({
  type: REQUEST_CUSTOMERS_CREATE_ACTION,
});


const receiveCustomersCreateSuccess = () => ({
  type: RECEIVE_CUSTOMERS_CREATE_SUCCESS,
});


const receiveCustomersCreateFailure = error => ({
  type: RECEIVE_CUSTOMERS_CREATE_FAILURE,
  payload: {
    error,
  },
});

export const performCustomersCreateAction = params =>
  (dispatch) => {
    dispatch(requestCustomersCreateAction());
    post('/customers', params)
      .then(() => {
        dispatch(receiveCustomersCreateSuccess());
        history.push('/customers');
      })
      .catch((e) => {
        dispatch(receiveCustomersCreateFailure(e));
      });
  };
