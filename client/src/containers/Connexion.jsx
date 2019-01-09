import React, {Component, Fragment} from 'react'
import axios from 'axios'
import config from '../config/config.json'
//Redux
import { connect } from 'react-redux'
import { isAuthActions, saveUserActions, getRoleActions } from '../actions/index'
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router-dom'

import '../styles/Connexion.css'

class Connexion extends Component{

    state = {
        goToConnect: false,
        stayConnect: false,
        mail: '',
        password: ''
    }

    constructor(props){
        super(props)
        const token = localStorage.getItem('amil_connect_token')
        if(token != null){
            this.requestLoggedWithToken(token)
        }
    }

    handleCloseError = event => {
        document.getElementById('error_connect').style.display = 'none'
    }

    handleChangeCheckBoxConnect = event => {
        const stayConnect = event.target.checked
        this.setState({stayConnect})
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
        .then((response) => {
            this.props.isAuthActions(true)
            const goToConnect = true
            this.setState({goToConnect})
        })
        .catch((error) => {
            document.getElementById('error_connect').style.display = 'block'
        })
    }

    requestLoggedWithToken(token){
        return new Promise((resolve, reject) => {
            axios.get(config.URL_SERV_BEGGIN + '/api/v1/user/log/token/token=' + token)
            .then((response) => {
                this.props.saveUserActions(response.data.response[0])
                //On passe a true le isAuth
                this.props.isAuthActions(true)
                //On Connect dans le state
                const goToConnect = true
                this.setState({goToConnect})
                //On envoie a requestRole pour récupérer les informations du role et les mettre dans redux
                resolve(this.requestRole(response.data.response[0]))
            })
            .catch((error) => reject(error))
        })
    }

    requestLogged(){
        return new Promise((resolve, reject) => {
            axios.post(config.URL_SERV_BEGGIN + '/api/v1/user/log',
                {
                    params: {
                        "mail": this.state.mail,
                        "password": this.state.password
                      }
                }
            )
            .then((response) => {

                this.props.saveUserActions(response.data.response[0])

                if(this.state.stayConnect){
                    localStorage.setItem('amil_connect_token', response.data.response[0].token)
                }
                //On envoie a requestRole pour récupérer les informations du role et les mettre dans redux
                resolve(this.requestRole(response.data.response[0]))
            })
            .catch((error) => reject(error))
        })
    }

    requestRole(response){
        //On requete maintenant sur la table amil_grade pour récupérer les infos du role
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/getRole/' + response.role)
        .then((response) => {
            //On insére dans le tableau les données
            this.props.getRoleActions(response.data.response)
            //On enregistre le token
            return true
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
                            <div id="error_connect" className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Error: </strong> BAD PASSWORD OR BAD EMAIL
                                <button onClick={this.handleCloseError} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
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
                                    <div className="form-group form-check form-check-inline">
                                        <input onChange={this.handleChangeCheckBoxConnect} className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Rester Connecté
                                            </label>
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
        saveUserReducer: state.saveUserReducer,
        getRoleReducer: state.getRoleReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        isAuthActions:isAuthActions,
        saveUserActions:saveUserActions,
        getRoleActions:getRoleActions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Connexion)
