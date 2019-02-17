import Comment from './comment'
import React from 'react'

class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: true }
  }

  renderComments(comments) {
    const { isOpen } = this.state
    return (
      isOpen &&
      comments.map((comment) => (
        <div key={comment.id} style={{ marginLeft: 10 }}>
          <Comment text={comment.text} user={comment.user} />
        </div>
      ))
    )
  }

  handleChange = (event) => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { comments } = this.props
    const { isOpen } = this.state
    return (
      <div>
        <hr />
        <div style={{ marginLeft: 10 }}>
          <h4>Комментарии:</h4>
          <button onClick={this.handleChange}>{isOpen ? 'закрыть' : 'открыть'}</button>
          {this.renderComments(comments)}
        </div>
      </div>
    )
  }
}

export default CommentList
