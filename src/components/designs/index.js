import React, { useState , useCallback , useEffect} from "react"
import styles from "./index.module.css"
import getDesigns from '../../utils/designs'

import Design from "../../components/design"

const Designs = ({ objValue, searchValue , buttonType}) => {
    const [designs , setDesigns ] = useState([])

    const getDesignsByCategory = useCallback(async () => {
        const allDesigns = await getDesigns()
        console.log(allDesigns)

         if (objValue.includes(".")) {
             const splittedValue = objValue.split(".")
             const [firstValue, secondValue] = splittedValue
             const designs = await allDesigns.filter(obj => obj[`${firstValue}`][`${secondValue}`] === searchValue)
            setDesigns(designs)
         } else {
             const designs = await allDesigns.filter(obj => obj[`${objValue}`] === searchValue)
             setDesigns(designs)
         }
          
  })

    const renderDesigns = () => {
        return designs.map((design) => {
            return (
                <Design key={design._id} {...design}/>
            )
        })
     }
    
      useEffect(() => {
      getDesignsByCategory()
      }, [objValue , searchValue])

    return (
        <div className={styles.designWrapper}>
            {renderDesigns()}
        </div>
    )
}

export default Designs