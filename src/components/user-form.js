import React, { Component } from 'react'

class UserForm extends Component {
  render() {
    const { value } = this.props
    return (
      <div>
        Username: <input value={value} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
