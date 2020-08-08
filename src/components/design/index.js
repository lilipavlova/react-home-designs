import React, { useContext, useState } from "react"
import styles from "./index.module.css"
import UserContext from "../../Context"
import DeleteButton from "../button/deleteButton"
import LikeButton from "../button/likeButton"

const Design = ({ image, creator, id }) => {
    const context = useContext(UserContext)
    const isCreator = context.user.email === creator.email
   



    return (
        <div className={styles.card}>
            <img src={image} alt="design pic" className={styles.image}/>
            <p className={styles.p} >Created by: {isCreator ? "you" : creator.email}</p>
            {isCreator ? <DeleteButton title="Delete" id={id} /> : <LikeButton title="Like" id={id}/>}
        </div>
    )
}

export default Design