import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Column, Game1, Square, Board} from './connect.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
//registerServiceWorker();
