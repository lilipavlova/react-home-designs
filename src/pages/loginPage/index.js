import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import styles from "./index.module.css"
import authenticate from "../../utils/authenticate"
import UserContext from '../../Context'

import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import Title from "../../components/title"
import SubmitButton from "../../components/button/submitButton"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

      await authenticate('http://localhost:9999/api/user/login', {
        email,
        password
      }, (user) => {
        context.logIn(user)
        history.push('/')
      }, (e) => {
        console.log('Error', e)
      }
    )
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