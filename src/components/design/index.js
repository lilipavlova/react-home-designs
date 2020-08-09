import React, { useContext, useState, useEffect } from "react"
import styles from "./index.module.css"
import UserContext from "../../Context"
import { submitLike } from "../../utils/designs"

const Design = (props) => {
    const [likes, setLikes] = useState(props.likes)
    const context = useContext(UserContext)
    const userId = context.user.id
    const isCreator = context.user.email === props.creator.email
    const isLikedAlready = likes.find(e => e === userId)
   
    const likeItem = async (id) => {
        await submitLike(id)
        setLikes([...likes , `${userId}`]) 
    }

    return (
        <div className={styles.card}>
            <img src={props.image} alt="design pic" className={styles.image}/>
            <p className={styles.p} >Created by: {isCreator ? "you" : props.creator.email}</p>
            <p className={styles.p} > {likes.length} likes</p>
            {isCreator ? <button className={styles.deleteButton} onClick={() => props.deleteItem(props.id)}>Delete</button> : null}
            
            {!isCreator && !isLikedAlready ? <button className={styles.likeButton} onClick={() => likeItem(props.id)}>Like</button> : null}
            {!isCreator && isLikedAlready? <p className={styles.alreadyLiked} >Already liked</p>  : null}
        </div>
    )
}

export default Design