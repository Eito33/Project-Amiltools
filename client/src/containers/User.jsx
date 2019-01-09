import React, {Component, Fragment} from 'react'
import PopupUser from './Popup/PopupUser'
import {Redirect} from 'react-router-dom'
import marked from 'marked'

//Services
import VerifUserRole from '../services/verif_role_user'

//Redux
import { connect } from 'react-redux'
import { isAuthActions, saveUserActions } from '../actions/index'
import { bindActionCreators } from 'redux'

import '../styles/User.css'

class User extends Component{

    state = {
        openPopup : false,
        VerifUserRole: new VerifUserRole()
    }

    getJob(){
        if(this.props.saveUserReducer.job === 'webdev'){
            return 'Developpeur Web'
        }
    }

    //Fonction qui ouvre le popup d'edition
    openEdit = popup => {
        this.setState({openPopup: popup})
    }

    //Fonction qui ferme le popup
    onClosePopup = () => {
        this.setState({ openPopup: false})
    }

    handleDeconnexion = event => {
        this.props.saveUserActions('')
        this.props.isAuthActions(false)
        localStorage.removeItem('amil_connect_token')
        sessionStorage.removeItem('amil_role_token')
        return <Redirect push to='/' />
    }

    displayRole(){
        return this.state.VerifUserRole.getRole()
    }

    renderReportMarked = report => {
        if(report){
            const __html = marked(report, { sanitize: true })
            return { __html }
        }
    }

    render(){
        return(
            <Fragment>
                <h2>User Profile</h2>
                <p>
                    <button onClick={() => this.openEdit(true)} className="userButton btn btn-outline-info my-2 my-sm-0" type="submit">Edit</button>
                    <button onClick={this.handleDeconnexion} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button>
                </p>
                    <span className="userBadge badge badge-info">{this.getJob()}</span>
                    <span className="userBadge badge badge-primary">{this.props.saveUserReducer.team}</span>
                    <span className="userBadge badge badge-success">{this.displayRole()}</span>
                    <hr className="hrMargin" />
                    <div className="row">
                        <div className="cadreInformationsPrincipal col-lg-12">
                            <div className="avatar">
                                <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt=""/>
                            </div>
                            <div className="informationsPrincipal">
                                <p><span>{this.props.saveUserReducer.firstname} {this.props.saveUserReducer.lastname}</span></p>
                            </div>
                            <div className="informationsConnexion">
                                <p><span className="api_key_bold">API_KEY :</span> { this.props.saveUserReducer.api_key }</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="borderBio col-lg-12">
                            <div className="titleBio">
                                <p>Biographie</p>
                            </div>
                            <div className="contentBio">
                                <div className="contentReport" dangerouslySetInnerHTML={this.renderReportMarked(this.props.saveUserReducer.biographie)} />
                            </div>
                        </div>
                    </div>
                    {
                        this.state.openPopup && <PopupUser onClose={this.onClosePopup} />
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(User)