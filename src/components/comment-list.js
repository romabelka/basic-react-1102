import React from 'react'
import Comment from './comment'
import ToggleComponent from './toggle-component'
import toggleOpen from '../decorators/toggle-open'

function CommentList({ comments }) {
  const getCommentsItems = () =>
    comments.map((comment) => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))

  return <ul>{comments && comments.length ? getCommentsItems() : <p>Not comments yet</p>}</ul>
}
export default toggleOpen(CommentList)

/**
 * Реализация с использованием наследования
 */
/*


class CommentList extends ToggleComponent {
  constructor(props) {
    super(props)
  }

  getComments() {
    const { comments } = this.props

    if (comments && comments.length) {
      return (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment {...comment} />
            </li>
          ))}
        </ul>
      )
    }

    return <p>Not comments yet</p>
  }

  render() {
    const { isOpen } = this.state
    return (
      <div>
        <button onClick={this.toggleOpen}>{isOpen ? 'close comments' : 'show comments'}</button>
        {isOpen ? this.getComments() : null}
      </div>
    )
  }
}

export default CommentList
*/
