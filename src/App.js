import React, { Component } from 'react';
import './App.css';
import QuillReact from './components/editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuillReact></QuillReact>
      </div>
    );
  }
}

export default App;
