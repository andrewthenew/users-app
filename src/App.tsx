import React from 'react';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav/nav.component';


const App = () => {
  return (
    <Router>
      <Nav />
      <Main />
    </Router>
  );
};

export default App;
