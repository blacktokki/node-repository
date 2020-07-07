import * as React from 'react';
import { Platform,SafeAreaView,StyleSheet } from 'react-native';
import { Header, Main,Left,Footer } from 'layout';
import { createMemoryHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'router';
import { syncHistoryWithStore } from 'mobx-react-router';
import 'mobx-react-lite/batchingForReactNative'
import Store from 'store/index';

const store = new Store();
const memoryHistory =  createMemoryHistory();
const history = syncHistoryWithStore(memoryHistory,store.router)

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const style = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      paddingHorizontal: Platform.OS === 'android' ? 15 : 0
  },
});

export default function App() {
  return (
    <Provider {...store}>
      <Router className="App" history={history}>
        <SafeAreaView style={style.droidSafeArea}>
          <Header></Header>
          <Left></Left>
          <Main></Main>
          <Footer></Footer>
        </SafeAreaView>
      </Router>
    </Provider>
  );
}