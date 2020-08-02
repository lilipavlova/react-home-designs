import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import homePage from "./pages/homePage"


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={homePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation