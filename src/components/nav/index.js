import React, { Component } from 'react'
import Link from "../link"
import styles from './index.module.css'



class Nav extends Component {

  render() {
        return (
      <nav className={styles.nav}>
              <Link href="/livingroom" style="navLink" title="Living Room" />
              <Link href="/bedroom" style="navLink" title="Bedroom" />
              <Link href="/Kitchen" style="navLink" title="Kitchen" />
              <Link href="/bathroom" style="navLink" title="Bathroom" />
              <Link href="/garden" style="navLink" title="Garden"/>
      </nav>
    )
  }
}

export default Nav