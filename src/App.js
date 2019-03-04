import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
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
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={ArticlesRoute} />
      </div>
    )
  }
}

export default App
