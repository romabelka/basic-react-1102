import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

    return <ul className="test__article-list--container">{articleItems}</ul>
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchAll: PropTypes.func,
  //from toggleOpen decorator
  toggleOpenItem: PropTypes.func.isRequired,
  openItemId: PropTypes.string
}

function filterArticles(articles, { range, selected }) {
  let result = []
  if (selected && selected.length) {
    result = articles.filter((article) => selected.some((item) => article.id === item.value))
  } else {
    result = articles
  }

  if (range && range.from && range.to) {
    result = result.filter((article) => article.date >= range.from && article.date <= range.to)
  }

  return result
}

export default connect((state) => ({
  articles: filterArticles(state.articles, state.articlesFilter)
}))(accordion(ArticleList))
