import React, { Component } from 'react'
import  Link from "../link"
import styles from './index.module.css'




class Header extends Component {

  render() {
        return (
          <header className={styles.header}>
              <Link href="/" styleType="headerLinkHome" title="Home Designs" />
            <ul className={styles.ul}>
              <Link href="/create" styleType="headerLink" title="Create" />
              <Link href="/ideas" styleType="headerLink" title="Your designs" />
              <Link href="/likes" styleType="headerLink" title="Liked" />
              <Link href="/logout" styleType="headerLink" title="Logout"/>
              <Link href="/login" styleType="headerLink" title="Login" />
              <Link href="/register" styleType="headerLink" title="Register" />
            </ul>
          </header>
        
    )
  }
}

export default Header