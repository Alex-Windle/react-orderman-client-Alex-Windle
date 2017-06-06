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
  testCustomer,
} from '../../../../spec/specData';


// Functional imports
import {
  performRetrieveCustomer,
  performUpdateCustomer,
  REQUEST_CUSTOMERS_SHOW_ACTION,
  RECEIVE_CUSTOMERS_SHOW_SUCCESS,
  RECEIVE_CUSTOMERS_SHOW_FAILURE,
} from './customersShowActions';


const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axiosInstance);
let store = {};


describe('customersShowActions', () => {
  beforeEach(() => {
    store = mockStore({});
    mockAdapter.reset();
  });

  it('performRetrieveCustomer success', async () => {
    mockAdapter.onGet('/customers/abc').replyOnce(200, {
      data: {
        customer: testCustomer,
      },
    });

    try {
      await store.dispatch(performRetrieveCustomer('abc'));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_SHOW_ACTION,
        RECEIVE_CUSTOMERS_SHOW_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performRetrieveCustomer failure', async () => {
    mockAdapter.onGet('/customers/abc').replyOnce(400, testError);

    try {
      await store.dispatch(performRetrieveCustomer('abc'));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_SHOW_ACTION,
        RECEIVE_CUSTOMERS_SHOW_FAILURE,
      ]);
    }
  });


  it('performUpdateCustomer success', async () => {
    mockAdapter.onPatch('/customers/abc').replyOnce(200, {
      data: {
        customer: testCustomer,
      },
    });

    try {
      await store.dispatch(performUpdateCustomer('abc', {}));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_SHOW_ACTION,
        RECEIVE_CUSTOMERS_SHOW_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });

  it('performUpdateCustomer failure', async () => {
    mockAdapter.onPatch('/customers/abc').replyOnce(400, testError);

    try {
      await store.dispatch(performUpdateCustomer('abc', {}));
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_SHOW_ACTION,
        RECEIVE_CUSTOMERS_SHOW_FAILURE,
      ]);
    }
  });
});
