import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticlesRoute from './components/routes/articles'
import Filters from './components/filters'
import UserForm from './components/user-form'
import Counter from './components/counter'

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
          </div>
        </div>
        <UserForm />
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>New article form</h1>} />
          <Route path="/articles" component={ArticlesRoute} />
        </Switch>
      </div>
    )
  }
}

export default App
