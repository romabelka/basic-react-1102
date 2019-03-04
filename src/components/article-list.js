import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  articlesLoadedSelector,
  articlesLoadingSelector,
  filtratedArticlesSelector
} from '../selectors'
import { loadAllArticles } from '../ac'
import Loader from './common/loader'
import { NavLink } from 'react-router-dom'
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
    const { loading, loaded, fetchAll } = this.props
    fetchAll && !loading && !loaded && fetchAll()
  }

  render() {
    const { articles, loading } = this.props

    if (loading) return <Loader />

    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: 'red' }}>
          {article.title}
        </NavLink>
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

export default connect(
  (state) => ({
    articles: filtratedArticlesSelector(state),
    loading: articlesLoadingSelector(state),
    loaded: articlesLoadedSelector(state)
  }),
  { fetchAll: loadAllArticles }
)(ArticleList)
