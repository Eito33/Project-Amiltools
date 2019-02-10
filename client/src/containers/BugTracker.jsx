//FIXME: Probleme sur la fonction requestPriorityBug les boutons CSS ne se desactive pas quand il faut.

import React, {Component, Fragment} from 'react'
import axios from 'axios'
import config from '../config/config.json'
import PopupBugTracker from './Popup/PopupBugTracker'

//Redux
import { connect } from 'react-redux'
import { receiveBugActions } from '../actions/index'
import { bindActionCreators } from 'redux'

import '../styles/BugTracker.css'

class BugTracker extends Component{

    state = {
        "responseRequestBug": {},
        "displayResponse": {},
        "clicOnBug": {},
        "activeFilter": '',
        "openPopup": false,
        "popup": "",
        "priority": ['Low', 'Medium', 'High'],
        "nbAllBug": 0,

        // ----- HandleChange
        "handleTitle": ''
    }

    componentDidMount(){
        this.requestMyBug()
    }

// ------------------------------------------------------------------------------- GENERAL

    //Fonction de convertion de la date
    convertDate(date){
        if(date){
        return date.substring(0, 10).split('-').reverse().join('-')
        }
    }

    //Fonction qui affiche ou enleve le popup et l'overlay
    togglePopup = () => {
        this.setState({openPopup: !this.state.openPopup})
        document.getElementById('overlay').style.visibility = "hidden"
    }

// ------------------------------------------------------------------------------- RENDER


    //Fonction qui gére le rendu des bugs dans le tableau
    renderBugTable(){
        return(
            Object.keys(this.state.displayResponse)
            .map((id, key) => {

                    //On assemble le prenom et le nom
                    const user = this.state.displayResponse[id].firstname + ' ' + this.state.displayResponse[id].lastname
                return(
                    <Fragment key={key}>
                        <tr onClick={() => this.clickOnBug(this.state.displayResponse[id])}>
                            <th scope="row">{id}</th>
                            <td>{this.state.displayResponse[id].title_bug}</td>
                            <td>{user}</td>
                            <td>{this.renderPriority(this.state.displayResponse[id].priority_bug)}</td>
                            <td>{this.convertDate(this.state.displayResponse[id].create_at)}</td>
                            <td>{this.state.displayResponse[id].tags_bug}</td>
                        </tr>
                    </Fragment>
                )
            })
        )
    }

    //Fonction qui fait le rendu des priorité dans le tableau
    renderPriority(priority){
        if(priority === 'Low'){
            return(<span className="badge badge badge-success">{priority}</span>)
        }else if(priority === 'Medium'){
            return(<span className="white badge badge badge-warning">{priority}</span>)
        }else{
            return(<span className="badge badge badge-danger">{priority}</span>)
        }
    }

    //Fonction qui gére le rendu des erreurs
    renderError(error){
        document.getElementById('errorBugTracker').style.display = 'block'
        document.getElementById('errorBugTracker').textContent = error
    }

    //Fonction qui gére le rendu des success
    renderSuccess = (success) => {
        document.getElementById('successBugTracker').style.display = 'block'
        document.getElementById('successBugTracker').textContent = success
        this.requestMyBug()
    }

    renderPopup(){
        document.getElementById('overlay').style.visibility = "visible"
        if(this.state.popup === 'add'){
            return(
                <PopupBugTracker
                    title="Ajout d'un nouveau popup!"
                    content=""
                    tags=""
                    author={this.props.saveUserReducer.firstname + ' ' + this.props.saveUserReducer.lastname}
                    priority="Low"
                    tablePriority={this.state.priority}
                    idUser={this.props.saveUserReducer.id}
                    onClose={this.togglePopup}
                    onSuccess={this.renderSuccess}
                    onError={this.renderError}
                    popup={this.state.popup}
                />
            )
        }else{
            return(
                <PopupBugTracker
                    title={this.state.clicOnBug.title_bug}
                    content={this.state.clicOnBug.content_bug}
                    tags={this.state.clicOnBug.tags_bug}
                    priority={this.state.clicOnBug.priority_bug}
                    tablePriority={this.state.priority}
                    author={this.state.clicOnBug.firstname + ' ' + this.state.clicOnBug.lastname}
                    idUser={this.state.clicOnBug.id_user}
                    idBug={this.state.clicOnBug.id_bug}
                    onClose={this.togglePopup}
                    onSuccess={this.renderSuccess}
                    onError={this.renderError}
                    popup={this.state.popup}
                />
            )
        }
    }

// ------------------------------------------------------------------------------- CLICKON

    //Fonction qui gére le click sur ajouter un bug
    clickOnADD(){
        this.setState({popup: 'add', openPopup: true})
    }

    //Fonction qui gére le click sur un bug
    clickOnBug(informationsBug){

        this.setState({popup: 'edit', openPopup: true, clicOnBug: informationsBug})
    }

// ------------------------------------------------------------------------------- REQUEST SEARCH

    //Fonction qui modifie le css en place du les boutons de filtrage pour les priorités
    requestPriorityBug(priority){

        let cssPriority = priority.replace('Low', 'success').replace('Medium', 'warning').replace('High', 'danger')

        //On boucle sur le tableau dans le state pour faire correspondre les bonnes priorités
        for(let i = 0; i < this.state.priority.length; i++){
            let cssPriority2 = this.state.priority[i].replace('Low', 'success').replace('Medium', 'warning').replace('High', 'danger')
            if(priority === this.state.priority[i]){
                document.getElementById(`priority${priority}`).classList.replace(`btn-outline-${cssPriority}`, `btn-${cssPriority}`)
                this.requestBugFilterPriority(priority)
            }else{
                document.getElementById(`priority${this.state.priority[i]}`).classList.replace(`btn-${cssPriority2}`, `btn-outline-${cssPriority2}`)
            }
        }

        this.requestBugFilterPriority(priority)
    }

    //Fonction qui effectue les recherche en fonctions des options de filtrage
    requestBugFilterPriority(priority){
        let displayResponse = []
        if(priority !== this.state.activeFilter){
            for(let item of this.state.responseRequestBug){
                if(item.priority_bug === priority){
                    displayResponse.push(item)
                }
            }
            this.setState({displayResponse, activeFilter: priority})
        }else{
            displayResponse = { ...this.state.responseRequestBug}
            this.setState({displayResponse, activeFilter: null})
        }
    }

    //Fonction qui Request les bugs de l'utilisateur
    requestMyBug(){
        //On actualise le nombre de bug
        this.requestCountAllBug()

        //On modifie le css sur les boutons de filtrage
        document.getElementById('btnMyBug').classList.replace('btn-outline-info', 'btn-info')
        document.getElementById('btnAllBug').classList.replace('btn-info', 'btn-outline-info')

        //On effectue la recherche sur nos bug
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST + 'bugtracker/author/' + this.props.saveUserReducer.id)
        .then((response) => {
            this.setState({responseRequestBug: response.data.response, displayResponse: response.data.response})
        })
        .catch((error) => this.renderError(error))
    }

    //Fonction qui request tous les bugs dans la BDD
    requestAllBug(){
        //On actualise le nombre de bug
        this.requestCountAllBug()

        //On modifie le css sur les boutons de filtrage
        document.getElementById('btnAllBug').classList.replace('btn-outline-info', 'btn-info')
        document.getElementById('btnMyBug').classList.replace('btn-info', 'btn-outline-info')

        //On effectue la recherche sur les bugs
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST + 'bugtracker')
        .then((response) => this.setState({responseRequestBug: response.data.response, displayResponse: response.data.response}))
        .catch((error) => this.renderError(error))
    }

    //Fonction qui compte le nombre total de bug
    requestCountAllBug(){
        axios.get(config.URL_SERV_BEGGIN + '/api/v1/bugtracker/count/all')
        .then((response) => this.setState({nbAllBug: response.data.response}))
        .catch((error) => this.setState({nbAllBug: 0}))
    }

// ------------------------------------------------------------------------------- GENERAL RENDER

    render(){
        return(
            <Fragment>
                <p className="menuReportButton">
                    <button onClick={() => this.clickOnADD()} className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Bug</button>
                </p>
                    <hr />
                    <div className="buttonBugTracker">
                        <p className="btn-group" role="group">
                            <button onClick={() => this.requestPriorityBug('High')} id='priorityHigh' className="btn btn-outline-danger my-2 my-sm-0" type="submit">High</button>
                            <button onClick={() => this.requestPriorityBug('Medium')} id='priorityMedium' className="btn btn-outline-warning my-2 my-sm-0" type="submit">Medium</button>
                            <button onClick={() => this.requestPriorityBug('Low')} id='priorityLow' className="btn btn-outline-success my-2 my-sm-0" type="submit">Low</button>
                        </p>
                        <p className="btn-group" role="group">
                            <button id='btnAllBug' onClick={() => this.requestAllBug()} className="btn btn-info my-2 my-sm-0" type="submit">All Bug</button>
                            <button id='btnMyBug' onClick={() => this.requestMyBug()} className="btn btn-outline-info my-2 my-sm-0" type="submit">My Bug</button>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div id='errorBugTracker' className="alert alert-danger" role="alert">

                        </div>

                        <div id='successBugTracker' className="alert alert-success" role="alert">

                        </div>

                            <table className="table table-hover table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Assigned to</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">TAGS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.responseRequestBug.length >= 1 && this.renderBugTable()}
                                </tbody>
                            </table>
                        </div>
                        <div className="footerBug">
                            <div className="row">
                                <div className="col-lg-12">
                                    <span className="compteurBug">Il y a actuelement {this.state.nbAllBug} Bugs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.openPopup && this.renderPopup()
                    }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({receiveBugActions:receiveBugActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker)