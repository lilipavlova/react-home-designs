import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/homePage"
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"
import CreatePage from './pages/createPage'


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/create" component={CreatePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation