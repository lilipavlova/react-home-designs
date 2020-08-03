import React, { useState } from "react"
import styles from "./index.module.css"

import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import Title from "../../components/title"
import SubmitButton from "../../components/button/submitButton"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(email)
        console.log(password)
    }

        return ( 
            <PageLayout>
                <form className={styles.container} onSubmit={handleSubmit}>
                    <Title title="Login form"/>
                    <Input type="email" value={email} label="Email" id="email" onChange={e => setEmail(e.target.value)}/>
                    <Input type="password" value={password} label="Password" id="password" onChange={e => setPassword(e.target.value)} />
                    <SubmitButton title="Submit" />
                </form>
            </PageLayout>
     )
    
}

export default LoginPage