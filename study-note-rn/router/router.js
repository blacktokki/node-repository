import * as React from 'react';
import { NativeRouter } from 'react-router-native';

const Router = (props)=>{
  console.log('!')
  return(
    <NativeRouter>
      {props.children}
    </NativeRouter>
  )
}

export {
  Switch,
  Route,
  Link,
} from 'react-router-native';
export { Router };