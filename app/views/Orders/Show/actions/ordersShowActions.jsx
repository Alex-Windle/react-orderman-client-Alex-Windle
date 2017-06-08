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


/**
 * @function requestOrdersShowAction
 * @description Action-creator
 */
const requestOrdersShowAction = () => ({
  type: REQUEST_ORDERS_SHOW_ACTION,
});


/**
 * @function receiveOrdersShowSuccess
 * @description Action-creator
 * @param order
 */
const receiveOrdersShowSuccess = order => ({
  type: RECEIVE_ORDERS_SHOW_SUCCESS,
  payload: {
    order,
  },
});


/**
 * @function receiveOrdersShowFailure
 * @description Action-creator
 * @param error
 */
const receiveOrdersShowFailure = error => ({
  type: RECEIVE_ORDERS_SHOW_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function receiveOrdersDeleteSuccess
 * @description Action-creator
 */
const receiveOrdersDeleteSuccess = () => ({
  type: RECEIVE_ORDERS_DELETE_SUCCESS,
  payload: {
    order: {},
  },
});


/**
 * @function receiveOrdersDeleteFailure
 * @description Action-creator
 * @param error
 */
const receiveOrdersDeleteFailure = error => ({
  type: RECEIVE_ORDERS_DELETE_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function performRetrieveOrder
 * @description GET /orders/:id to Retrieve a specific Order
 * @param id
 */
export const performRetrieveOrder = id =>
  (dispatch) => {
    dispatch(requestOrdersShowAction());
    return get(`/orders/${id}`)
      .then((response) => {
        dispatch(receiveOrdersShowSuccess(response.order));
      })
      .catch((e) => {
        dispatch(receiveOrdersShowFailure(e));
      });
  };


/**
 * @function performUpdateOrder
 * @description PATCH /orders/:id Udpate a specific Order
 * @param id
 * @param updates
 */
export const performUpdateOrder = (id, updates) =>
  (dispatch) => {
    dispatch(requestOrdersShowAction());
    return patch(`/orders/${id}`, updates)
      .then((response) => {
        dispatch(receiveOrdersShowSuccess(response.order));
      })
      .catch((e) => {
        dispatch(receiveOrdersShowFailure(e));
      });
  };


/**
 * @function performDeleteOrder
 * @description DELETE /orders/:id Delete a specific Order
 * @param id
 */
export const performDeleteOrder = id =>
  (dispatch) => {
    dispatch(requestOrdersShowAction());
    return del(`/orders/${id}`)
      .then(() => {
        dispatch(receiveOrdersDeleteSuccess());
        history.goBack();
      })
      .catch((e) => {
        dispatch(receiveOrdersDeleteFailure(e));
      });
  };
