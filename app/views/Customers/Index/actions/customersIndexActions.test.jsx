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
  testPagination,
} from '../../../../spec/specData';


// Functional imports
import {
  performCustomersIndexSearch,
  REQUEST_CUSTOMERS_INDEX_ACTION,
  RECEIVE_CUSTOMERS_INDEX_SUCCESS,
  RECEIVE_CUSTOMERS_INDEX_FAILURE,
} from './customersIndexActions';


const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axiosInstance);
let store = {};


describe('customersIndexActions', () => {
  beforeEach(() => {
    store = mockStore({});
    mockAdapter.reset();
  });

  it('performCustomersIndexSearch success', async () => {
    mockAdapter.onGet('/customers?page=1').replyOnce(200, {
      data: {
        customers: [testCustomer],
        pagination: testPagination,
      },
    });

    try {
      await store.dispatch(performCustomersIndexSearch());
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_INDEX_ACTION,
        RECEIVE_CUSTOMERS_INDEX_SUCCESS,
      ]);
    } catch (e) {
      expect(false).toBeTruthy();
    }
  });


  it('performCustomersIndexAction failure', async () => {
    mockAdapter.onGet('/customers?page=1').replyOnce(400, testError);

    try {
      await store.dispatch(performCustomersIndexSearch());
      expect(false).toBeTruthy();
    } catch (e) {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual([
        REQUEST_CUSTOMERS_INDEX_ACTION,
        RECEIVE_CUSTOMERS_INDEX_FAILURE,
      ]);
    }
  });
});
