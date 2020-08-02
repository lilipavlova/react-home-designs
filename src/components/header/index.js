import React, { Component } from 'react'
import  Link from "../link"
import styles from './index.module.css'




class Header extends Component {

  render() {
        return (
      <header className={styles.header}>
            <ul className={styles.ul}>
              <Link href="/" style="headerLink" title="Home Designs" />
              <Link href="/likes" style="headerLink" title="Your likes" />
              <Link href="/ideas" style="headerLink" title="Your ideas" />
              <Link href="/login" style="headerLink" title="Login" />
              <Link href="/register" style="headerLink" title="Register"/>
            </ul>
          </header>
        
    )
  }
}

export default Header