import React, { Component } from "react";
import "./App.css";
import QuillReact from "./components/editor";

class App extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }
  focus(quill) {
    // console.log(quill);
  }
  blur(quill){
    // console.log(quill);
  }
  textChange(delta, oldDelta, source){
     console.log(delta)
     console.log(oldDelta)
     console.log(source)
  }
  render() {
    return (
      <div className="App">
        {/*<QuillReact content='[{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasdasd"},{"insert":"\n"},{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasd"},{"insert":"\n"},{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasdasd"},{"insert":"\n"}]'></QuillReact>*/}
        <QuillReact content="fadsasd" onFocus={this.focus} onBlur={this.blur} onTextChange={this.textChange} />
      </div>
    );
  }
}

export default App;
