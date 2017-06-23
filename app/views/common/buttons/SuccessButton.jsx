import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SuccessButton extends Component {
  render() {
    const {
      block,
      disabled,
      loading,
      onClick,
      title,
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
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


SuccessButton.defaultProps = {
  block: false,
  disabled: false,
  onClick: () => {},
};
