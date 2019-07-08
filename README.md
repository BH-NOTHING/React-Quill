# React-Quill-Editor
🍡Quill editor component for React, support SPA and SSR.

基于 Quill、适用于 React 的富文本编辑器，支持服务端渲染和单页应用。


#### Projects Using React-Quill-Editor


## Install

#### mount with component

``` javascript
import React from 'react'
import QuillReact from "React-Quill-Editor";

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

```

```javascript
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { QuillReact } from 'React-Quill-Editor'
```

#### register quill module

```javascript
// register quill modules, you need to introduce and register before the vue program is instantiated
import Quill from 'quill'
import yourQuillModule from '../yourModulePath/yourQuillModule.js'
Quill.register('modules/yourQuillModule', yourQuillModule)
```

### Difference（使用方法的区别）

**SSR and the only difference in the use of the SPA:**
- SPA worked by the `component`, find quill instance by `ref attribute`.
- SSR worked by the `directive`, find quill instance by `directive arg`.
- Other configurations, events are the same.

### SSR

``` react

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [{"attributes":{"color":"#595959","size":"14px","lineheight":"2rem"},"insert":"asdasdasda啊"},{"attributes":{"size":"14px","color":"#595959","lineheight":"2rem","background":"#ff0000"},"insert":"是大啊是大啊是大"},{"insert":"\n"}]
    }
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }
  focus(quill) {
    console.log(quill);
  }
  blur(quill) {
    console.log(quill);
  }
  textChange(delta, oldDelta, source) {
    console.log(delta);
    console.log(oldDelta);
    console.log(source);
  }
  selectChange(range, oldRange, source) {
    console.log(range);
  }
  onReady(quill) {
    console.log(quill);
  }
  render() {
    return (
      <div className="App">
        <QuillReact
          content={this.state.content}
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

## Modules
- [quill-image-extend-module](https://github.com/NextBoy/quill-image-extend-module)
- [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module)
- [quill-image-drop-module](https://github.com/kensnyder/quill-image-drop-module)
- [quilljs-table](https://github.com/dost/quilljs-table)
- [more modules...](https://github.com/search?o=desc&q=quill+module&s=stars&type=Repositories&utf8=%E2%9C%93)

## Quill documents
[Api docs](https://quilljs.com/docs/quickstart/)


## Author
[Jordan]