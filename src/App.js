// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import StackOverflow from './components/StackOverflow';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>  
          <Route exact path="/" component={StackOverflow} /> 
        </Switch>
      </Router>
    </div>
  );
};

export default App;