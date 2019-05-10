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
    this.state = {
      _options: {},
      defaultOptions
    };
    this.getStyle = this.getStyle.bind(this);
    this.setContent = this.setContent.bind(this);
  }
  componentDidMount() {
    this.setState(
      {
        _options: Object.assign(
          {},
          this.state.defaultOptions,
          this.props.globalOptions,
          this.props.options ? this.props.options : {}
        )
      },
      () => {
        this.quill = new Quill(this.editor.current, this.state._options);
        this.setContent(this.props.content);
        this.quill.enable(!this.props.disabled);
      }
    );
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.disabled !== nextProps.disabled) {
      this.quill.enable(!nextProps.disabled);
    }
    if (this.props.content !== nextProps.content) {
      this.setContent(nextProps.content);
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
  options: () => ({}),
  globalOptions: () => ({})
};
