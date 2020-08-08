import React, { useContext } from "react"
import PageLayout from "../../components/page-layout"
import styles from "./index.module.css"
import Link from "../../components/link"
import UserContext from "../../Context"


const HomePage = () => {
  const context = useContext(UserContext)
    const isLoggedIn = context.user && context.user.loggedIn

    return (
      <PageLayout>
        <div className={styles.homePage}>
          <h2 className={styles.h2}> Get and share design inspiration for your dream home!</h2>
          {isLoggedIn ? (<p className={styles.info} />) : (
           <p className={styles.info}>
            <Link href="/login" title="Login" styleType="navLink" /> /
            <Link href="/register" title="Register" styleType="navLink"/>
            to lear more...
          </p>
          )}
        </div>
    </PageLayout>
  )
}

export default HomePage
