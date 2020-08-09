import React, { useContext } from "react"
import Designs from "../../components/designs"
import PageLayout from "../../components/page-layout"
import UserContext from "../../Context"
import Title from "../../components/title"

const LikesPage = () => {
    const context = useContext(UserContext)
    const userId = context.user.id
    const userEmail = context.user.email
    console.log(context.user)
     
    return (
        <PageLayout>
            <Title title={`Here you can find the designs liked by you: ${userEmail}`} />
           <Designs objValue="likes" searchValue={userId} />
        </PageLayout>
    )
}

export default LikesPage