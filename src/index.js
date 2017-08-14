import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './components/HomePage'
import './index.global.css'

const rootElement = document.createElement('div');
document.body.insertBefore(rootElement, document.body.childNodes[0]);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

render(HomePage)
if (module.hot) module.hot.accept('./components/HomePage', () => render(HomePage));
