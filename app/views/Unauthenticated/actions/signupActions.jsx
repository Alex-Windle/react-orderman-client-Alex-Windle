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


const requestSignupAction = () => ({
  type: REQUEST_SIGNUP_ACTION,
});


const receiveSignupSuccess = () => ({
  type: RECEIVE_SIGNUP_SUCCESS,
});


const receiveSignupFailure = error => ({
  type: RECEIVE_SIGNUP_FAILURE,
  payload: {
    error,
  },
});


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
