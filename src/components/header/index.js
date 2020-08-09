import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from "../../Context"
import  Link from "../link"
import styles from './index.module.css'




const Header = () => {
  const context = useContext(UserContext)
  const history = useHistory()

  const isLoggedIn = context.user && context.user.loggedIn
  

  const logOut = () => {
    context.logOut()
    history.push('/')
  }

 


        return (
          <header className={styles.header}>
              <Link href="/" styleType="headerLinkHome" title="Home Designs" />
            <ul className={styles.ulbox}>
              {(isLoggedIn ? (<Link href="/create" styleType="headerLink" title="Add design" />) : null)}
              {(isLoggedIn ? (<Link href="/yourDesigns" styleType="headerLink" title="Your designs" />) : null)}
              {(isLoggedIn ? (<Link href="/yourLikes" styleType="headerLink" title="Your likes" />) : null)}
              {(isLoggedIn ? (<button onClick={logOut} className={styles.logoutButton} >Logout</button>) : null)}

              {(isLoggedIn ? null : (<Link href="/login" styleType="headerLink" title="Login" />) )}
              {(isLoggedIn ? null : (<Link href="/register" styleType="headerLink" title="Register" />) )}
                            
            </ul>
          </header>
        
    )

}

export default Header