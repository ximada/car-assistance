import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Bar from './AppBar';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
        <Form />
        
      </div>
    );
  }
}

export default App;
