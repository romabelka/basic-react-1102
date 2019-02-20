import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  static propTypes = {
    fetchAll: PropTypes.func,
    articles: PropTypes.array,
    toggleOpenItem: PropTypes.func,
    openItemId: PropTypes.number
  }

  componentDidMount() {
    this.props.fetchAll && this.props.fetchAll()
  }

  render() {
    const { articles, toggleOpenItem, openItemId } = this.props
    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          onBtnClick={toggleOpenItem(article.id)}
          isOpen={article.id === openItemId}
        />
      </li>
    ))

    return <ul className="test--article-list__container">{articleItems}</ul>
  }
}
ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default accordion(ArticleList)
