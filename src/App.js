import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from './components/routes/articles'
import Filters from './components/filters'
import UserForm from './components/user-form'
import Counter from './components/counter'
import CommentsRoute from './components/routes/comments'
import MainMenu, { MenuItem } from './components/main-menu'
import { Provider as UserProvider } from './contexts/user-context'
import LangProvider from './components/i18n/lang-provider'

class App extends Component {
  state = {
    username: 'Roma',
    language: 'en'
  }

  setUsername = (username) => this.setState({ username })
  changeLanguage = (language) => (ev) => this.setState({ language })

  render() {
    return (
      <LangProvider language={this.state.language}>
        <UserProvider value={this.state.username}>
          <div>
            <h1>Article App</h1>
            <ul>
              <li onClick={this.changeLanguage('en')}>English</li>
              <li onClick={this.changeLanguage('ru')}>Russian</li>
            </ul>
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
      </LangProvider>
    )
  }
}

export default App
