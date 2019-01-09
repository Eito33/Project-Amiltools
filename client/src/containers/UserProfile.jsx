import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import config from '../config/config.json'
import { connect } from 'react-redux'
import marked from 'marked'

import '../styles/User.css'
import VerifUserRole from '../services/verif_role_user';

//TODO: Si le profil user n'est pas trouver faire le catch


class UserProfile extends Component{

    constructor(props){
        super(props)
        //On récupére les infos de l'utilisateur pour les mettres dans le state
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST + 'finduser/' + props.match.params.author)
        .then((response) => {
            if(response.data.response[0]){ //Si on a une réponse
                const userProfile = response.data.response[0]
                this.setState({userProfile})
                //Si on essaie d'acceder a notre profil on redirige sur /user
                if(this.props.saveUserReducer.firstname + ' ' + this.props.saveUserReducer.lastname === this.state.userProfile.firstname + ' ' + this.state.userProfile.lastname){
                    this.props.history.push('/user')
                }
            }else{ //Sinon on affiche une erreur
                const userProfile = {
                    "api_key": 'noapikey',
                    "firstname": 'Unknow',
                    "lastname": 'Profile'
                }
                this.setState({userProfile})
                document.getElementById('error_profile').style.display = 'block'
            }
        })

    }

    //Une fois le component monté on requete sur les grades
    componentDidMount(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
                  'getAllrole/api_key=' + this.props.saveUserReducer.api_key)
        .then((response) => {
            this.setState({allRole: response.data.response})
        })
    }

    getJob(){
        if(this.state.userProfile.job === 'webdev'){
            return 'Developpeur Web'
        }
    }

    state = {
        "userProfile": {
        },
        VerifRoleUser: new VerifUserRole(),
        allRole: {
        }
    }

    generateAPIKEY(){
        return new Promise((resolve, reject) => {
            axios.post(config.URL_SERV_BEGGIN + config.URL_API_REST + 
                'user/generateApiKey/api_key=' + this.props.saveUserReducer.api_key,
                {
                    params: {
                        "id": this.state.userProfile.id,
                    }
                })
            .then((response) => {
                let userProfile = { ...this.state.userProfile}
                userProfile.api_key = response.data.response.api_key
                this.setState({userProfile})
                resolve(true)
            })
        })
    }

    displayApiKey(){
        if(this.state.userProfile.api_key){
            if(this.state.userProfile.api_key === 'noapikey'){
                return this.state.userProfile.api_key
            }else{
                return(
                    <span>{this.state.userProfile.api_key} <i onClick={() => this.supressApiKey()} className="red fas fa-times-circle"></i></span>
                )
            }
        }
    }


    //Fonction qui gére le changement de role d'un utilisateur
    handleChangeRole = event => {
        const role = event.target.value.split(' ')
        //On requete sur le role que l'on souhaite obtenir
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
                'getRole/' + role[0])
        .then((response) => {
            //On définit un objet du nouveau role
            const newRole = {
                "role": role[0],
                "value": response.data.response.value
            }

            if(newRole.value < 50){
                //On requete sur l'utilisateur pour supprimer l'api key et modifier le role dans amil_user
                axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST +
                        'user/update/' + this.state.userProfile.id +
                        '/api_key=' + this.props.saveUserReducer.api_key,{
                            "params": {
                                "api_key": 'noapikey',
                                "role": newRole.role
                            }
                        })
                .then((response) => {
                    //On requete pour supprimer l'api key de amil_api_key
                    axios.delete(config.URL_SERV_BEGGIN + config.URL_API_REST +
                        'user/deleteApiKey/' + this.state.userProfile.id +
                        '/api_key=' + this.props.saveUserReducer.api_key)
                    .then((response) => {

                        //On modifie le state pour rafraichir le container
                        let userProfile = { ...this.state.userProfile}
                        userProfile.role = newRole.role
                        userProfile.api_key = 'noapikey'
                        this.setState({userProfile})
                    })
                })
            }else{
                //On génére une nouvelle api keu
                this.generateAPIKEY()
                .then((response) => {

                    //On modifie les informations en BDD en conséquence
                    axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST +
                        'user/update/' + this.state.userProfile.id +
                        '/api_key=' + this.props.saveUserReducer.api_key,{
                            "params": {
                                "api_key": this.state.userProfile.api_key,
                                "role": newRole.role
                            }
                        })
                    .then((response) => {

                        //On modifie le state pour rafraichir le container
                        let userProfile = { ...this.state.userProfile}
                        userProfile.role = newRole.role
                        userProfile.api_key = this.state.userProfile.api_key
                        this.setState({userProfile})
                    })
                })
            }
        })
    }

     //Fonction qui fait un render des options dans le select en fonctions du nombre de report dans le state
     renderSelect(){
        return (
            Object.keys(this.state.allRole)
            .map((id, key) => {
                if(this.state.allRole[id].role === this.state.userProfile.role){
                    return(
                        <option key={key} selected className="active"> {this.state.allRole[id].role} > {this.state.allRole[id].value}</option>
                    )
                }else{
                    return(
                        <option key={key}> {this.state.allRole[id].role} > {this.state.allRole[id].value}</option>
                    )
                }
            })
        )
    }

    handleSelectOption(e){
        this.setState({
           valeurSelect: e.target.value,
        })
     }

    displayButtonAdmin(){
        if(this.state.VerifRoleUser.get100Value()){
            return(
                <Fragment>
                     <div className='displayButtonAdmin'>
                        <div className="generateApi">
                            <button onClick={() => this.generateAPIKEY()} className="btn btn-outline-danger my-2 my-sm-0" type="submit">GENERATE API KEY</button> <br />
                            <span className="api_key_bold">API_KEY : </span> {this.displayApiKey()}
                        </div>
                        <div onChange={(e) => this.handleChangeRole(e)} className="changeRole form-group">
                            <label htmlFor="exampleFormControlSelect1">Role</label>
                            <select className="form-control">
                                {this.renderSelect()}
                            </select>
                        </div>
                    </div>
                </Fragment>
            )
        }
    }


    renderReportMarked = report => {
        if(report){
            const __html = marked(report, { sanitize: true })
            return { __html }
        }
    }

    supressApiKey(){ //Revoquer api key
        if(this.state.userProfile.api_key !== 'noapikey'){
            axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST +
                'user/update/' + this.state.userProfile.id +
                '/api_key=' + this.props.saveUserReducer.api_key,
                {
                    "params": {
                        "api_key": "noapikey"
                    }
                })
            .then((response) => {
                axios.delete(config.URL_SERV_BEGGIN + config.URL_API_REST +
                    'user/deleteApiKey/' + this.state.userProfile.id +
                    '/api_key=' + this.props.saveUserReducer.api_key)
                .then((response) => {
                    let userProfile = { ...this.state.userProfile}
                    userProfile.api_key = 'noapikey'
                    this.setState({userProfile})
                })
            })
        }
    }

    render(){
        return(
            <Fragment>
                <h2>User Profile</h2>
                <Fragment>
                    {this.displayButtonAdmin()}
                </Fragment>
                    <span className="userBadge badge badge-info">{this.getJob()}</span>
                    <span className="userBadge badge badge-primary">{this.state.userProfile.team}</span>
                    <span className="userBadge badge badge-success">{this.state.userProfile.role}</span>
                        <div id="error_profile" className="alert alert-danger" role="alert">
                            <strong>Aie aie aie</strong> The profile does not exist
                        </div>
                    <hr className="hrMargin" />
                    <div className="row">
                        <div className="cadreInformationsPrincipal col-lg-12">
                            <div className="avatar">
                                <img src="http://image.noelshack.com/fichiers/2018/50/4/1544699046-avatar-commun.png" alt=""/>
                            </div>
                            <div className="informationsPrincipal">
                                <p><span>{this.state.userProfile.firstname} {this.state.userProfile.lastname}</span></p>
                            </div>
                            <div className="informationsConnexion">
                               { this.state.userProfile.mail }
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
                                <div className="contentReport" dangerouslySetInnerHTML={this.renderReportMarked(this.state.userProfile.biographie)} />
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}

export default connect(mapStateToProps)(withRouter(UserProfile))