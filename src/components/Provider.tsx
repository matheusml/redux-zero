import * as React from "react"
import * as PropTypes from "prop-types"

export interface Props {
  context: object
}

export interface State {}

export default class Provider extends React.Component<Props, State> {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return this.props.context
  }
  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}
