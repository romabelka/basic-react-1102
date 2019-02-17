import React, { Component } from 'react'

class Toggle extends Component {
  state = {
    isOpen: this.props.isOpen
  }
  handler = () => this.setState({ isOpen: !this.state.isOpen })
}

class Article extends Toggle {
  render() {
    const { article } = this.props
    const btnText = this.state.isOpen ? 'close' : 'open'

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={this.handler}>{btnText}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { article } = this.props
    if (!this.state.isOpen) return null
    return <section>{article.text}</section>
  }
}

export default Article
