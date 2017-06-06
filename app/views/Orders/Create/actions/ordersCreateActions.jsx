/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import { post } from '../../../../utilities/apiUtilities';
import { history } from '../../../Routes';


export const REQUEST_ORDERS_CREATE_ACTION = 'REQUEST_ORDERS_CREATE_ACTION';
export const RECEIVE_ORDERS_CREATE_SUCCESS = 'RECEIVE_ORDERS_CREATE_SUCCESS';
export const RECEIVE_ORDERS_CREATE_FAILURE = 'RECEIVE_ORDERS_CREATE_FAILURE';


const requestOrdersCreateAction = () => ({
  type: REQUEST_ORDERS_CREATE_ACTION,
});


const receiveOrdersCreateSuccess = () => ({
  type: RECEIVE_ORDERS_CREATE_SUCCESS,
});


const receiveOrdersCreateFailure = error => ({
  type: RECEIVE_ORDERS_CREATE_FAILURE,
  payload: {
    error,
  },
});


export const performOrdersCreateAction = params =>
  (dispatch) => {
    dispatch(requestOrdersCreateAction());
    return post('/orders', params)
      .then(() => {
        dispatch(receiveOrdersCreateSuccess());
        history.goBack();
      })
      .catch((e) => {
        dispatch(receiveOrdersCreateFailure(e));
      });
  };
