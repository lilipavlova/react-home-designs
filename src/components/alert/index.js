import React from "react"
import styles from "./index.module.css"

const Alert = ({ message }) => {
    return (
        <div className={styles.module}>
          <div className={styles.modal_content}>
              <span class="close">&times;</span>
                <p>{message}</p>
           </div>
        </div>
    )
}

export default Alert
