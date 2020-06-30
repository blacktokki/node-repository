import React from 'react';
import { Route } from 'react-router-dom';
import {Home,Option,Card,Note,Study} from 'components';
import { View } from 'react-native';

function Main() {
  return (
    <View className="main-content">
      {/*
      <Route exact path="/" component={Home}/>
      <Route path="/option" component={Option}/>
      <Route exact path="/note" component={Note}/>
      <Route exact path="/note/:id" component={Card}/>
      <Route path="/study" component={Study}/>
      */}
    </View>
  );
}

export default Main;
