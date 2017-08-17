import React from 'react'
import Button from '../Button'
import cn from 'classnames'
import project from '../../../package.json'
import styles from './styles.css'

const scrollToFeatures = (e) => {
  document.getElementById('features').scrollIntoView()
  document.activeElement.blur()
  e.preventDefault()
}

const HomePage = () => (
  <div className={ styles.container }>
    <header className={ styles.hero }>
      <h1 className={ styles.header }>{ project.name }</h1>
      <hr className={ styles.rule } />
      <h2 className={ styles.subtitle }>{ project.description }</h2>
      <Button to="#" onClick={ scrollToFeatures }>Read More</Button>
    </header>
    <section id="features" className={ cn('main', styles.features) }>
      <div className={ styles.featuresContainer }>
        <div>
          <h3>Isomorphic</h3>
          <p>Render on the server and in the client; pre-render static content</p>
        </div>
        <div>
          <h3>Hot Reload</h3>
          <p>Make development easier with hot reload</p>
        </div>
        <div>
          <h3>Newest Libraries</h3>
          <p>Newest versions of webpack, babel, react, and more</p>
        </div>
      </div>
    </section>
  </div>
)

export default HomePage
