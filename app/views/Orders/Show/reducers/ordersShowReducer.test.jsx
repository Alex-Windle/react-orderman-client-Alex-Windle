import {
  REQUEST_ORDERS_SHOW_ACTION,
  RECEIVE_ORDERS_SHOW_SUCCESS,
  RECEIVE_ORDERS_SHOW_FAILURE,
} from '../actions/ordersShowActions';

import reducer, { initialState } from './ordersShowReducer';

import {
  testError,
  testOrder,
} from '../../../../spec/specData';


describe(REQUEST_ORDERS_SHOW_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_ORDERS_SHOW_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_ORDERS_SHOW_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_ORDERS_SHOW_SUCCESS,
      payload: {
        order: testOrder,
      },
    };
    const expected = {
      ...initialState,
      isFetching: false,
      order: testOrder,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_ORDERS_SHOW_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_ORDERS_SHOW_FAILURE,
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
