import React, { Component } from 'react'

class RenderPropToggler extends Component {
  static propTypes = {}

  state = {
    isOpen: false
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    return this.props.children(this.state.isOpen, this.toggleOpen)
  }
}

export default RenderPropToggler

/*
<div>
    <RenderPropToggler>
        {(isOpen, toggleOpen) => isOpen ? <CommentList toggleOpen={toggleOpen}/>}
    </RenderPropToggler>
</div>
*/
