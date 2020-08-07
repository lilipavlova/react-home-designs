import React, { useContext } from "react"
import styles from "./index.module.css"
import UserContext from "../../Context"
import DeleteButton from "../button/deleteButton"

const Design = ({ image, creator, id }) => {
    const context = useContext(UserContext)
    const isCreator = context.user.email === creator.email


    return (
        <div className={styles.card}>
            <img src={image} alt="design pic" className={styles.image}/>
            <p className={styles.p} >Created by: {isCreator ? "you" : creator.email}</p>
            {isCreator ? <DeleteButton title="Delete" id={id} /> : null}
        </div>
    )
}

export default Design