import React, {Component, Fragment} from 'react'
import axios from 'axios'
import config from '../config/config.json'
import PopupReport from './Popup/PopupReport'
import marked from 'marked'

import {Link} from 'react-router-dom'

import VerifUserRole from '../services/verif_role_user'

//Redux
import { connect } from 'react-redux'
import { getLastReportActions } from '../actions/index'
import { bindActionCreators } from 'redux'

import '../styles/Report.css'

class Report extends Component{

    state = {
        allReport: '',
        activePopup: '',
        openPopup: false,
        VerifUserRole: new VerifUserRole()
    }

    //Fonction qui recuperer l'event et l'envoie a la fonction qui recupere le report
    handleSelectChange = event => {
        this.requestGetReport(event.target.value)
    }

    //Fonction qui envoie une requete pour recupérer le report demander et le met dans le reducer en fonction de lid
    requestGetReport(id){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST + 'report/' + id)
        .then((response) => this.props.getLastReportActions(response.data.response[0]))
        .catch((error) => {
            console.error('Error: ', error)
            document.getElementById('alertReport').innerHTML = "<strong>Error : </strong> The requested report can not be found"
            document.getElementById("alertReport").style.display = "block"
        })
    }

    //Fonction qui Ouvre le popup
    handleClick = (popup) => {
        document.getElementById('overlay').style.visibility = "visible"
        this.setState({activePopup: popup, openPopup: !this.openPopup})
    }

    //Fonction qui ferme le popup
    onClosePopup = () => {
        document.getElementById('overlay').style.visibility = "hidden"
        this.setState({ openPopup: false})
    }

    //Fonction qui fait un render des options dans le select en fonctions du nombre de report dans le state
    renderSelect(){
        return (
            Object.keys(this.state.allReport)
            .map((id, key) => {
                return(
                    <option key={key} value={this.state.allReport[id].id}>{this.state.allReport[id].id} : {this.state.allReport[id].title}</option>
                )
            })
        )
    }

    renderReportMarked = report => {
        if(report){
            const __html = marked(report, { sanitize: true })
            return { __html }
        }
    }

    convertDate(date){
       if(date){
        return date.substring(0, 10).split('-').reverse().join('-')
       }
    }

    //Quand Report.jsx est monter fait une requete ajax pour recuperer tous les report et les mettre dans le state.
    componentDidMount(){
        axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST + 'report')
        .then((response) => {
            this.setState({allReport: response.data.response})
        })
        .catch((error) => {
            console.error('Error: ', error)
            document.getElementById('alertReport').innerHTML = "<strong>Error : </strong> There are no reports to display."
            document.getElementById("alertReport").style.display = "block"
        })
    }

    DisplayButtonReport(){
        if(this.state.VerifUserRole.get50Value()){
            return(
                <Fragment>
                    <button onClick={() => this.handleClick('new')} className="btn btn-outline-success my-2 my-sm-0" type="submit">New Report</button> 
                    <button onClick={() => this.handleClick('edit')} className="btn btn-outline-warning my-2 my-sm-0" type="submit">Edit Report</button> 
                    <button onClick={() => this.handleClick('delete')} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Delete Report</button>
                </Fragment>
            )
        }
    }


    render(){
        return(
            <Fragment>
                <div className="menuReport">
                    <div className="menuReportButton">
                        {
                            this.DisplayButtonReport()
                        }
                    </div>
                     <div className="menuReportSelect">
                        <select onChange={this.handleSelectChange} className="custom-select custom-select-lg mb-3">
                            {this.renderSelect()}
                        </select>
                     </div>
                </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="alertReport" className="alert alert-danger fade show" role="alert">
                            </div>

                            <div className="titleReportContent">
                                {this.props.lastReportReducer.title} <span className="dateReport">: {this.convertDate(this.props.lastReportReducer.create_at)}</span>
                            </div>
                            <div className="cardReportContent">
                                <div className="contentReport" dangerouslySetInnerHTML={this.renderReportMarked(this.props.lastReportReducer.content)} />
                                <div>by <span className='author'><Link to={'/profile/' + this.props.lastReportReducer.author} >{this.props.lastReportReducer.author}</Link></span></div>
                            </div>
                        </div>
                    </div>
                    {
                        //Display POPUP
                        this.state.openPopup && <PopupReport onClose={this.onClosePopup} classActive={this.state.activePopup} />
                    }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lastReportReducer: state.lastReportReducer,
        saveUserReducer: state.saveUserReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getLastReportActions:getLastReportActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)