/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';


/**
 * @class SearchBar
 * @description Represents an input that responds and debounces onChange events
 *
 */
export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    /**
     * Use lodash debounce to debounce the handleSearch function
     */
    this.debouncedHandleSearch = debounce(this.props.handleSearch, 500);


    /**
     * @function _handleSearch
     * @description Debounces the change event and calls handler passed into component
     * @param event
     */
    this._handleSearch = (event) => {
      /**
       * When you debounce React events, React tries to reuse synthetic events for you for
       * efficiency purposes. To persist the original event and get it's data, you must call
       * 'event.persist()'.
       * (http://stackoverflow.com/questions/35435074/using-debouncer-with-react-event
       */
      event.persist();
      const value = event.target.value;
      this.debouncedHandleSearch(value);
    };
  }


  render() {
    const { disabled, placeholder } = this.props;
    return (
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          disabled={disabled}
          onChange={this._handleSearch}
          placeholder={placeholder}
          type={'text'}
        />
      </div>
    );
  }
}


SearchBar.propTypes = {
  disabled: PropTypes.bool,
  handleSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};


SearchBar.defaultProps = {
  disabled: true,
  placeholder: 'Search',
};
