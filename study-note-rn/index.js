import { registerRootComponent } from 'expo';

import App from './App';

//import "public/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.css";
import "public/css/style.css";
import "public/css/components.css";
//import '@fortawesome/fontawesome-free/css/all.css';

import jQuery  from  "jquery";
//import "bootstrap";
//import "jquery.nicescroll";
window.$ = jQuery
window.jQuery = jQuery
//require("public/js/moment.min.js");
//require("public/js/popper.min.js");
//require("public/js/scripts.js");
//require("public/js/stisla.js");

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
