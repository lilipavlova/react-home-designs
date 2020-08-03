import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/homePage"
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation