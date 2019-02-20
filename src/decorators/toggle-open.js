import React from 'react'

export default (OriginalComponent) =>
  class ToggleOpen extends React.Component {
    state = {
      isOpen: false
    }

    toggleOpen = () => {
      this.setState((state) => ({
        isOpen: !state.isOpen
      }))
    }

    render() {
      return <OriginalComponent {...this.state} {...this.props} toggleOpen={this.toggleOpen} />
    }
  }
