import React, { Component } from 'react'

class UserForm extends Component {
  state = {
    username: ''
  }

  render() {
    return (
      <div>
        Username: <input value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange = (ev) => {
    this.setState({
      username: ev.target.value.length < 10 ? ev.target.value : ''
    })
  }
}

export default UserForm
