import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticlesList extends Component {
  render() {
    const { articles, openItemId, toggleOpenItem } = this.props

    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          onBtnClick={toggleOpenItem(article.id)}
          isOpen={article.id === openItemId}
        />
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default accordion(ArticlesList)

//import AccodrionComponent from './accordion-component'
/*
import accordion from '../decorators/accordion'

function ArticleList({ articles, toggleOpenArticle, openArticleId }) {
    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          onBtnClick={toggleOpenArticle(article.id)}
          isOpen={article.id === openArticleId}
        />
      </li>
    ))

    return <ul>{articleItems}</ul>
}

export default accordion(ArticleList)
*/
