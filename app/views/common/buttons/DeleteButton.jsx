/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * @class DeleteButton
 * @description Button indicating a Delete action.
 */
export default class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this._onClick = () => {
      const isSure = confirm('Are you sure? This is permanent.');
      if (isSure) {
        this.props.onClick();
      }
    };
  }

  render() {
    return (
      <button
        className="btn btn-danger"
        onClick={this._onClick}
      >
        Delete
      </button>
    );
  }
}


DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};


DeleteButton.defaultProps = {
  disabled: false,
};
