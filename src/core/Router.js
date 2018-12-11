//Import React
import React from 'react'

//Import Router
import { Switch, Route } from 'react-router-dom'


//Import All Components
import Home from '../view/Home/Home'
import About from '../view/About/About'

const Router = () => {
    return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
        )
}

export default Router;