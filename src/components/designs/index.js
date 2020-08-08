import React, { useState , useCallback , useEffect} from "react"
import styles from "./index.module.css"
import { getFilteredDesigns, handleDelete } from '../../utils/designs'
import Design from "../../components/design"

const Designs = ({ objValue, searchValue }) => {
    const [designs, setDesigns] = useState([])

    const getDesignsByCategory = useCallback(async () => {
        const filteredDesigns = await getFilteredDesigns(objValue , searchValue )
        setDesigns(filteredDesigns)    
    })
    
    const deleteItem = async (id) => {
        await handleDelete(id)
        const newData = await designs.filter(design => design._id !== id)
        setDesigns(newData) 
    }
    

    const renderDesigns = () => {
        return designs.map((design) => {
            return (
                <Design key={design._id} {...design} id={design._id} deleteItem={deleteItem}/>
            )
        })
     }
    
      useEffect(() => {
      getDesignsByCategory()
      }, [objValue, searchValue])

    return (
        <div className={styles.designWrapper}>
            {renderDesigns()}
        </div>
    )
}

export default Designs