/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * We use this file to create various prop-type
 * shapes that we can reuse throughout our
 * application.
 */


// Module imports
import PropTypes from 'prop-types';

export const ErrorPropType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
});

export const CustomersCreatePropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  error: ErrorPropType,
});

export const LoginPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  error: ErrorPropType,
});


export const PaginationPropType = PropTypes.shape({
  total: PropTypes.number,
  limit: PropTypes.number,
  page: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pages: PropTypes.number,
});


export const CustomerPropType = PropTypes.shape({
  _id: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  user_id: PropTypes.string,
  __v: PropTypes.number,
});

export const CustomersIndexPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  customers: PropTypes.arrayOf(CustomerPropType),
  pagination: PaginationPropType,
  error: ErrorPropType,
});

export const CustomersShowPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  customer: CustomerPropType,
  error: ErrorPropType,
});

export const LocationPropType = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
});


export const MatchPropType = PropTypes.shape({
  isExact: PropTypes.bool.isRequired,
  params: PropTypes.any,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});


export const ReduxFormPropType = PropTypes.shape({
  registeredFields: PropTypes.any,
  fields: PropTypes.any,
  values: PropTypes.any,
  syncErrors: PropTypes.any,
});


export const SignupPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  error: ErrorPropType,
});
