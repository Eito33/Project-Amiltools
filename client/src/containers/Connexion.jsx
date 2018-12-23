import React, {Component, Fragment} from 'react'
import axios from 'axios'

//Redux
import { connect } from 'react-redux'
import { isAuthActions, saveUserActions } from '../actions/index'
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router-dom'

import '../styles/Connexion.css'

class Connexion extends Component{

    state = {
        goToConnect: false,
        mail: 'labonassedu33@sfr.fr',
        password: ''
    }
    
    handleChangeMail = event => {
        const mail = event.target.value
        this.setState({mail})
    }

    handleChangePassword = event => {
        const password = event.target.value
        this.setState({password})
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.requestLogged()
        .then((reponse) => {
            this.props.isAuthActions(true)   
            const goToConnect = true
            this.setState({goToConnect})
        })
        .catch((error) => {
            console.log('------------')
            console.log('WRONG BAD MAIL OR BAD PASSWORD : ', )
            console.log('------------')
        })
    }

    requestLogged(){
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8081/api/v1/user/log', 
                {
                    params: {
                        "mail": this.state.mail,
                        "password": this.state.password
                      } 
                }
            )
            .then((response) => {
                this.props.saveUserActions(response.data.response[0])
                resolve(response)
            })
            .catch((error) => reject(error))
        })
    }
    
    
    render(){

        if(this.state.goToConnect){
            return <Redirect push to='/' />
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
                                        <input onChange={this.handleChangeMail} className="form-control" placeholder='Email @amiltone.fr' type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={this.handleChangePassword} type="password" className="form-control" placeholder="Password" />
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

const mapStateToProps = (state) => {
    return {
        isAuthReducer: state.isAuthReducer,
        saveUserReducer: state.saveUserReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        isAuthActions:isAuthActions,
        saveUserActions:saveUserActions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Connexion)


/*


Caractérise la Connexion

Vérifie si Email adress n'est pas vide
Vérifie si Password n'est pas vide
Tente une connexion a la BDD
    -> OUI
        -> On recherche dans la BDD le champ mail et on voit si l'email existe
            -> OUI
                -> On crypte le mot de passe
                -> On compare les deux mots de passe crypter
                -> Ils sont identique ? 
                    -> OUI
                        -> Alors on connecte et on passe la variable a true
                    
                    -> NON
                        -> On renvoie une erreur
            
                -> NON
                    -> On renvoie une erreur

    -> NON
        -> Renvoie une Erreur




*/