import React, { Component } from 'react'
import CommentList from './comment-list'
import accordion from '../decorators/accordion'

class Article extends Component {
  render() {
    const { article, onBtnClick, isOpen } = this.props
    const btnText = isOpen ? 'close' : 'open'

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={onBtnClick}>{btnText}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { isOpen, article, toggleOpenItem, openItem } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        {article.comments ? (
          <CommentList
            comments={article.comments}
            onBtnClick={toggleOpenItem(openItem)}
            isOpen={openItem}
          />
        ) : null}
      </section>
    )
  }
}

export default accordion(Article)

// custom-hooks
// import useAccordion from '../custom-hooks/accordion'

// export default function Article({ article, onBtnClick, isOpen }) {
//   const { openItem, toggleOpenItem } = useAccordion()
//   const btnText = isOpen ? 'close' : 'open'

//   const getBody = () => {
//     if (!isOpen) return null

//     return (<section>
//       {article.text}
//       {article.comments ? <CommentList comments={article.comments} onBtnClick={toggleOpenItem(openItem)} isOpen={openItem} /> : null}
//     </section>)
//   }

//   return (
//     <div>
//       <h2>{article.title}</h2>
//       <button onClick={onBtnClick}>{btnText}</button>
//       {getBody()}
//     </div>
//   )
// }
