//HOC === Higher Order Component == Decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItem: false
    }

    toggleOpenItem = (openItem) => () => this.setState({ openItem: !openItem })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItem={this.state.openItem}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
