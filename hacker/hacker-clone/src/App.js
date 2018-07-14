import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Howdy neighbor!';
    const info = 'Hopefully I will complete an app at the end of this book.';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{info}</h3>
      </div>
    );
  }
}

export default App;
