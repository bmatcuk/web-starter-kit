import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

let rootElement = document.getElementById('root')
if (!rootElement) {
  rootElement = document.createElement('div')
  document.body.insertBefore(rootElement, document.body.childNodes[0])
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    rootElement
  )
}

render(App)
if (module.hot) module.hot.accept('./App', () => render(App))
