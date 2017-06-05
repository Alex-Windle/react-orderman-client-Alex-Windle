/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * SuccessButton is a button used for success-type actions.
 *
 * @description Renders a Bootstrap button
 *
 * PROPS:
 *   block {bool} - If button is a 'btn-block'
 *   disabled {bool} - If the button is disabled
 *   loading {bool} - If the button is loading
 *   title {string} - Button title
 *   onClick {func} - Button onClick handler
 *
 * @extends Component
 */
export default class SuccessButton extends Component {
  render() {
    const {
      block,
      disabled,
      loading,
      title,
      onClick,
    } = this.props;

    return (
      <button
        type="submit"
        className={`btn btn-info ${block ? 'btn-block' : ''}`}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {(() => (loading ? <i className="fa fa-spin fa-spinner" /> : title))()}
      </button>
    );
  }
}


SuccessButton.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


SuccessButton.defaultProps = {
  block: false,
  disabled: false,
  loading: false,
  onClick: () => {},
};
