import React, { Component } from 'react'

class ToggleComponent extends Component {
  state = {
    isOpen: false
  }

  toggle = () => () => this.setState({ isOpen: !this.state.isOpen })

  toggleButtonLabel = () => (this.state.isOpen ? 'Close' : 'Open')
}

export default ToggleComponent
