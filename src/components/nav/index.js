import React, { Component } from 'react'
import Link from "../link"
import styles from './index.module.css'



class Nav extends Component {

  render() {
        return (
      <nav className={styles.nav}>
              <Link href="/targetDesign/livingRoom" styleType="navLink" title="Living Room" />
              <Link href="/targetDesign/bedroom" styleType="navLink" title="Bedroom" />
              <Link href="/targetDesign/kitchen" styleType="navLink" title="Kitchen" />
              <Link href="/targetDesign/bathroom" styleType="navLink" title="Bathroom" />
              <Link href="/targetDesign/garden" styleType="navLink" title="Garden"/>
      </nav>
    )
  }
}

export default Nav