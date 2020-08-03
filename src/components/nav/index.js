import React, { Component } from 'react'
import Link from "../link"
import styles from './index.module.css'



class Nav extends Component {

  render() {
        return (
      <nav className={styles.nav}>
              <Link href="/livingroom" styleType="navLink" title="Living Room" />
              <Link href="/bedroom" styleType="navLink" title="Bedroom" />
              <Link href="/Kitchen" styleType="navLink" title="Kitchen" />
              <Link href="/bathroom" styleType="navLink" title="Bathroom" />
              <Link href="/garden" styleType="navLink" title="Garden"/>
      </nav>
    )
  }
}

export default Nav