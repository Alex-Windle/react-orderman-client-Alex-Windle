import {
  REQUEST_CUSTOMERS_SHOW_ACTION,
  RECEIVE_CUSTOMERS_SHOW_SUCCESS,
  RECEIVE_CUSTOMERS_SHOW_FAILURE,
} from '../actions/customersShowActions';

import reducer, { initialState } from './customersShowReducer';

import {
  testError,
  testCustomer,
} from '../../../../spec/specData';


describe(REQUEST_CUSTOMERS_SHOW_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_CUSTOMERS_SHOW_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_CUSTOMERS_SHOW_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_CUSTOMERS_SHOW_SUCCESS,
      payload: {
        customer: testCustomer,
      },
    };
    const expected = {
      ...initialState,
      customer: testCustomer,
      isFetching: false,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_CUSTOMERS_SHOW_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_CUSTOMERS_SHOW_FAILURE,
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
