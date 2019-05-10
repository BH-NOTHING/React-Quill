import React from "react";
import _Quill from "quill";
import PropTypes from "prop-types";
import defaultOptions from "./options";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

const Quill = window.Quill || _Quill;

export default class QuillEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
    this._options = {};
    this.getStyle = this.getStyle.bind(this);
    this.setContent = this.setContent.bind(this);
    this.initQuill = this.initQuill.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  componentDidMount() {
    this.initQuill();
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.disabled !== nextProps.disabled) {
      this.quill.enable(!nextProps.disabled);
    }
    if (this.props.content !== nextProps.content) {
      this.setContent(nextProps.content);
    }
  }
  componentWillUnmount() {
    if (this.editor.current) {
      let root = this.quill.root;
      root.removeEventListener("blur", this.onBlur);
      root.removeEventListener("focus", this.onFocus);
    }
  }

  initQuill() {
    if (this.editor.current) {
      this._options = Object.assign({}, defaultOptions, this.props.options);
      this.quill = new Quill(this.editor.current, this._options);
      this.setContent(this.props.content);
      this.quill.enable(!this.props.disabled);
      let root = this.quill.root;
      root.addEventListener("blur", this.onBlur, false);
      root.addEventListener("focus", this.onFocus, false);
    }
  }
  getStyle() {
    let styleObj = {};
    let { width, height } = this.props;
    if (width) {
      styleObj["width"] = width;
    }
    if (height) {
      styleObj["height"] = height;
    }
    return styleObj;
  }
  setContent(contentProp) {
    try {
      contentProp = JSON.parse(contentProp);
    } catch (e) {}
    if (!this.quill) return;
    if (Array.isArray(contentProp)) {
      this.quill.setContents(contentProp);
    } else {
      this.quill.setText(contentProp);
    }
  }
  onFocus() {
    this.props.onFocus && this.props.onFocus(this.quill);
  }
  onBlur() {
    this.props.onBlur && this.props.onBlur(this.quill);
  }
  render() {
    return <div style={this.getStyle()} ref={this.editor} />;
  }
}

QuillEditor.contextTypes = {
  component: PropTypes.any
};

QuillEditor.defaultProps = {
  disabled: false,
  width: "100%",
  height: "300px",
  options: {}
};
