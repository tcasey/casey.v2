import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Info from './components/Info'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/skills' component={Skills} />
          <Route path='/details/:id' component={Info} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
