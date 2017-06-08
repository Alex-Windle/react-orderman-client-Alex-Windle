/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 * @description Test data to use in Jest tests.
 *
 */


/**
 * @name testCustomer
 * @description Example customer for the application
 * @type {{
 *   _id: string,
 *   createdAt: string,
 *   updatedAt: string,
 *   first_name: string,
 *   last_name: string,
 *   email: string,
 *   user_id: string,
 *   __v: number
 * }}
 */
export const testCustomer = {
  _id: '5931c56860f4460011fbb1e7',
  createdAt: '2017-06-02T20:07:04.128Z',
  updatedAt: '2017-06-02T20:07:04.128Z',
  first_name: 'Mitch',
  last_name: 'Masia',
  email: 'mjmasia@gmail.com',
  user_id: '59303ff19cdcf2001124b583',
  __v: 0,
};


/**
 * @name testError
 * @description Example error that might be returned from the API
 * @type {{
 *   name: string,
 *   message: string,
 *   status: number
 * }}
 */
export const testError = {
  name: 'SimpleError',
  message: 'This is a test error',
  status: 500,
};


/**
 * @name testLogin
 * @description Example of state of "login" reducer
 * @type {{
 *   isFetching: boolean,
 *   error: {}
 * }}
 */
export const testLogin = {
  isFetching: false,
  error: {},
};


/**
 * @name testMatch
 * @description Example of "match" object provided by react-router-dom
 * @type {{
 *   isExact: boolean,
 *   params: {},
 *   path: string,
 *   url: string
 * }}
 */
export const testMatch = {
  isExact: false,
  params: {},
  path: '/customers',
  url: '/customers',
};


/**
 * @name testPagination
 * @description Example pagination that might be returned about customers or orders
 * @type {{
 *   total: number,
 *   limit: number,
 *   page: number,
 *   pages: number
 * }}
 */
export const testPagination = {
  total: 14,
  limit: 10,
  page: 1,
  pages: 2,
};


/**
 * @name testOrder
 * @description Example order that might be returned by the API
 * @type {{
 *   _id: string,
 *   createdAt: string,
 *   updatedAt: string,
 *   date: string,
 *   description: string,
 *   customer_id: {
 *     _id: string,
 *     createdAt: string,
 *     updatedAt: string,
 *     first_name: string,
 *     last_name: string,
 *     email: string,
 *     user_id: string,
 *     __v: number
 *   },
 *   user_id: string,
 *   __v: number,
 *   status: string
 * }}
 */
export const testOrder = {
  _id: '593307263bfb0a0011be756f',
  createdAt: '2017-06-03T18:59:50.733Z',
  updatedAt: '2017-06-03T18:59:50.733Z',
  date: '2018-12-20T00:00:00.000Z',
  description: 'This is a description',
  customer_id: testCustomer,
  user_id: '59303ff19cdcf2001124b583',
  __v: 0,
  status: 'SCHEDULED',
};


/**
 * @name testSignup
 * @description Example of state of "signup" reducer
 * @type {{
 *   isFetching: boolean,
 *   error: {}
 * }}
 */
export const testSignup = {
  isFetching: false,
  error: {},
};
