import React from "react"
import styles from "./likeButton.module.css"
import { useHistory} from 'react-router-dom'



const LikeButton = ({ title , id}) => {
const history = useHistory()
    

    const handleLike = async () => {
    
		history.push('/');
    }
    
    
    return (
        <button className={styles.likeButton} type="submit" onClick={handleLike}>{title}</button>
    )
}

export default LikeButton