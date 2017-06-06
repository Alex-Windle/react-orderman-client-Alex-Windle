/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Custom imports
import { get } from '../../../../utilities/apiUtilities';

export const REQUEST_ORDERS_INDEX_ACTION = 'REQUEST_ORDERS_INDEX_ACTION';
export const RECEIVE_ORDERS_INDEX_SUCCESS = 'RECEIVE_ORDERS_INDEX_SUCCESS';
export const RECEIVE_ORDERS_INDEX_FAILURE = 'RECEIVE_ORDERS_INDEX_FAILURE';


const requestOrdersIndexAction = () => ({
  type: REQUEST_ORDERS_INDEX_ACTION,
});


const receiveOrdersIndexSuccess = (orders, pagination) => ({
  type: RECEIVE_ORDERS_INDEX_SUCCESS,
  payload: {
    orders,
    pagination,
  },
});


const receiveOrdersIndexFailure = error => ({
  type: RECEIVE_ORDERS_INDEX_FAILURE,
  payload: {
    error,
  },
});

export const performOrdersIndexAction = (page = 1, searchTerm, customer_id) =>
  (dispatch) => {
    dispatch(requestOrdersIndexAction());
    const basePath = `/orders?page=${page}`;
    const enhancedPath = searchTerm ? `${basePath}&searchTerm=${searchTerm}` : basePath;
    const path = customer_id ? `${enhancedPath}&customer_id=${customer_id}` : enhancedPath;
    return get(path)
      .then((response) => {
        const pagination = {
          total: response.total,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };

        dispatch(receiveOrdersIndexSuccess(response.docs, pagination));
      })
      .catch((e) => {
        dispatch(receiveOrdersIndexFailure(e));
      });
  };
