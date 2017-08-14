import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import LibrariesPage from './components/LibrariesPage'
import project from '../package.json'
import './index.global.css'

const App = () => (
  <div>
    <Helmet titleTemplate={ `%s - ${project.name}` } defaultTitle={ project.name }>
      <html lang="en" />
      <meta name="description" content={ project.description } />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/about" component={ AboutPage } />
      <Route exact path="/libraries" component={ LibrariesPage } />
    </Switch>
    <Footer />
  </div>
)

export default App
