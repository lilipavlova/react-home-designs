import React from "react"
import PageLayout from "../../components/page-layout"
import styles from "./index.module.css"


const homePage = () => {

    return (
      <PageLayout>
        <div className={styles.homePage}>
          <h2 className={styles.h2}> 
            Get / Share design inspiration for your home!
          </h2>

        </div>
    </PageLayout>
  )
}

export default homePage
