import React, { Component } from 'react'

export default (OriginalComponent) =>
  class ToggleComponent extends Component {
    state = {
      isOpen: false
    }

    render() {
      const { isOpen } = this.state

      return <OriginalComponent {...this.props} isOpen={isOpen} onToggle={this.onToggle} />
    }

    onToggle = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }
