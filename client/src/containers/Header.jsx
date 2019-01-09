import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import '../styles/Header.css'

class Header extends Component{

    state={
        search: ''
    }


    clickSearchBar = event => {
        event.preventDefault()
        const lengthSearch = this.state.search.length
        if(lengthSearch <= 2){
            document.getElementById('searchbar').style.backgroundColor = '#DC3545'
            document.getElementById('searchbar').style.color = 'white'
            document.getElementById('searchbar').classList.add('placeholderColorWhite')
            document.getElementById('searchbar').placeholder ='3 characters minimum'
        }else{
            this.props.history.push('/search=' + this.state.search)
        }
    }

    changeSearch = event => {
        const search = event.target.value
        this.setState({search})
    }


    render(){

        return(
            <Fragment>
                <header>
                    <nav className="navbar navbar-dark bg-dark justify-content-between">
                        <Link to='/' className="navbar-brand">AmilTools</Link>

                        <form className="form-inline">
                            <a target='_blank' href="https://devgabinrimbault.gitbook.io/amiltool-s/"><i className="nav-account-icon fas fa-book"></i></a>
                            <Link to='/user'><i className="nav-account-icon fas fa-user"></i></Link>
                            <input onChange={(e) => this.changeSearch(e)} className="form-control mr-sm-2" type="search" placeholder="Search an user..." id="searchbar" aria-label="Search" />
                            <button onClick={(e) => this.clickSearchBar(e)} className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default withRouter(Header);