import React, { Component } from 'react';
import './App.css';
import QuillReact from './components/editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<QuillReact content='[{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasdasd"},{"insert":"\n"},{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasd"},{"insert":"\n"},{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasdasd"},{"insert":"\n"}]'></QuillReact>*/}
        <QuillReact disabled={true} content='fadsasd'></QuillReact>
      </div>
    );
  }
}

export default App;
