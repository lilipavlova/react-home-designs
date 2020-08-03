import React, { useState } from "react"
import styles from "./index.module.css"

import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import Title from "../../components/title"
import SubmitButton from "../../components/button/submitButton"
import { Link } from "react-router-dom"


const RegisterPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")



   const handleSubmit = (event) => {
        event.preventDefault()

        console.log(email)
       console.log(password) 
       console.log(rePassword)
    }


        return ( 
            <PageLayout>
                <form className={styles.container} onSubmit={handleSubmit}>
                    <Title title="Registration form"/>
                    <Input type="email" value={email} label="Email" id="email" onChange={e => setEmail(e.target.value)}/>
                    <Input type="password" value={password} label="Password" id="password" onChange={e => setPassword(e.target.value)} />
                    <Input type="password" value={rePassword} label="Re-Password" id="rePassword" onChange={e => setRePassword(e.target.value)}/>
                    <SubmitButton title="Submit" />
                    <p className={styles.p} >Already have an account? <Link to="/login">Login</Link> here.</p>
                </form>
            </PageLayout>
     )
}

export default RegisterPage