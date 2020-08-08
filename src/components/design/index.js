import React, { useContext } from "react"
import styles from "./index.module.css"
import UserContext from "../../Context"

const Design = (props) => {
    const context = useContext(UserContext)
    const isCreator = context.user.email === props.creator.email

    return (
        <div className={styles.card}>
            <img src={props.image} alt="design pic" className={styles.image}/>
            <p className={styles.p} >Created by: {isCreator ? "you" : props.creator.email}</p>
            {isCreator ? <button className={styles.deleteButton} onClick={() => props.deleteItem(props.id)}>Delete</button> : null}
        </div>
    )
}

export default Design