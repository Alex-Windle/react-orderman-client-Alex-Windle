/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// Custom imports
import { history } from '../../Routes';
import NavbarLink from './NavbarLink';


// Actions imports
import { performClearAuth } from '../../Unauthenticated/actions/loginActions';


/**
 * @class Navbar
 * @description A header for the application
 *
 */
export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logout = () => {
      this.props.performClearAuth();
      localStorage.removeItem('access_token');
      history.push('/login');
    };
  }
  render() {
    const { pathname } = this.props;
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">
                Toggle navigation
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a
              className="navbar-brand"
              href="/customers"
            >
              React OrderMan
            </a>
          </div>

          <div
            className="navbar-collapse collapse"
            id="bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <ul className="nav navbar-nav navbar-right">
              <NavbarLink
                pathname={pathname}
                title="Customers"
                path="/customers"
              />
              <li>
                <a
                  role="button"
                  onClick={this.logout}
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


Navbar.propTypes = {
  pathname: PropTypes.string.isRequired,
  performClearAuth: PropTypes.func.isRequired,
};


Navbar.defaultProps = {};


const mapStateToProps = state => ({
  pathname: state.routing.location.pathname,
});


const mapDispatchToProps = () => ({
  performClearAuth,
});


export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
