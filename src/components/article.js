import React, { Component } from 'react'

class Article extends Component {
  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) {
      return null
    }
    return (
      <div>
        <section>{article.text}</section>
        <div>{this.props.children}</div>
      </div>
    )
  }

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
}

export default Article
