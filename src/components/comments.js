import React, { Component } from 'react'

class CommponentsList extends Component {
  state = {
    show: false
  }

  handleToggleShow = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    const { article } = this.props
    const { show } = this.state
    return (
      <div>
        <section>{article.text}</section>
        <button onClick={this.handleToggleShow}>{show ? 'Hide comments' : 'Open comments'}</button>
        {show && (
          <div>
            <h4>Comments:</h4>
            <ul>
              {article.comments.map((comment) => (
                <li key={comment.id}>
                  <p>User name: {comment.user}</p>
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CommponentsList
