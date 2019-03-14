import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from './components/routes/articles'
import Filters from './components/filters'
import UserForm from './components/user-form'
import Counter from './components/counter'
import CommentsRoute from './components/routes/comments'
import MainMenu, { MenuItem } from './components/main-menu'
import { Provider as UserProvider } from './contexts/user-context'
import Localization from './components/localization'
import { LocalizationContext } from './contexts/localization-context'

class App extends Component {
  state = {
    username: 'Roma'
  }

  setUsername = (username) => this.setState({ username })

  render() {
    return (
      <LocalizationContext.Provider>
        <UserProvider value={this.state.username}>
          <div>
            <h1>Article App</h1>
            <Localization />
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
      </LocalizationContext.Provider>
    )
  }
}

export default App
