import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Even though we don't import anything, this allows
 * for the CSS files to be included in the project.
 */
import {} from './styles/cssImports';

import Routes from './views/Routes';

ReactDOM.render((
  <Routes />
), document.getElementById('app'));
