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

const mapStateToStore = (storeState) => {
  const { articles, selected } = storeState
  let filteredArticles = articles
  if (selected.length !== 0) {
    filteredArticles = articles.filter((article) =>
      selected.map((select) => select.value).includes(article.id)
    )
    filteredArticles = filteredArticles.length ? filteredArticles : articles
  }
  return {
    articles: filteredArticles
  }
}

export default connect(mapStateToStore)(accordion(ArticleList))
