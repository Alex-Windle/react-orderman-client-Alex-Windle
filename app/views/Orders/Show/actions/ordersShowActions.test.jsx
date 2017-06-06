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
} from '../../../../spec/specData';


// Functional imports
import {
  performRetrieveOrder,
  performUpdateOrder,
  performDeleteOrder,
  REQUEST_ORDERS_SHOW_ACTION,
  RECEIVE_ORDERS_SHOW_SUCCESS,
  RECEIVE_ORDERS_SHOW_FAILURE,
  RECEIVE_ORDERS_DELETE_SUCCESS,
  RECEIVE_ORDERS_DELETE_FAILURE,
} from './ordersShowActions';


const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axiosInstance);
let store = {};


describe('ordersShowActions', () => {
  beforeEach(() => {
    store = mockStore({});
    mockAdapter.reset();
  });

  it('performRetrieveOrder success', async () => {
    mockAdapter.onGet('/orders/abc').replyOnce(200, {
      data: {
        order: testOrder,
      },
    });

    try {
      await store.dispatch(performRetrieveOrder('abc'));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_SHOW_ACTION,
        RECEIVE_ORDERS_SHOW_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performRetrieveOrder failure', async () => {
    mockAdapter.onGet('/orders/abc').replyOnce(400, testError);

    try {
      await store.dispatch(performRetrieveOrder('abc'));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_SHOW_ACTION,
        RECEIVE_ORDERS_SHOW_FAILURE,
      ]);
    }
  });


  it('performUpdateOrder success', async () => {
    mockAdapter.onPatch('/orders/abc').replyOnce(200, {
      data: {
        order: testOrder,
      },
    });

    try {
      await store.dispatch(performUpdateOrder('abc', {}));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_SHOW_ACTION,
        RECEIVE_ORDERS_SHOW_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });

  it('performUpdateOrder failure', async () => {
    mockAdapter.onPatch('/orders/abc').replyOnce(400, testError);

    try {
      await store.dispatch(performUpdateOrder('abc', {}));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_SHOW_ACTION,
        RECEIVE_ORDERS_SHOW_FAILURE,
      ]);
    }
  });


  it('performDeleteOrder success', async () => {
    mockAdapter.onDelete('/orders/abc').replyOnce(200, {
      data: {},
    });

    try {
      await store.dispatch(performDeleteOrder('abc'));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_SHOW_ACTION,
        RECEIVE_ORDERS_DELETE_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performDeleteOrder failure', async () => {
    mockAdapter.onDelete('/orders/abc').replyOnce(400, testError);

    try {
      await store.dispatch(performDeleteOrder('abc'));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_SHOW_ACTION,
        RECEIVE_ORDERS_DELETE_FAILURE,
      ]);
    }
  });
});
