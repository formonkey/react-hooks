import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import './utils';

import App from './app';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
