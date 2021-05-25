import React from 'react'
import DisplayMovie from './Components/DisplayMovies'
import DisplayTV from './Components/DisplayTV'
import searchBar from './Components/HomePage'
import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/movies' component={DisplayMovie} />
                    <Route exact path='/tv' component={DisplayTV} />
                    <Route exact path='/' component={searchBar} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}