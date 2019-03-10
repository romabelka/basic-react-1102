import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ArticlesRoute from './components/routes/articles'
import Filters from './components/filters'
import UserForm from './components/user-form'
import Counter from './components/counter'
import CommentsPage from './components/routes/comments-page'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Article App</h1>
        <div>
          <div>
            <div>
              <NavLink to="/articles" activeStyle={{ color: 'red' }}>
                Articles
              </NavLink>
            </div>
            <div>
              <NavLink to="/filters" activeStyle={{ color: 'red' }}>
                Filters
              </NavLink>
            </div>
            <div>
              <NavLink to="/counter" activeStyle={{ color: 'red' }}>
                Counter
              </NavLink>
            </div>
            <div>
              <NavLink to="/comments" activeStyle={{ color: 'red' }}>
                Comments
              </NavLink>
            </div>
          </div>
        </div>
        <UserForm />
        <Switch>
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>New article form</h1>} />
          <Route path="/articles" component={ArticlesRoute} />
          <Route path="/comments/:page?" component={CommentsPage} />
          <Route path="/" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
