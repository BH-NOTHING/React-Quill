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
  initQuill() {
    if (this.editor.current) {
      this._options = Object.assign({}, defaultOptions, this.props.options);
      this.quill = new Quill(this.editor.current, this._options);
      this.setContent(this.props.content);
      this.quill.enable(!this.props.disabled);
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
