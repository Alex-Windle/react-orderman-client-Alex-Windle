import {
  REQUEST_SIGNUP_ACTION,
  RECEIVE_SIGNUP_SUCCESS,
  RECEIVE_SIGNUP_FAILURE,
} from '../actions/signupActions';

import reducer, { initialState } from './signupReducer';

import {
  testError,
} from '../../../spec/specData';


describe(REQUEST_SIGNUP_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_SIGNUP_ACTION,
    };
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_SIGNUP_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_SIGNUP_SUCCESS,
    };
    const expected = {
      ...initialState,
      isFetching: false,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_SIGNUP_FAILURE, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_SIGNUP_FAILURE,
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
