import {
  CLEAR_AUTH_ACTION,
  REQUEST_LOGIN_ACTION,
  RECEIVE_LOGIN_SUCCESS,
} from '../actions/loginActions';

import reducer, { initialState } from './authReducer';

describe(CLEAR_AUTH_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: CLEAR_AUTH_ACTION,
    };
    const expected = {
      ...initialState,
      access_token: null,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(REQUEST_LOGIN_ACTION, () => {
  it('should return the proper state', () => {
    const action = {
      type: REQUEST_LOGIN_ACTION,
    };
    const expected = {
      ...initialState,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});


describe(RECEIVE_LOGIN_SUCCESS, () => {
  it('should return the proper state', () => {
    const action = {
      type: RECEIVE_LOGIN_SUCCESS,
      payload: {
        access_token: 'abc',
      },
    };
    const expected = {
      ...initialState,
      access_token: 'abc',
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
