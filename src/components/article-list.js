import React from 'react'
import Article from './article'
import AccordionComponent from './accordion-component'

class ArticleList extends AccordionComponent {
  render() {
    const { articles } = this.props
    const { openedItemId } = this.state
    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          onBtnClick={this.toggleOpenItem(article.id)}
          isOpen={article.id === openedItemId}
        />
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default ArticleList

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
