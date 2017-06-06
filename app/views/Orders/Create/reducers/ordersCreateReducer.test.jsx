import {
  REQUEST_ORDERS_CREATE_ACTION,
  RECEIVE_ORDERS_CREATE_SUCCESS,
  RECEIVE_ORDERS_CREATE_FAILURE,
} from '../actions/ordersCreateActions';

import reducer, { initialState } from './ordersCreateReducer';

import {
  testError,
} from '../../../../spec/specData';

describe(REQUEST_ORDERS_CREATE_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_ORDERS_CREATE_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_ORDERS_CREATE_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_ORDERS_CREATE_SUCCESS,
    };
    const expected = {
      ...initialState,
      isFetching: false,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_ORDERS_CREATE_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_ORDERS_CREATE_FAILURE,
      payload: {
        error: testError,
      },
    };
    const expected = {
      ...initialState,
      isFetching: false,
      error: testError,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
