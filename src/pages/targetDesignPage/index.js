import React from "react"
import { useParams } from "react-router-dom"
import Designs from "../../components/designs"
import PageLayout from "../../components/page-layout"

const TargetDesignPage = () => {
    const params = useParams()
    const category = params.category
    
    return (
        <PageLayout>
            <Designs objValue="category" searchValue={category} />
        </PageLayout>

    )
}

export default TargetDesignPage