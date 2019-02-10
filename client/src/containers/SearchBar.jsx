import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import config from '../config/config.json'
import {connect} from 'react-redux'
import RenderResponse from '../components/RenderResponse'

import '../styles/SearchBar.css'

class SearchBar extends Component{

    state = {
        allResponse: {},
        renderHeader: { //Contient l'entete du tableau de réponse
            "bugtracker" : ['#', 'title', 'assignedto', 'priority', 'tags', 'View'],
            "user": ['#', 'Firstname', 'Lastname', 'Role', 'Profile'],
            "report": ['#', 'Author', 'Title', 'Date', 'View'],
            "calendar": ['#', 'Title', 'Start', 'End']
        }
    }

   constructor(props){
        super(props)

        //On passe a la fonction le parametre rechercher pour faire la bonne recherche
        this.typeSearch(this.props.match.params.typesearch)
   }



   //Fonction qui vérifie de quelle type de recherche il s'agit et redirige vers la bonne fonction.
   typeSearch(typesearch){
      switch(typesearch){
          case 'calendar':
            this.searchOnCalendar();
          break

          case 'report':
            this.searchOnReport()
          break

          case 'task':
            this.searchOnTask()
          break

          case 'bugtracker':
            this.searchOnBugTracker()
          break

          default:
            this.searchOnUser()
          break

      }
   }

    //Fonction qui effectue la recherche sur Calendar
    searchOnCalendar(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
            'searchCalendar/' + this.props.saveUserReducer.id + '/' + this.props.match.params.name)
        .then((response) => {
            this.setState({allResponse: response.data.response})
        })
        .catch((error) => {
            console.log('Your search did not return anything...')
        })
    }

    //Fonction qui effectue la recherche sur Report
    searchOnReport(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
            'searchReport/' + this.props.match.params.name)
        .then((response) => {
            this.setState({allResponse: response.data.response})
        })
        .catch((error) => {
            console.log('Your search did not return anything...')
        })
    }

    //Fonction qui effectue la recherche sur Task
    searchOnTask(){
        console.log('SEARCH ON TASK')
    }

    //Fonction qui effectue la recherche sur BugTracker
    searchOnBugTracker(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
            'searchBugTracker/' + this.props.saveUserReducer.id + '/' + this.props.match.params.name)
        .then((response) => {
            this.setState({allResponse: response.data.response})
        })
        .catch((error) => {
            console.log('Your search did not return anything...')
        })
    }

   searchOnUser(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
            'searchUser/' + this.props.match.params.name)
        .then((response) => {
            this.setState({allResponse: response.data.response})
        })
        .catch((error) => {
            console.log('Your search did not return anything...')
        })
   }

   renderAlertSearch(){
       if(this.state.allResponse.length >= 1){
        return(
            <div id='searchsuccess' className="alert alert-success" role="alert">
                <strong>Well done!</strong> Your search returned <strong>{this.state.allResponse.length}</strong> results!
            </div>
        )
       }else{
        return(
            <div id='searchwarning' className="alert alert-warning" role="alert">
                <strong>Oh oh...</strong> Your search did not return anything ... You will do better next time!
            </div>)
       }
   }

    render(){
        return(
            <Fragment>
                <p>Voici le résultat de votre recherche sur : "<span className="SearchItalic">{this.props.match.params.name}</span>"</p>
                {this.renderAlertSearch()}
                    <RenderResponse allResponse={this.state.allResponse} appResponse={this.props.match.params.typesearch} tableRender={this.state.renderHeader[`${this.props.match.params.typesearch}`]} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}

export default connect(mapStateToProps)(withRouter(SearchBar))