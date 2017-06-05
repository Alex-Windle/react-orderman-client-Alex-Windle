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


export const ReduxFormPropType = PropTypes.shape({
  registeredFields: PropTypes.any.isRequired,
  fields: PropTypes.any.isRequired,
  values: PropTypes.any,
  syncErrors: PropTypes.any,
});


export const LoginPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  error: ErrorPropType,
});


export const SignupPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  error: ErrorPropType,
});
