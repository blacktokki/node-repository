import React from 'react';
import { Header, Main,Left,Footer } from 'layout';
import 'App.css';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'mobx-react-lite/batchingForReactDom'

import Store from 'store/index';
const store = new Store();

function App() {
  return (
    <Provider {...store}>
      <BrowserRouter className="App">
        <Header></Header>
        <Left></Left>
        <Main></Main>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
