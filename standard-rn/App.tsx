import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import _ from 'lodash';

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
