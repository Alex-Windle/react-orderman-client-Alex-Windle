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
} from '../../../../spec/specData';


// Functional imports
import {
  performOrdersCreateAction,
  REQUEST_ORDERS_CREATE_ACTION,
  RECEIVE_ORDERS_CREATE_SUCCESS,
  RECEIVE_ORDERS_CREATE_FAILURE,
} from './ordersCreateActions';


const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axiosInstance);
let store = {};


const testOrdersCreateData = {
  date: '2018-09-01',
  status: 'NEW',
  description: 'This is a test description',
};


describe('ordersCreateActions', () => {
  beforeEach(() => {
    store = mockStore({});
    mockAdapter.reset();
  });

  it('performOrdersCreateAction success', async () => {
    mockAdapter.onPost('/orders').replyOnce(200, {
      data: null,
    });

    try {
      await store.dispatch(performOrdersCreateAction(testOrdersCreateData));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_CREATE_ACTION,
        RECEIVE_ORDERS_CREATE_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performOrdersCreateAction failure', async () => {
    mockAdapter.onPost('/orders').replyOnce(400, testError);

    try {
      await store.dispatch(performOrdersCreateAction(testOrdersCreateData));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_ORDERS_CREATE_ACTION,
        RECEIVE_ORDERS_CREATE_FAILURE,
      ]);
    }
  });
});
