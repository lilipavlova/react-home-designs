import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import Designs from "../../components/designs"
import PageLayout from "../../components/page-layout"
import UserContext from "../../Context"
import Title from "../../components/title"

const YourDesignsPage = () => {
    const context = useContext(UserContext)
    const userEmail = context.user.email
    
    
    return (
        <PageLayout>
            <Title title="Here you can find the designs created by you :)"/>
           <Designs objValue="creator.email" searchValue={userEmail} />
        </PageLayout>
    )
}

export default YourDesignsPage