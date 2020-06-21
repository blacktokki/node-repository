import React from 'react';
import { Header, Main,Left,Footer } from 'layout';
import 'App.css';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import 'mobx-react-lite/batchingForReactDom'

import Store from 'store/index';
const store = new Store();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory,store.router)

function App() {
  return (
    <Provider {...store}>
      <Router className="App" history={history}>
        <Header></Header>
        <Left></Left>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </Provider>
  );
}

export default App;
