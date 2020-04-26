import React from 'react';
import 'App.css';
import { Route } from 'react-router-dom';
import {Home,About} from 'components';
function Main() {
  return (
    <main className="main-content">
      <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
    </main>
  );
}

export default Main;
