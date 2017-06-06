import {
  REQUEST_LOGIN_ACTION,
  RECEIVE_LOGIN_SUCCESS,
  RECEIVE_LOGIN_FAILURE,
} from '../actions/loginActions';

import reducer, { initialState } from './loginReducer';

import {
  testError,
} from '../../../spec/specData';

describe(REQUEST_LOGIN_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_LOGIN_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_LOGIN_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_LOGIN_SUCCESS,
    };
    const expected = {
      ...initialState,
      isFetching: false,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_LOGIN_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_LOGIN_FAILURE,
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
