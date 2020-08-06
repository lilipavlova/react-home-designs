import React from "react"
import styles from "./index.module.css"

const Alert = ({message}) => {
    return (
        <div className={styles.container}>
            <p className={styles.message} >{message}</p>
        </div>
    )
}

export default Alert

