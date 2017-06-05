/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import { del, get, patch } from '../../../../utilities/apiUtilities';
import { history } from '../../../Routes';

export const REQUEST_ORDERS_SHOW_ACTION = 'REQUEST_ORDERS_SHOW_ACTION';
export const RECEIVE_ORDERS_SHOW_SUCCESS = 'RECEIVE_ORDERS_SHOW_SUCCESS';
export const RECEIVE_ORDERS_SHOW_FAILURE = 'RECEIVE_ORDERS_SHOW_FAILURE';
export const RECEIVE_ORDERS_DELETE_SUCCESS = 'RECEIVE_ORDERS_DELETE_SUCCESS';
export const RECEIVE_ORDERS_DELETE_FAILURE = 'RECEIVE_ORDERS_DELETE_FAILURE';

const requestOrdersShowAction = () => ({
  type: REQUEST_ORDERS_SHOW_ACTION,
});


const receiveOrdersShowSuccess = order => ({
  type: RECEIVE_ORDERS_SHOW_SUCCESS,
  payload: {
    order,
  },
});


const receiveOrdersShowFailure = error => ({
  type: RECEIVE_ORDERS_SHOW_FAILURE,
  payload: {
    error,
  },
});

const receiveOrdersDeleteSuccess = () => ({
  type: RECEIVE_ORDERS_DELETE_SUCCESS,
  payload: {
    order: {},
  },
});

const receiveOrdersDeleteFailure = error => ({
  type: RECEIVE_ORDERS_DELETE_FAILURE,
  payload: {
    error,
  },
});


export const performRetrieveOrder = id =>
  (dispatch) => {
    dispatch(requestOrdersShowAction());
    get(`/orders/${id}`)
      .then((response) => {
        dispatch(receiveOrdersShowSuccess(response.order));
      })
      .catch((e) => {
        dispatch(receiveOrdersShowFailure(e));
      });
  };


export const performUpdateOrder = (id, updates) =>
  (dispatch) => {
    dispatch(requestOrdersShowAction());
    patch(`/orders/${id}`, updates)
      .then((response) => {
        dispatch(receiveOrdersShowSuccess(response.order));
      })
      .catch((e) => {
        dispatch(receiveOrdersShowFailure(e));
      });
  };


export const performDeleteOrder = id =>
  (dispatch) => {
    dispatch(requestOrdersShowAction());
    del(`/orders/${id}`)
      .then(() => {
        dispatch(receiveOrdersDeleteSuccess());
        history.goBack();
      })
      .catch((e) => {
        dispatch(receiveOrdersDeleteFailure(e));
      });
  };
