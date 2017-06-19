import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SuccessButton extends Component {
  render() {
    const title = this.props.title;
    return (
      <button style={{ border: 'none', borderRadius: '4px', color: 'white', backgroundColor: '#7EC0EE' }}>
        {title}
      </button>
    );
  }
}

SuccessButton.propTypes = {
  title: PropTypes.string.isRequired,
};
