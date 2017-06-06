/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';


// Constant imports
import { axiosInstance } from '../../../../utilities/apiUtilities';


// Test data imports
import {
  testError,
  testOrder,
  testPagination,
} from '../../../../spec/specData';


// Functional imports
import {
  performOrdersIndexAction,
  REQUEST_ORDERS_INDEX_ACTION,
  RECEIVE_ORDERS_INDEX_SUCCESS,
  RECEIVE_ORDERS_INDEX_FAILURE,
} from './ordersIndexActions';


const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axiosInstance);
let store = {};


describe('ordersIndexActions', () => {
  beforeEach(() => {
    store = mockStore({});
    mockAdapter.reset();
  });

  it('performOrdersIndexAction success', async () => {
    mockAdapter.onGet('/orders?page=1').replyOnce(200, {
      data: {
        orders: [testOrder],
        pagination: testPagination,
      },
    });

    try {
      await store.dispatch(performOrdersIndexAction(1));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_INDEX_ACTION,
        RECEIVE_ORDERS_INDEX_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performOrdersIndexAction failure', async () => {
    mockAdapter.onGet('/orders?page=1').replyOnce(400, testError);

    try {
      await store.dispatch(performOrdersIndexAction(1));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_INDEX_ACTION,
        RECEIVE_ORDERS_INDEX_FAILURE,
      ]);
    }
  });
});
