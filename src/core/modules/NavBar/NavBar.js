import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {

    return(
        <Fragment>
            <header>
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <Link to='/' className="navbar-brand">AmilTools</Link>

                    <form className="form-inline">
                        <a href="https://project-manager-eito.gitbook.io/amiltools-app/" target="_blank"><i className="nav-account-icon fas fa-book"></i></a>
                        <Link to="/user/"><i className="nav-account-icon fas fa-user"></i></Link>
                        
                        <input disabled id="disabledInput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0 disabled" type="submit">Search</button>
                    </form>
                </nav>
            </header>
        </Fragment>
    )
}

export default NavBar