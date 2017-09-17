import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter as Router } from 'react-router'
import App from './App'

/* global __webpack_public_path__ */
export default (scripts, styles) => {
  return (req, res) => {
    var context = {}

    const basename = __webpack_public_path__.replace(/\/$/, '')
    const html = ReactDOMServer.renderToString(
      <Router basename={ basename } location={ req.url } context={ context }>
        <App />
      </Router>
    )
    const helmet = Helmet.renderStatic()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.render('server-template', { ...helmet, html, scripts, styles })
    }
  }
}
