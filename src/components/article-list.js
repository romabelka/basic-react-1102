import Article from './article'
import Comment from './comment'
import React from 'react'
import useAccordion from '../custom-hooks/accordion'

const CommentList = (comments) => {
  // не понимаю почему comments это объект а не массив
  // нужно ли выносить компонент в отдельный файл?
  if (!comments.comments) {
    return <div />
  }
  const p = comments.comments.map((comment) => (
    <div key={comment.id} style={{ marginLeft: 10 }}>
      <b style={{ color: '#2a5885' }}>{comment.user}:</b>
      <p style={{ marginTop: 0 }}>{comment.text}</p>
    </div>
  ))
  return (
    <div>
      <hr />
      <div style={{ marginLeft: 10 }}>
        <h4>Комментарии:</h4>
        {p}
      </div>
    </div>
  )
}

export default function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()
  const articleItems = articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === openItemId}
        onBtnClick={toggleOpenItem(article.id)}
      >
        <CommentList comments={article.comments} />
      </Article>
    </li>
  ))
  return <ul>{articleItems}</ul>
}
