import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './pages/MainPage'

import Start from './pages/Start'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Start}/>
            <Route path='/media' exact component={MainPage}/>
        </Switch>
        </BrowserRouter>
    )
}