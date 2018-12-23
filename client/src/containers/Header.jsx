import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

import '../styles/Header.css'

class Header extends Component{
    render(){
        return(
            <Fragment>
                <header>
                    <nav className="navbar navbar-dark bg-dark justify-content-between">
                        <Link to='/' className="navbar-brand">AmilTools</Link>

                        <form className="form-inline">
                            <Link to='/doc'><i className="nav-account-icon fas fa-book"></i></Link>
                            <Link to='/user'><i className="nav-account-icon fas fa-user"></i></Link>
                                
                            <input disabled className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button disabled className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default Header;