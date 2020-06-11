import React from 'react';
import 'App.css';
import { Route } from 'react-router-dom';
import {Home,Option,Card,Note,Study} from 'components';
function Main() {
  return (
    <main className="main-content">
      <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/option" component={Option}/>
        <Route path="/card" component={Card}/>
        <Route path="/note" exact component={Note}/>
        <Route path="/study" component={Study}/>
    </main>
  );
}

export default Main;
