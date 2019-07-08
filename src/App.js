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
  blur(quill) {
    // console.log(quill);
  }
  textChange(delta, oldDelta, source) {
    console.log(delta);
    console.log(oldDelta);
    console.log(source);
  }
  selectChange(range, oldRange, source) {
    console.log(111);
  }
  onReady(quill) {
    console.log(quill);
  }
  render() {
    return (
      <div className="App">
        <QuillReact
          content='[{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasda啊"},{"attributes":{"size":"14px","color":"#595959","lineheight":"2rem","background":"#ff0000"},"insert":"是大啊是大啊是大"},{"insert":"\n"}]'
          onFocus={this.focus}
          onBlur={this.blur}
          onTextChange={this.textChange}
          onSelectChange={this.selectChange}
          onReady={this.onReady}
        />
      </div>
    );
  }
}

export default App;
