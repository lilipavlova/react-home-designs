import React, { useContext } from "react"
import Designs from "../../components/designs"
import PageLayout from "../../components/page-layout"
import UserContext from "../../Context"
import Title from "../../components/title"

const YourDesignsPage = () => {
    const context = useContext(UserContext)
    const userEmail = context.user.email
    
    
    return (
        <PageLayout>
            <Title title="Here you can find the designs created by you :)" />
            <Title title={userEmail} />
           <Designs objValue="creator.email" searchValue={userEmail} />
        </PageLayout>
    )
}

export default YourDesignsPage