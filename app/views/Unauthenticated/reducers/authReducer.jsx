/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */

// Type imports
import {
  CLEAR_AUTH_ACTION,
  REQUEST_LOGIN_ACTION,
  RECEIVE_LOGIN_SUCCESS,
} from '../actions/loginActions';


export const initialState = {
  access_token: localStorage.getItem('access_token') || null,
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_LOGIN_ACTION:
      return reduxState;
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...reduxState,
        access_token: payload.access_token,
      };
    case CLEAR_AUTH_ACTION:
      return {
        ...reduxState,
        access_token: null,
      };
    default:
      return reduxState;
  }
};
