import React, { Component } from 'react'

class Article extends Component {
  getBody() {
    let style = { display: 'block' }
    const { isOpen, article } = this.props
    if (!isOpen) {
      style = { display: 'none' }
    }
    return (
      <div style={style}>
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
