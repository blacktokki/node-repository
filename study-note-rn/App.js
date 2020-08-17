import  React, { useState, useEffect } from 'react';
import { Platform, SafeAreaView, Dimensions,  ScrollView, View } from 'react-native';
import { Header, Main,Left,Footer } from 'layout';
import { createMemoryHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'router';
import { syncHistoryWithStore } from 'mobx-react-router';
import Drawer from 'react-native-drawer'
import 'mobx-react-lite/batchingForReactNative'
import Store from 'store/index';

const store = new Store();
const memoryHistory =  createMemoryHistory();
const history = syncHistoryWithStore(memoryHistory,store.router)

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const getScreen = ()=>{
    const breakpoints = {
      Xs: 0, // should start at zero
      Sm: 640,
      Md: 768,
      Lg: 1024,
      Xl: 1280,
    }
      return Object.keys(breakpoints).sort((a, b) => (breakpoints[a] > breakpoints[b] ? 1 : -1))
      .map(item => [item, breakpoints[item]])
      .filter(item => item[1] <= Dimensions.get('window').width)
      .map(item => item[0])
  }

  const [ panel , setPanel ] = useState(false);
  const [ screen, setScreen ] = useState(getScreen());

  const onChange = (_screen) => {
    setScreen(getScreen());
    //console.log(screen);
  };

  const toggle= () =>{
    setPanel(!panel)
  }

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <Provider {...store}>
      <Router className="App" history={history}>
        <SafeAreaView style={{
              flex: 1,
              paddingTop: Platform.OS === 'android' ? 39 : 0,
              paddingHorizontal: Platform.OS === 'android' ? 0 : 0,
              backgroundColor:'#f4f6f9'
        }}>
          <Drawer
            open={panel}
            content={<Left />}
            type="overlay"
            acceptPan ={false}
            tweenHandler={(ratio) => ({
              main: {
                paddingLeft: ratio*250
                },
                mainOverlay : {
                  width: 0
                },
                drawer : {
                  width: ratio*250
                }
            })}
          >
            <View style={{flex:1}}>
              <ScrollView>
                <Header controlPanel={toggle}></Header>
                <Main></Main>
              </ScrollView>
            </View>
          </Drawer>
          <Footer></Footer>
        </SafeAreaView>
      </Router>
    </Provider>
  );
}