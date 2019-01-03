import React, {Component, Fragment} from 'react'
import axios from 'axios'
import config from '../../config/config.json'
import { markdownExemple } from '../../assets/markdownExemple';
import {withRouter} from 'react-router-dom'

//Redux
import { connect } from 'react-redux'

import '../../styles/Popup.css'

class PopupReport extends Component{

    state = {
        newReport: {
            "title": "",
            "content": markdownExemple,
            "author": this.props.saveUserReducer.firstname + " " + this.props.saveUserReducer.lastname,
        },

        editReport: {
            "title": "",
            "content": "",
            "author": this.props.saveUserReducer.firstname + " " + this.props.saveUserReducer.lastname
        }
    }

    componentDidMount(){
        const editReport = { ...this.state.editReport}
        editReport.title = this.props.lastReportReducer.title
        editReport.content = this.props.lastReportReducer.content
        this.setState({editReport})
    }

    handleChangeTitle = event => {
        const newReport = { ...this.state.newReport}
        newReport.title = event.target.value
        this.setState({newReport})
    }

    handleChangeContent = event => {
        const newReport = { ...this.state.newReport}
        newReport.content = event.target.value
        this.setState({newReport})
    }

    handleEditTitle = event => {
        const editReport = { ...this.state.editReport}
        editReport.title = event.target.value
        this.setState({editReport})
    }

    handleEditContent = event => {
        const editReport = { ...this.state.editReport}
        editReport.content = event.target.value
        this.setState({editReport})
    }

    onClickDelete = () => {
        axios.delete(config.URL_SERV_BEGGIN + config.URL_API_REST + 'report/delete/' + this.props.lastReportReducer.id)
        .then((response) => {
            document.getElementById('overlay').style.visibility = "hidden"
            this.props.history.push('/')
        }) //On affiche la suppression
        .catch((error) => console.log('Error : ', error)) //On affiche erreur AJAX
    }

    onClickNew = () => {
        axios.post(config.URL_SERV_BEGGIN + config.URL_API_REST + 'report/add',
                {
                    params: {
                        "title": this.state.newReport.title,
                        "content": this.state.newReport.content,
                        "author": this.state.newReport.author
                      }
                }
            )
        .then((response) => console.log('Report ADD ! ', response.data))
        .catch((error) => console.error('Error: ', error))
    }

    onClickEdit = () => {
        axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST + 'report/update/' + this.props.lastReportReducer.id, 
            {
                params: {
                    "title": this.state.editReport.title,
                    "content": this.state.editReport.content,
                    "author": this.state.editReport.author
                }
            }
        )
        .then((response) => console.log('Report Edited ! : ', response.data))
        .catch((error) => console.log('Error : ', error))
    }

    checkPopup(popup){
        if(popup === 'delete'){
            return(this.displayPopupDelete())
        }else if(popup === 'edit'){
            return(this.displayPopupEdit())
        }else if(popup === 'new'){
            return(this.displayPopupNew())
        }
    }

    displayPopupDelete(){
        return(
            <div id="popup">
                <div className="titleReportContent">
                    Do you really want to delete {this.props.lastReportReducer.title} <span onClick={this.props.onClose} className="closeItem"><i className="fas fa-times-circle"></i></span>
                </div>
                <div className="popupContent">
                    <button onClick={() => this.onClickDelete()} className="btn btn-outline-success my-2 my-sm-0" type="submit">YES !</button>  
                    <button onClick={this.props.onClose} className="btn btn-outline-danger my-2 my-sm-0" type="submit">NO, PLEEEEASE NO !</button>
                </div>
            </div>
        )
    }

    displayPopupEdit(){
        return(
            <div id="popupBoard">
                <div className="titleReportContent">
                    Edit - {this.state.editReport.title} <span onClick={this.props.onClose} className="closeItem"><i className="fas fa-times-circle"></i></span>
                </div>
                <div className="popupContent">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input onChange={this.handleEditTitle} type="text" className="form-control" id="title" value={this.state.editReport.title} />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="assignedto" className="col-sm-2 col-form-label">Author</label>
                                <div className="col-sm-10">
                                    <input disabled type="text" className="form-control" id="author" placeholder={this.state.editReport.author} />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="state" className="col-sm-2 col-form-label">Content</label>
                                <div className="col-sm-10">
                                    <textarea onChange={this.handleEditContent} className="textareaPopup form-control" rows="3" value={this.state.editReport.content}></textarea>
                                </div>
                        </div>
                        <hr />
                        <div className="form-group row">
                            <div className="taskFormButton col-sm-10">
                                <button onClick={() => this.onClickEdit()} className="btn btn-outline-warning my-2 my-sm-0" type="submit">Edit</button>
                                <button onClick={this.props.onClose} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    displayPopupNew(){
        return(
            <div id="popupBoard">
                <div className="titleReportContent">
                    NEW - {this.state.newReport.title} <span onClick={this.props.onClose} className="closeItem"><i className="fas fa-times-circle"></i></span>
                </div>
                <div className="popupContent">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input required onChange={this.handleChangeTitle} type="text" className="form-control" id="title" placeholder={this.state.newReport.title} />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="assignedto" className="col-sm-2 col-form-label">Author</label>
                                <div className="col-sm-10">
                                    <input disabled type="text" className="form-control" id="author" placeholder={this.state.newReport.author} />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="state" className="col-sm-2 col-form-label">Content</label>
                                <div className="col-sm-10">
                                    <textarea onChange={this.handleChangeContent} className="textareaPopup form-control" rows="3" defaultValue={this.state.newReport.content}></textarea>
                                </div>
                        </div>
                        <hr />
                        <div className="form-group row">
                            <div className="taskFormButton col-sm-10">
                                <button onClick={() => this.onClickNew()} className="btn btn-outline-success my-2 my-sm-0" type="submit">Save</button>
                                <button onClick={this.props.onClose} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    render(){
        return(
            <Fragment>
                {this.checkPopup(this.props.classActive)}
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

export default connect(mapStateToProps)(withRouter(PopupReport))