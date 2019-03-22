import React from 'react'
import Quill from 'quill'
import PropTypes from 'prop-types'
import defaultOptions from './options'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default class QuillEditor extends React.Component {
  constructor(props) {
    super(props)
    this.editor = React.createRef()
    this.state = {
      defaultOptions
    }
  }
  componentDidMount() {
    this.setState({
      _options: Object.assign(
          {},
          this.state.defaultOptions,
          this.props.globalOptions,
          this.props.options ? this.props.options : {}
        )
      },()=>{
        this.quill = new Quill(this.editor.current, this.state._options)
      }
    )
  }
  render() {
    return (
      <div ref={this.editor}></div>
    )
  }
}

QuillEditor.contextTypes = {
  component: PropTypes.any
}

QuillEditor.defaultProps = {
  disabled: false,
  options: () => ({}),
  globalOptions: () => ({})
}
