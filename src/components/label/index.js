import React from "react"
import styles from "./index.module.css"

const Label = ({htmlFor , title }) => {
    return (
        <div>
            <label htmlFor={htmlFor} className={styles.label}>{title}</label>
         </div>
    )
}

export default Label