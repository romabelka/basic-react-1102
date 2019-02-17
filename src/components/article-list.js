import Article from './article'
import CommentList from './comment-list'
import React from 'react'
import useAccordion from '../custom-hooks/accordion'

export default function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()
  const articleItems = articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === openItemId}
        onBtnClick={toggleOpenItem(article.id)}
      >
        {article.comments && <CommentList comments={article.comments} />}
      </Article>
    </li>
  ))
  return <ul>{articleItems}</ul>
}
