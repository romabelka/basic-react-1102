import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'
//import useAccordion from '../custom-hooks/accordion'

/*
export default function ArticleList({ articles, fetchAll }) {
  const { openItemId, toggleOpenItem } = useAccordion()
    useEffect(() => {
        fetchAll()
    })

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
*/

//import AccodrionComponent from './accordion-component'

class ArticleList extends Component {
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
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleOpenItem: PropTypes.func,
  fetchAll: PropTypes.func,
  openItemId: PropTypes.string
}

export default accordion(ArticleList)
