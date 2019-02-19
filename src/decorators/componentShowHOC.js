import React, { Component } from 'react'

// export default function (WrappedComponent) {
//   return class ComponentShowHOC extends Component {
//     state = {
//       show: false
//     }
//     handleToggleShow = () => this.setState({ show: !this.state.show })

//     render() {
//       return (
//         <WrappedComponent
//           {...this.props}
//           show={this.state.show}
//           handleToggleShow={this.handleToggleShow}
//         />
//       )
//     }
//   }
// }

export default (OriginalComponent) =>
  class ComponentShowHOC extends Component {
    state = {
      show: false
    }

    handleToggleShow = () => this.setState({ show: !this.state.show })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          show={this.state.show}
          handleToggleShow={this.handleToggleShow}
        />
      )
    }
  }
