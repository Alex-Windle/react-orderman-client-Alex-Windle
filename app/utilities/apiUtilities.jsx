/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import axios from 'axios';


// Custom imports
import store from '../store/configureStore';


export const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};


export const getHeaders = () => {
  const headers = BASE_HEADERS;

  const accessToken = store.getState().auth.access_token;
  if (accessToken) {
    headers.Authorization = accessToken;
  }

  return { headers };
};


export const BASE_URL = process.env.API_BASE;


const baseError = {
  name: 'BaseError',
  message: 'Something went wrong. Please refresh and try again.',
  status: 500,
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
});


export const handleError = (e) => {
  const message = e.message || 'Something went wrong. Please refresh your page.';
  alert(message); // eslint-disable-line no-alert
  return message;
};

export const get = path =>
  new Promise((resolve, reject) => {
    axiosInstance.get(path, getHeaders())
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        const error = e && e.response ?
          e.response.data :
          baseError;
        handleError(error);
        reject(error);
      });
  });


export const post = (path, data) =>
  new Promise((resolve, reject) => {
    axiosInstance.post(path, data, getHeaders())
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        const error = e && e.response ?
          e.response.data :
          baseError;
        handleError(error);
        reject(error);
      });
  });


export const patch = (path, data) =>
  new Promise((resolve, reject) => {
    axiosInstance.patch(path, data, getHeaders())
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        const error = e && e.response ?
          e.response.data :
          baseError;
        handleError(error);
        reject(error);
      });
  });


export const del = path =>
  new Promise((resolve, reject) => {
    axiosInstance.delete(path, getHeaders())
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        const error = e && e.response ?
          e.response.data :
          baseError;
        handleError(error);
        reject(error);
      });
  });
