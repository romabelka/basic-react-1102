import React, { Component } from 'react'

class AccordionComponent extends Component {
  state = {
    openedItemId: null
  }

  toggleOpenItem = (openedItemId) => () => {
    this.setState({ openedItemId: openedItemId === this.state.openedItemId ? null : openedItemId })
  }
}

export default AccordionComponent
