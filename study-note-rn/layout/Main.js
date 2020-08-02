import React from 'react';
import { Route } from 'router';
import {Home,Option,Card,Note,Study} from 'components';
import { Div } from 'components/commons';
import { View } from 'react-native';

function Main() {
  return (
    <View style={{marginTop:100}}>
      <Div className="main-content">
        <Route exact path="/" component={Home}/>
        <Route path="/option" component={Option}/>
        <Route exact path="/note" component={Note}/>
        <Route exact path="/note/:id" component={Card}/>
        <Route path="/study" component={Study}/>
      </Div>
    </View>
  )
}

export default Main;
