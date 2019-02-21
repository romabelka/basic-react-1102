import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../ac'

class Counter extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.handleIncrement()
    //        this.props.dispatch(increment())
  }
}

const mapStateToProps = (storeState) => ({
  count: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
