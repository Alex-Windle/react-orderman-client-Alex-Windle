/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
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

export const testError = {
  name: 'SimpleError',
  message: 'This is a test error',
  status: 500,
};

export const testLogin = {
  isFetching: false,
  error: {},
};

export const testMatch = {
  isExact: false,
  params: {},
  path: '/customers',
  url: '/customers',
};

export const testPagination = {
  total: 14,
  limit: 10,
  page: 1,
  pages: 2,
};

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

export const testSignup = {
  isFetching: false,
  error: {},
};

