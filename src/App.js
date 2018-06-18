import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Planets from './components/Planets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* The below two components have a uri prop that are calling the routes in the Back end app */}
        <Planets uri="http://localhost:3002/staticPlanets"/>
        <hr />
        <Planets uri="http://localhost:3002/planets"/>
      </div>
    );
  }
}

export default App;
