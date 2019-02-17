import React, { Component } from 'react'

const toggleDecorator = (OriginComponent) =>
  class Decorator extends Component {
    state = {
      isOpen: false
    }

    handler = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
      return <OriginComponent {...this.props} isOpen={this.state.isOpen} setIsOpen={this.handler} />
    }
  }

function Article({ article, isOpen, setIsOpen }) {
  const btnText = isOpen ? 'close' : 'open'
  const handler = () => setIsOpen(!isOpen)

  const getBody = () => {
    if (!isOpen) return ''
    return <section>{article.text}</section>
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <button onClick={handler}>{btnText}</button>
      {getBody()}
    </div>
  )
}

export default toggleDecorator(Article)
