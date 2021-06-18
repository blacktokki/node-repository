import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import _ from 'lodash';

(function(l) {
  if (l !== undefined && l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, '',
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

const ignoreWarnings = ['ReactNativeFiberHostComponent'];
const _console = _.clone(console);
console.warn = (message: string) => {
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

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
