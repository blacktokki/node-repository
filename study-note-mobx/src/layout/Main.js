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
        <Route exact path="/note" component={Note}/>
        <Route exact path="/note/:id" component={Card}/>
        <Route path="/study" component={Study}/>
    </main>
  );
}

export default Main;
