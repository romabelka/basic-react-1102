import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ArticlesRoute from './components/routes/articles'
import Filters from './components/filters'
import UserForm from './components/user-form'
import Counter from './components/counter'
import CommentsRoute from './components/routes/comments'
import MainMenu, { MenuItem } from './components/main-menu'
import { Provider as UserProvider } from './contexts/user-context'
import { Provider as LanguageProvider } from './contexts/language-context'
import LanguageSelector from './components/language-selector'

class App extends Component {
  state = {
    username: 'Roma',
    lang: 'EN'
  }

  setUsername = (username) => this.setState({ username })

  setLanguage = (lang) => this.setState({ lang })

  render() {
    return (
      <LanguageProvider value={this.state.lang}>
        <UserProvider value={this.state.username}>
          <div>
            <h1>Article App</h1>
            <LanguageSelector value={this.state.lang} onChange={this.setLanguage} />
            <MainMenu>
              <MenuItem link="/articles">Articles</MenuItem>
              <MenuItem link="/filters">Filters</MenuItem>
              <MenuItem link="/counter">Counter</MenuItem>
              <MenuItem link="/comments">Comments</MenuItem>
            </MainMenu>
            <UserForm value={this.state.username} onChange={this.setUsername} />
            <Switch>
              <Redirect from="/" exact to="/articles" />
              <Route path="/counter" component={Counter} exact />
              <Route path="/filters" component={Filters} />
              <Route path="/articles/new" render={() => <h1>New article form</h1>} />
              <Route path="/articles" component={ArticlesRoute} />
              <Route path="/comments" component={CommentsRoute} />
              <Route path="/error" render={() => <h1>Error Page</h1>} />
              <Route path="/" render={() => <h1>Not Found Page</h1>} />
            </Switch>
          </div>
        </UserProvider>
      </LanguageProvider>
    )
  }
}

export default App
