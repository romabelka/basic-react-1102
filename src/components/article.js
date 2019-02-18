import React, { Component } from 'react'

class Article extends Component {
  render() {
    const { article, onBtnClick, isOpen } = this.props
    const btnText = isOpen ? 'close' : 'open'

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={onBtnClick}>{btnText}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return (
      <div>
        <section>{article.text}</section>
        <div>
          <h3>Comments:</h3>
          <ul>
            {article.comments.map((comment) => (
              <li key={comment.id}>
                <p>User name: {comment.user}</p>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Article
