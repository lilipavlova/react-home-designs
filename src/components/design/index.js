import React, { useContext } from "react"
import styles from "./index.module.css"
import UserContext from "../../Context"

const Design = ({ image, creator }) => {
    const context = useContext(UserContext)
    const creatorEmail = context.user.email   


    return (
        <div className={styles.card}>
            <img src={image} alt="design pic" className={styles.image}/>
            <p className={styles.p} >Created by: {creator.email === creatorEmail ? "you" : creator.email }</p>
        </div>
    )
}

export default Design