import React from 'react'
import Header from "../header"
import styles from './index.module.css'
import Nav from "../nav"
import Footer from "../footer"

const PageLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Nav />
        <div className={styles['inner-container']}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
