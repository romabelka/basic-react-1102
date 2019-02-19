import React, { Component } from 'react'
import ShowHOC from '../decorators/componentShowHOC'

class CommponentsList extends Component {
  render() {
    const { article, handleToggleShow, show } = this.props
    console.log(this.props)
    return (
      <div>
        <section>{article.text}</section>
        <button onClick={handleToggleShow}>{show ? 'Hide comments' : 'Open comments'}</button>
        {show && article.comments && (
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

export default ShowHOC(CommponentsList)
