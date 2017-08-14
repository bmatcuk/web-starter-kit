import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import cn from 'classnames'
import project from '../../../package.json'
import styles from './styles.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(e) {
    this.setState({ menuOpen: !this.state.menuOpen })
    document.activeElement.blur()
    e.preventDefault()
  }

  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.container }>
          <h1><Link to="/">{ project.name }</Link></h1>
          <ul className={ cn(this.state.menuOpen && styles.open) }>
            <li className={ styles.menu }><a href="#" onClick={ this.toggleMenu }>menu</a></li>
            <li><NavLink to="/about" activeClassName={ styles.active }>about</NavLink></li>
            <li><NavLink to="/libraries" activeClassName={ styles.active }>libraries</NavLink></li>
            <li><a href={ project.homepage }>github</a></li>
          </ul>
        </div>
      </header>
    )
  }
}
