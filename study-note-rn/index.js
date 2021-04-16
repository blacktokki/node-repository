import { registerRootComponent } from 'expo';

import App from './App';

//import 'bootstrap/dist/css/bootstrap.css'
//import 'public/css/style.css';
//import 'public/css/components.css';
//import 'jquery.nicescroll';
//import 'popper.js';
//import 'bootstrap';
//import 'public/js/stisla';
//import 'public/js/scripts';
//import 'jquery-sparkline';
//import 'summernote';
//import 'chart.js';
//import 'owl.carouse';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

// import { YellowBox } from 'react-native';
import _ from 'lodash';

const ignoreWarnings = ['componentWillReceiveProps', 'componentWillMount'];
// YellowBox.ignoreWarnings(ignoreWarnings);
const _console = _.clone(console);
console.warn = message => {
    var warn = true;
    ignoreWarnings.forEach((value)=>{
        if (message.indexOf(value) <= -1) {
            warn = false;
        }
    });
    if (warn){
        _console.warn(message);
    }
    else{
        // console.log(message)
    }
};
registerRootComponent(App);
