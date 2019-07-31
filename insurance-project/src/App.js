import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import AddField from './Components/AddField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddField />
      </div>
    );
  }
}

export default App;
