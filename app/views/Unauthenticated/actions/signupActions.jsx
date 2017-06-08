/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import { history } from '../../Routes';
import { post } from '../../../utilities/apiUtilities';


export const REQUEST_SIGNUP_ACTION = 'REQUEST_SIGNUP_ACTION';
export const RECEIVE_SIGNUP_SUCCESS = 'RECEIVE_SIGNUP_SUCCESS';
export const RECEIVE_SIGNUP_FAILURE = 'RECEIVE_SIGNUP_FAILURE';


/**
 * @function requestSignupAction
 * @description Action-creator
 */
const requestSignupAction = () => ({
  type: REQUEST_SIGNUP_ACTION,
});


/**
 * @function receiveSignupSuccess
 * @description Action-creator
 */
const receiveSignupSuccess = () => ({
  type: RECEIVE_SIGNUP_SUCCESS,
});


/**
 * @function receiveSignupFailure
 * @description Action-creator
 * @param error
 */
const receiveSignupFailure = error => ({
  type: RECEIVE_SIGNUP_FAILURE,
  payload: {
    error,
  },
});


/**
 * @function performSignup
 * @description POST /users/register to Register a User
 * @param credentials
 */
export const performSignup = credentials =>
  (dispatch) => {
    dispatch(requestSignupAction());
    post('/users/register', credentials)
      .then(() => {
        dispatch(receiveSignupSuccess());
        alert('Sign up successful! Now log in with your creds to access the app!');
        history.push('/login');
      })
      .catch((e) => {
        dispatch(receiveSignupFailure(e));
      });
  };
