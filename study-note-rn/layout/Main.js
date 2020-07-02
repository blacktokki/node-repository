import React from 'react';
import { Switch ,Route } from 'router/router';
import {Home,Option,Card,Note,Study} from 'components';
import { View } from 'react-native';

function Main() {
  return (
    <View className="main-content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/option" component={Option}/>
        <Route exact path="/note" component={Note}/>
        <Route exact path="/note/:id" component={Card}/>
        <Route path="/study" component={Study}/>
      </Switch>
    </View>
  );
}

export default Main;
