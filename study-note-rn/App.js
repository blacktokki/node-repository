import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Main,Left,Footer } from 'layout';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import Store from 'store/index';
const store = new Store();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory,store.router)

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
