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
  performCustomersCreateAction,
  REQUEST_CUSTOMERS_CREATE_ACTION,
  RECEIVE_CUSTOMERS_CREATE_SUCCESS,
  RECEIVE_CUSTOMERS_CREATE_FAILURE,
} from './customersCreateActions';


const testCredentials = {
  first_name: 'First',
  last_name: 'last',
  email: 'test@email.com',
};


const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axiosInstance);
let store = {};


describe('customersCreateActions', () => {
  beforeEach(() => {
    store = mockStore({});
    mockAdapter.reset();
  });

  it('performCustomersCreateAction success', async () => {
    mockAdapter.onPost('/customers').replyOnce(201, {
      data: null,
    });

    try {
      await store.dispatch(performCustomersCreateAction(testCredentials));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_CREATE_ACTION,
        RECEIVE_CUSTOMERS_CREATE_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performCustomersCreateAction failure', async () => {
    mockAdapter.onPost('/customers').replyOnce(400, testError);

    try {
      await store.dispatch(performCustomersCreateAction(testCredentials));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_CREATE_ACTION,
        RECEIVE_CUSTOMERS_CREATE_FAILURE,
      ]);
    }
  });
});
