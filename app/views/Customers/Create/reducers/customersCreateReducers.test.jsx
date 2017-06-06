import {
  REQUEST_CUSTOMERS_CREATE_ACTION,
  RECEIVE_CUSTOMERS_CREATE_SUCCESS,
  RECEIVE_CUSTOMERS_CREATE_FAILURE,
} from '../actions/customersCreateActions';

import reducer, { initialState } from './customersCreateReducers';

import {
  testError,
} from '../../../../spec/specData';

describe(REQUEST_CUSTOMERS_CREATE_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_CUSTOMERS_CREATE_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_CUSTOMERS_CREATE_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_CUSTOMERS_CREATE_SUCCESS,
    };
    const expected = {
      ...initialState,
      isFetching: false,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_CUSTOMERS_CREATE_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_CUSTOMERS_CREATE_FAILURE,
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
