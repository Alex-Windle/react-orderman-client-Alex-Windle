/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_SIGNUP_ACTION,
  RECEIVE_SIGNUP_SUCCESS,
  RECEIVE_SIGNUP_FAILURE,
} from '../actions/signupActions';


export const initialState = {
  isFetching: false,
  error: null,
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_SIGNUP_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_SIGNUP_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      };
    case RECEIVE_SIGNUP_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
