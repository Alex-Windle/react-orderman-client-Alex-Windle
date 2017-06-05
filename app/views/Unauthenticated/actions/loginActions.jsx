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


const requestLoginAction = () => ({
  type: REQUEST_LOGIN_ACTION,
});


const receiveLoginSuccess = access_token => ({
  type: RECEIVE_LOGIN_SUCCESS,
  payload: {
    access_token,
  },
});


const receiveLoginFailure = error => ({
  type: RECEIVE_LOGIN_FAILURE,
  payload: {
    error,
  },
});


const clearAuthAction = () => ({
  type: CLEAR_AUTH_ACTION,
});


export const performClearAuth = () =>
  (dispatch) => {
    dispatch(clearAuthAction());
  };


export const performLogin = credentials =>
  (dispatch) => {
    dispatch(requestLoginAction());
    post('/users/authenticate', credentials)
      .then((response) => {
        localStorage.setItem('access_token', response.auth.access_token);
        dispatch(receiveLoginSuccess(response.auth.access_token));
        history.push('/login');
      })
      .catch((e) => {
        dispatch(receiveLoginFailure(e));
      });
  };
