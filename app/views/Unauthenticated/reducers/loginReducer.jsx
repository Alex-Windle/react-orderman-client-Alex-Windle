/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_LOGIN_ACTION,
  RECEIVE_LOGIN_SUCCESS,
  RECEIVE_LOGIN_FAILURE,
} from '../actions/loginActions';


export const initialState = {
  isFetching: false,
  error: null,
};


/**
 * @description Reducer for login
 * @param reduxState
 * @param action
 * @returns {*}
 */
export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_LOGIN_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      };
    case RECEIVE_LOGIN_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
