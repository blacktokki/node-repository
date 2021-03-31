import  React, { useState, useEffect } from 'react';
import { Platform, SafeAreaView, Dimensions, View } from 'react-native';
import { Left, Content, Header, Main, Footer } from 'layout';
import { Provider } from 'mobx-react';
import { Router } from 'router';
import Drawer from 'react-native-drawer'
import Store from 'store/index';

const store = new Store();

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

  //resize detect
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

  const twinHandler = (ratio) => {
    const style = {}
    if (Platform.OS === 'web'){
      style['drawer'] = {
        width: ratio*250
      }
      style['main'] = {
        paddingLeft: ratio*250
      }
      style['mainOverlay'] = {
        width: 0,
      }
    }
    else{
      style['mainOverlay'] = {
        backgroundColor : '#000000',
        opacity : ratio/2,
      }
    }
    return style
  }

  return (
    <Provider {...store}>
      <Router className="App">
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
            tweenHandler={twinHandler}
            panCloseMask = {1-(250/Dimensions.get('window').width)}
            tapToClose={true}
            onClose={()=>{setPanel(false)}}
          >
            <Content>
              <View style={{flex:1}}>
                <Header controlPanel={toggle}></Header>
                <Main></Main>
              </View>
              <Footer></Footer>
            </Content>
          </Drawer>
        </SafeAreaView>
      </Router>
    </Provider>
  );
}