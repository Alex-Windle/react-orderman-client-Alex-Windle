/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Custom imports
import { get } from '../../../../utilities/apiUtilities';


export const REQUEST_CUSTOMERS_INDEX_ACTION = 'REQUEST_CUSTOMERS_INDEX_ACTION';
export const RECEIVE_CUSTOMERS_INDEX_SUCCESS = 'RECEIVE_CUSTOMERS_INDEX_SUCCESS';
export const RECEIVE_CUSTOMERS_INDEX_FAILURE = 'RECEIVE_CUSTOMERS_INDEX_FAILURE';


/**
 * @function requestCustomersIndexAction
 * @description Action-creator
 */
const requestCustomersIndexAction = () => ({
  type: REQUEST_CUSTOMERS_INDEX_ACTION,
});


/**
 * @function receiveCustomersIndexSuccess
 * @description Action-creator
 * @param customers
 * @param pagination
 */
const receiveCustomersIndexSuccess = (customers, pagination) => ({
  type: RECEIVE_CUSTOMERS_INDEX_SUCCESS,
  payload: {
    customers,
    pagination,
  },
});


/**
 * @function receiveCustomersIndexFailure
 * @description Action-creator
 * @param error
 */
const receiveCustomersIndexFailure = error => ({
  type: RECEIVE_CUSTOMERS_INDEX_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function performCustomersIndexSearch
 * @description GET /customers for retrieving Customers
 * @param page
 * @param searchTerm
 */
export const performCustomersIndexSearch = (page = 1, searchTerm) =>
  (dispatch) => {
    dispatch(requestCustomersIndexAction());
    const basePath = `/customers?page=${page}`;
    const path = searchTerm ? `${basePath}&searchTerm=${searchTerm}` : basePath;
    return get(path)
      .then((response) => {
        const pagination = {
          total: response.total,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };

        dispatch(receiveCustomersIndexSuccess(response.docs, pagination));
      })
      .catch((e) => {
        dispatch(receiveCustomersIndexFailure(e));
      });
  };
