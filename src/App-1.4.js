import React, { Component } from 'react'
import articles from './fixtures'
import ArticleDecorator from './1.4/article-decorator'
import ArticleHook from './1.4/article-hook'
import ArticleInherited from './1.4/article-inherited'
class App extends Component {
  render() {
    return (
      <div>
        <p>decorator =========================</p>
        <ArticleDecorator article={articles[0]} />
        <p>hook ==============================</p>
        <ArticleHook article={articles[0]} />
        <p>inherited =========================</p>
        <ArticleInherited article={articles[0]} />
      </div>
    )
  }
}

export default App
