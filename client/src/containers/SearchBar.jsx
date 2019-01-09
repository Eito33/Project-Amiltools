import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import config from '../config/config.json'


import '../styles/SearchBar.css'

class SearchBar extends Component{

    state = {
        allResponse: {}
    }

   constructor(props){
       super(props)
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

   renderRole(role){
    if(role === 'User'){
        return (<span className="badge badge-success">{role}</span>)
    }else if(role === 'Admin'){
        return (<span className="badge badge-danger">{role}</span>)
    }else{
        return (<span className="badge badge-primary">{role}</span>)
    }
   }

   renderSearchResponse(){
       return(
            Object.keys(this.state.allResponse)
            .map((id, key) => {
                //On associe le prenom et le nom pour le profile
                const user = this.state.allResponse[id].firstname + ' ' +this.state.allResponse[id].lastname
                return(
                    <tr key={key}>
                        <th scope="row">{id}</th>
                            <td>{this.state.allResponse[id].firstname}</td>
                            <td>{this.state.allResponse[id].lastname}</td>
                            <td>{this.renderRole(this.state.allResponse[id].role)}</td>
                            <td><Link to={'/profile/' + user}>Click to view</Link></td>
                    </tr>
                )
            })
       )
   }

    render(){
        return(
            <Fragment>
                <p>Voici le résultat de votre recherche sur : "<span className="SearchItalic">{this.props.match.params.name}</span>"</p>
                {this.renderAlertSearch()}
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Role</th>
                                <th scope="col">Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderSearchResponse()}
                        </tbody>
                    </table>
            </Fragment>
        )
    }
}

export default withRouter(SearchBar);
