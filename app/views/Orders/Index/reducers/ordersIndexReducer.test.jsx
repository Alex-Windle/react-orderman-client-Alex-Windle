import {
  REQUEST_ORDERS_INDEX_ACTION,
  RECEIVE_ORDERS_INDEX_SUCCESS,
  RECEIVE_ORDERS_INDEX_FAILURE,
} from '../actions/ordersIndexActions';

import reducer, { initialState } from './ordersIndexReducer';

import {
  testOrder,
  testPagination,
  testError,
} from '../../../../spec/specData';


describe(REQUEST_ORDERS_INDEX_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_ORDERS_INDEX_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_ORDERS_INDEX_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_ORDERS_INDEX_SUCCESS,
      payload: {
        orders: [testOrder],
        pagination: testPagination,
      },
    };
    const expected = {
      ...initialState,
      orders: [testOrder],
      pagination: testPagination,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_ORDERS_INDEX_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_ORDERS_INDEX_FAILURE,
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
