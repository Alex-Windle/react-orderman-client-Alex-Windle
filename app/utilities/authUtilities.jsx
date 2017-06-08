/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import store from '../store/configureStore';
import { history } from '../views/Routes';


/**
 * @function isAuthenticated
 * @description If not authenticated and accessing protected page,
 * will navigate to "/login"
 */
export const isAuthenticated = () => {
  const { access_token } = store.getState().auth;
  if (!access_token) {
    history.replace({ pathname: '/login' });
  }
};


/**
 * @function isNotAuthenticated
 * @description If authenticated, an accessing non-protected page,
 * will navigate to "/customers"
 */
export const isNotAuthenticated = () => {
  const { access_token } = store.getState().auth;
  if (access_token) {
    history.replace({ pathname: '/customers' });
  }
};
