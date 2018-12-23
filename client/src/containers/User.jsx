import React, {Component, Fragment} from 'react'

import {Redirect} from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { isAuthActions, saveUserActions } from '../actions/index'
import { bindActionCreators } from 'redux'

import '../styles/User.css'

class User extends Component{

    getJob(){
        if(this.props.saveUserReducer.job === 'webdev'){
            return 'Developpeur Web'
        }
    }

    handleDeconnexion = event => {
        this.props.saveUserActions('')
        this.props.isAuthActions(false)
        return <Redirect push to='/' />
    }

    render(){
        return(
            <Fragment>
                <h2>User Profile</h2> 
                <p>
                    <button className="userButton btn btn-outline-info my-2 my-sm-0" type="submit">Modifier</button>
                    <button onClick={this.handleDeconnexion} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Déconnexion</button>
                </p>
                    <span className="userBadge badge badge-info">{this.getJob()}</span>
                    <hr className="hrMargin" />
                    <div className="row">
                        <div className="cadreInformationsPrincipal col-lg-12">
                            <div className="avatar">
                                <img src="http://image.noelshack.com/fichiers/2018/50/4/1544699046-avatar-commun.png" alt=""/>
                            </div>
                            <div className="informationsPrincipal">
                                <p><span>{this.props.saveUserReducer.firstname} {this.props.saveUserReducer.lastname}</span></p>
                            </div>
                            <div className="informationsConnexion">
                                <p>Vous etes connecter depuis X minutes</p>
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
                                {this.props.saveUserReducer.biographie}
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

export default connect(mapStateToProps, mapDispatchToProps)(User)