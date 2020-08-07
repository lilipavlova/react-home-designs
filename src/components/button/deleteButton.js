import React from "react"
import styles from "./deleteButton.module.css"
import { useHistory} from 'react-router-dom'
import getCookie from "../../utils/cookie"


const DeleteButton = ({ title , id}) => {
const history = useHistory()
    

    const handleDelete = async () => {
        	await fetch(`http://localhost:9999/api/designs/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getCookie('x-auth-token')
			}
		});
		history.push('/yourDesigns');
	}
    

    return (
        <button className={styles.deleteButton} type="submit" onClick={handleDelete}>{title}</button>
    )
}

export default DeleteButton