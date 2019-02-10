import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import '../styles/RenderResponse.css'

class RenderResponse extends Component{

    state = {
       responser: {}
    }

    constructor(props){
        super()

    }

    renderHeaderResponse(tableRender){
        return(
            tableRender
            .map((id, key) => {
                return(
                    <th key={key} scope="col">{id}</th>
                )
            })
        )
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


//-------------------------------------------------------------------------------------- Render Function

   //Fonction de renvoie de réponse
   renderResponse(res){
        switch(res){
            case 'calendar':

            //-------------------------------------------------------- Calendar
            return(
                Object.keys(this.props.allResponse)
                .map((id, key) => {
                    return(
                        <tr key={key}>
                            <th scope="row">{id}</th>
                                <td>{this.props.allResponse[id].title}</td>
                                <td>{this.props.allResponse[id].start}</td>
                                <td>{this.props.allResponse[id].end}</td>
                        </tr>
                    )
                })
            )
            //-------------------------------------------------------- Calendar

            case 'report':

            //-------------------------------------------------------- Report
            return(
                Object.keys(this.props.allResponse)
                .map((id, key) => {
                    //On associe le prenom et le nom pour le profile
                    return(
                        <tr key={key}>
                            <th scope="row">{id}</th>
                                <td>{this.props.allResponse[id].author}</td>
                                <td>{this.props.allResponse[id].title}</td>
                                <td>{this.props.allResponse[id].create_at}</td>
                                <td><Link to={'/profile/' + this.props.allResponse[id].author}>Click to view</Link></td>
                        </tr>
                    )
                })
            )
            //-------------------------------------------------------- Report

            case 'task':

            //-------------------------------------------------------- Task
            return(
                Object.keys(this.props.allResponse)
                .map((id, key) => {
                    //On associe le prenom et le nom pour le profile
                    const user = this.props.allResponse[id].firstname + ' ' +this.props.allResponse[id].lastname
                    return(
                        <tr key={key}>
                            <th scope="row">{id}</th>
                                <td>{this.props.allResponse[id].firstname}</td>
                                <td>{this.props.allResponse[id].lastname}</td>
                                <td>{this.renderRole(this.props.allResponse[id].role)}</td>
                                <td><Link to={'/profile/' + user}>Click to view</Link></td>
                        </tr>
                    )
                })
            )
            //-------------------------------------------------------- Task

            case 'bugtracker':

            //-------------------------------------------------------- BugTracker
            return(
                Object.keys(this.props.allResponse)
                .map((id, key) => {
                    //On associe le prenom et le nom pour le profile
                    const user = this.props.saveUserReducer.firstname + ' ' + this.props.saveUserReducer.lastname
                    return(
                        <tr key={key}>
                            <th scope="row">{id}</th>
                                <td>{this.props.allResponse[id].title}</td>
                                <td>{user}</td>
                                <td>{this.props.allResponse[id].priority}</td>
                                <td>{this.props.allResponse[id].tags}</td>
                                <td><Link to={'/profile/' + user}>Click to view</Link></td>
                        </tr>
                    )
                })
            )
            //-------------------------------------------------------- BugTracker

            default:

                //-------------------------------------------------------- USER
                return(
                    Object.keys(this.props.allResponse)
                    .map((id, key) => {
                        //On associe le prenom et le nom pour le profile
                        const user = this.props.allResponse[id].firstname + ' ' + this.props.allResponse[id].lastname
                        return(
                            <tr key={key}>
                                <th scope="row">{id}</th>
                                    <td>{this.props.allResponse[id].firstname}</td>
                                    <td>{this.props.allResponse[id].lastname}</td>
                                    <td>{this.renderRole(this.props.allResponse[id].role)}</td>
                                    <td><Link to={'/profile/' + user}>Click to view</Link></td>
                            </tr>
                        )
                    })
                )
                //-------------------------------------------------------- USER
        }
    }

//----------------------------------------------------------------------------- Render Component

    render(){
        return(
            <Fragment>
                <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                {this.renderHeaderResponse(this.props.tableRender)}
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.allResponse.length >= 1 && this.renderResponse(this.props.appResponse)}
                        </tbody>
                    </table>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}


export default connect(mapStateToProps)(RenderResponse)