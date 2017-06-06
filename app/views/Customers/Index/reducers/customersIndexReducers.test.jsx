import {
  REQUEST_CUSTOMERS_INDEX_ACTION,
  RECEIVE_CUSTOMERS_INDEX_SUCCESS,
  RECEIVE_CUSTOMERS_INDEX_FAILURE,
} from '../actions/customersIndexActions';

import reducer, { initialState } from './customersIndexReducers';

import {
  testError,
  testCustomer,
  testPagination,
} from '../../../../spec/specData';

describe(REQUEST_CUSTOMERS_INDEX_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_CUSTOMERS_INDEX_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_CUSTOMERS_INDEX_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_CUSTOMERS_INDEX_SUCCESS,
      payload: {
        customers: [testCustomer],
        pagination: testPagination,
      },
    };
    const expected = {
      ...initialState,
      customers: [testCustomer],
      pagination: testPagination,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_CUSTOMERS_INDEX_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_CUSTOMERS_INDEX_FAILURE,
      payload: {
        error: testError,
      },
    };
    const expected = {
      ...initialState,
      error: testError,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
