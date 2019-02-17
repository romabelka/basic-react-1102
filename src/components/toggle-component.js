import { Component } from 'react'

export default class extends Component {
  state = {
    isOpen: false
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })
}
