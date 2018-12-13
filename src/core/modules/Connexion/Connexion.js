import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import './Connexion.css';

class Connexion extends Component {

    state = {
        goToApp: false
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({goToApp: true})
    }

    render() {

        if(this.state.goToApp){
            return <Redirect push to="/app" />
        }

        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="row justify-content-lg-center">
                        <div className="boardConnexion col-lg-5">
                            <div className="titleBoardConnexion">
                                Connexion
                            </div>
                            <div className="contentBoardConnexion">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="mail">Email adress</label>
                                        <input className="form-control" placeholder="Email@amiltone.fr" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Connexion