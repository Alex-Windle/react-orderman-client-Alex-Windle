/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Custom imports
import store from '../store/configureStore';
import { history } from '../views/Routes';


export const isAuthenticated = () => {
  const { access_token } = store.getState().auth;
  if (!access_token) {
    history.replace({ pathname: '/login' });
  }
};

export const isNotAuthenticated = () => {
  const { access_token } = store.getState().auth;
  if (access_token) {
    history.replace({ pathname: '/customers' });
  }
};



