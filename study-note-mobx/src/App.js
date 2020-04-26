import React from 'react';
import { Header, Main,Left,Footer } from 'layout';
import 'App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Header></Header>
      <Left></Left>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
