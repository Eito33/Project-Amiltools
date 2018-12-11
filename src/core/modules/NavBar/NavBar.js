//Import React
import React, {Component, Fragment} from 'react';

//Import Router
import {Link} from 'react-router-dom'

//Import CSS
import './NavBar.css'


class NavBar extends Component{
    render(){
        return(
            <Fragment>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default NavBar;
