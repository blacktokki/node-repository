import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import 'stisla-theme/dist/css/style.css';
import 'stisla-theme/dist/css/components.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery.nicescroll';
import 'popper.js';
import 'bootstrap';
import 'stisla/stisla';
import 'stisla/scripts';
//import 'jquery-sparkline';
//import 'summernote';
//import 'chart.js';
//import 'owl.carouse';

ReactDOM.render(<App />,document.getElementById('root'),);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
