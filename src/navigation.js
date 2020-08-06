import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/homePage"
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"
import CreatePage from './pages/createPage'
import TargetDesignPage from './pages/targetDesignPage'
import YourDesignsPage from "./pages/yourDesignsPage"
import ErrorPage from './pages/errorPage'



const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/create" component={CreatePage} />
                <Route path="/targetDesign/:category" component={TargetDesignPage} />
                <Route path="/yourDesigns" component={YourDesignsPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation