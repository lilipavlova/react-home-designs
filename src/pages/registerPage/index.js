import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import styles from "./index.module.css"
import authenticate from "../../utils/authenticate"
import { Link } from "react-router-dom"
import UserContext from '../../Context'

import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import Title from "../../components/title"
import SubmitButton from "../../components/button/submitButton"



const RegisterPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const context = useContext(UserContext)
    const history = useHistory()



   const handleSubmit = async (event) => {
       event.preventDefault()
       
        await authenticate('http://localhost:9999/api/user/register', {
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