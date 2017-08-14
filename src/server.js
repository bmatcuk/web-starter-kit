import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter as Router } from 'react-router'
import App from './App'

export default (scripts, styles) => {
  scripts = scripts.map((script) => (
    `<script type="text/javascript" src="${script}"></script>`
  )).join('')
  styles = styles.map((style) => (
    `<link rel="stylesheet" type="text/css" href="${style}" />`
  )).join('')

  return (req, res) => {
    var context = {}

    const html = ReactDOMServer.renderToString(
      <Router location={ req.url } context={ context }>
        <App />
      </Router>
    )
    const helmet = Helmet.renderStatic()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.send(`
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
          <head>
            <meta charset="UTF-8" />
            ${helmet.meta.toString()}
            ${helmet.title.toString()}
            ${helmet.link.toString()}
            ${styles}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${html}</div>
            ${helmet.script.toString()}
            ${scripts}
          </body>
        </html>
      `)
    }
  }
}
