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

/* global __webpack_public_path__ */
const render = Component => {
  const basename = __webpack_public_path__.replace(/\/$/, '')
  ReactDOM.render(
    <AppContainer>
      <Router basename={ basename }>
        <Component />
      </Router>
    </AppContainer>,
    rootElement
  )
}

render(App)
if (module.hot) module.hot.accept('./App', () => render(App))
