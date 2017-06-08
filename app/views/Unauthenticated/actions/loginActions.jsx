/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import { history } from '../../Routes';
import { post } from '../../../utilities/apiUtilities';


export const REQUEST_LOGIN_ACTION = 'REQUEST_LOGIN_ACTION';
export const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS';
export const RECEIVE_LOGIN_FAILURE = 'RECEIVE_LOGIN_FAILURE';
export const CLEAR_AUTH_ACTION = 'CLEAR_AUTH_ACTION';


/**
 * @function requestLoginAction
 * @description Action-creator
 */
const requestLoginAction = () => ({
  type: REQUEST_LOGIN_ACTION,
});


/**
 * @function receiveLoginSuccess
 * @description Action-creator
 * @param access_token
 */
const receiveLoginSuccess = access_token => ({
  type: RECEIVE_LOGIN_SUCCESS,
  payload: {
    access_token,
  },
});


/**
 * @function receiveLoginFailure
 * @description Action-creator
 * @param error
 */
const receiveLoginFailure = error => ({
  type: RECEIVE_LOGIN_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function clearAuthAction
 * @description Action-creator
 */
const clearAuthAction = () => ({
  type: CLEAR_AUTH_ACTION,
});


/**
 * @function performClearAuth
 * @description Clears any access_token in the authReducer
 */
export const performClearAuth = () =>
  (dispatch) => {
    dispatch(clearAuthAction());
  };


/**
 * @function performLogin
 * @description POST to /users/authenticate to authenticate a User
 * @param credentials
 */
export const performLogin = credentials =>
  (dispatch) => {
    dispatch(requestLoginAction());
    post('/users/authenticate', credentials)
      .then((response) => {
        localStorage.setItem('access_token', response.auth.access_token);
        dispatch(receiveLoginSuccess(response.auth.access_token));
        history.push('/customers');
      })
      .catch((e) => {
        dispatch(receiveLoginFailure(e));
      });
  };
