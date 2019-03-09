import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import Loader from '../common/loader'
import { commentsSelector, commentsLoadingSelector, commentsLoadedSelector } from '../../selectors'
import Comment from '../comment'

class CommentsRoute extends Component {
  componentDidMount() {
    const { loading, loaded, fetchAll } = this.props
    fetchAll && !loading && !loaded && fetchAll()
  }

  render() {
    const { loading, comments } = this.props
    if (loading) return <Loader />

    const [...keys] = comments.keys()
    if (!keys.length) return <p>No comments</p>

    const commentList = (
      <ul>
        {keys.map((id) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
    return <div>{commentList}</div>
  }
}

export default connect(
  (state) => ({
    comments: commentsSelector(state),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }),
  { fetchAll: loadAllComments }
)(CommentsRoute)
