import React, {Component} from 'react'
import config from '../../config/config.json'

//Redux
import { connect } from 'react-redux'
import '../../styles/Popup.css'
import axios from 'axios';

class PopupUser extends Component{

    state = {
        biography: this.props.saveUserReducer.biographie,
        newpassword: '',
        againnewpassword: '',
        changePassword : false,
        changeBio: false
    }

    handleChange = event => {
        if(event.target.id === 'newpassword' || event.target.id === 'againnewpassword'){
            this.setState({changePassword: true})
            document.getElementById("biography").disabled = true
            if(this.state.newpassword.length >= 9 && this.state.againnewpassword.length >= 9){
                document.getElementById('popupDisplay').style.display = "none"
            }else{
                document.getElementById('popupDisplay').innerHTML = "Password requires minimum 10 characters"
                document.getElementById('popupDisplay').style.display = "block"
            }
        }else if(event.target.id === 'biography'){
            if(this.state.biography.length >= 255){
                document.getElementById('popupDisplay').innerHTML = "The biography can only contain a maximum of 255 characters"
                document.getElementById('popupDisplay').style.display = "block"
            }
            this.setState({changeBio: true})
            document.getElementById("newpassword").disabled = true
            document.getElementById("againnewpassword").disabled = true
        }
        this.setState({[event.target.id]: event.target.value})
    }

    checkPassword(){
        if(this.state.newpassword === this.state.againnewpassword && this.state.newpassword.length >= 10) return true
        else return false
    }

    saveBiography = () => {
        axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST + 
            'user/update/' + this.props.saveUserReducer.id + 
            '/api_key=' + this.props.saveUserReducer.api_key,
            {
                params: {
                    "biographie": this.state.biography,
                }
            }
        )
        .then((response) => console.log('Report Edited ! : ', response.data))
        .catch((error) => console.log('Error : ', error))
    }

    savePassword = () => {
        axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST + 
            'user/update/' + this.props.saveUserReducer.id+ 
            '/api_key=' + this.props.saveUserReducer.api_key,
            {
                params: {
                    "password": this.state.newpassword,
                }
            }
        )
        .then((response) => console.log('Report Edited ! : ', response.data))
        .catch((error) => console.log('Error : ', error))
    }

    onClickSubmitUser = event => {
        if(this.state.changeBio){
            if(this.state.biography.length <= 255){
                this.saveBiography()
            }else {
                document.getElementById('popupDisplay').innerHTML = "The biography can only contain a maximum of 255 characters"
                document.getElementById('popupDisplay').style.display = "block"
            }
        }else if(this.state.changePassword){
            if(this.checkPassword()){
                this.savePassword()
            }else{
                if(this.state.newpassword.length < 9 || this.state.againnewpassword < 9) document.getElementById('popupDisplay').innerHTML = "Password is too small"
                else document.getElementById('popupDisplay').innerHTML = "Password are different"
                document.getElementById('popupDisplay').style.display = "block"
            }
        }
    }


    render(){
        return(
            <div id="popupBoard">
                <div className="titleReportContent">
                    Edit - UserProfile <span onClick={this.props.onClose} className="closeItem"><i className="fas fa-times-circle"></i></span>
                </div>
                <div className="popupContent">
                    <form>
                        <div id="popupDisplay" className="alert alert-danger" role="alert">
                        </div>
                        <div className="form-group row">
                            <label htmlFor="author" className="col-sm-2 col-form-label">Identity</label>
                                <div className="col-sm-10">
                                    <input disabled type="text" className="form-control" id="identity" placeholder={this.props.saveUserReducer.firstname + this.props.saveUserReducer.lastname} />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="mail" className="col-sm-2 col-form-label">Mail</label>
                                <div className="col-sm-10">
                                    <input disabled type="mail" className="form-control" id="mail" placeholder={this.props.saveUserReducer.mail} />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="passwordButton col-sm-10">
                                    <input onChange={this.handleChange} type="password" className="form-control" id="newpassword" placeholder="New Password" />
                                    <input onChange={this.handleChange} type="password" className="form-control" id="againnewpassword" placeholder="Again New Password" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="biography" className="col-sm-2 col-form-label">Biography</label>
                                <div className="col-sm-10">
                                    <textarea onChange={this.handleChange} className="textareaPopup form-control" id="biography"crows="3" maxLength="255" value={this.state.biography}></textarea>
                                </div>
                        </div>
                        <hr />
                        <div className="form-group row">
                            <div className="taskFormButton col-sm-10">
                                <button onClick={this.onClickSubmitUser} className="btn btn-outline-success my-2 my-sm-0" type="submit">Save</button>
                                <button onClick={this.props.onClose} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}

export default connect(mapStateToProps)(PopupUser)