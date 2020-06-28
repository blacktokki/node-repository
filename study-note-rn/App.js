import * as React from 'react';
import { Platform,View } from 'react-native';
import { Header, Main,Left,Footer } from 'layout';
import { createMemoryHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import Store from 'store/index';

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


const store = new Store();
const memoryHistory =  createMemoryHistory();
const history = syncHistoryWithStore(memoryHistory,store.router)

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <Provider {...store}>
      <Router className="App" history={history}>
        <View>
          <Header></Header>
          <Left></Left>
          <Main></Main>
          <Footer></Footer>
        </View>
      </Router>
    </Provider>
  );
}