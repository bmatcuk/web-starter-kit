import React from 'react'
import cn from 'classnames'
import Readme from '../../../README.md'
import styles from './styles.css'

const AboutPage = () => (
  <section className={ cn('main', styles.about) }>
    <Readme />
  </section>
)

export default AboutPage
