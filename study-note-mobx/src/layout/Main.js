import React from 'react';
import 'App.css';
import { Route,BrowserRouter } from 'react-router-dom';
import {Home,About} from 'components';
function App() {
  return (
    <main>
      <hr/>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
    </main>
  );
}

export default App;
