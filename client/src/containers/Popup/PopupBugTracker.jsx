import React, {Component, Fragment} from 'react'
import marked from 'marked'
import axios from 'axios'
import config from '../../config/config.json'

//Redux
import { connect } from 'react-redux'

import '../../styles/Popup.css'

class PopupBugTracker extends Component{

    state = {
        //------ GENERAL
        'stateEdit': false,
        'stateDivContent': false,
        'tablePriority': this.props.tablePriority,
        'cssPriority': this.props.priority.replace('Low', 'success').replace('Medium', 'warning').replace('High', 'danger'),
        "resultSearchAuthor": {},

        //------ POPUP
        "title": this.props.title,
        'content': this.props.content,
        'tags': this.props.tags,
        'priority': this.props.priority,
        'author': this.props.author,
        'idUser': this.props.idUser,
        'idBug': this.props.idBug,
        'sendIdUser': ''
    }

    componentDidMount(){
        //Fait le rendu général quand le composant est monté
        this.renderGeneralBeforeComponentMount()

        //Met le CSS sur le bon filtre
        document.getElementById(`priority${this.state.priority}Popup`).classList.replace(`btn-outline-${this.state.cssPriority}`, `btn-${this.state.cssPriority}`)
    }

    componentDidUpdate(){
        //Fait le rendu Général quand le composant est mis a jour
        this.renderGeneralBeforeComponentMount()
    }

    //Fonction qui fait un rendu général du composant
    renderGeneralBeforeComponentMount(){
        if(this.props.popup === 'add' || this.state.stateEdit){
            if(this.props.popup === 'add') document.getElementById('author').disabled = true
            else document.getElementById('author').disabled = false
            document.getElementById('title').disabled = false
            document.getElementById('tags').disabled = false
        }else{
            document.getElementById('title').disabled = true
            document.getElementById('tags').disabled = true
            document.getElementById('author').disabled = true
        }
    }


// ------------------------------------------------------------------------------- GENERAL

    //Fonction de rendu du Markdown
    renderMarked = BugTrackerContent => {
        if(BugTrackerContent){
            const __html = marked(BugTrackerContent, { sanitize: true })
            return { __html }
        }
    }

// ------------------------------------------------------------------------------- SEND AXIOS

    //Fonction qui gére la recherche pour l'autocomplexion
    sendSearchUser = () => {
        if(this.state.author.length > 2){
            const search = setInterval(() => {
                axios.get(config.URL_SERV_BEGGIN + config.URL_API_REST +
                    'searchUser/' + this.state.author)
                .then((response) => {
                    document.getElementById('resultsAutoComplete').style.display = 'block'
                    this.setState({resultSearchAuthor: response.data.response})
                    clearInterval(search)
                })
                .catch((error) => this.props.onError(error))
            }, 1000)
        }
    }

    //Fonction qui edit un bug
    sendEditBug = () => {
        console.log('ICI = ', this.state.sendIdUser)
        axios.put(config.URL_SERV_BEGGIN + config.URL_API_REST +
                  'bugtracker/update/' + this.props.idBug,
                  {
                      "params": {
                        "title": this.state.title,
                        "content": this.state.content,
                        "priority": this.state.priority,
                        "tags": this.state.tags,
                        "id_user": this.state.sendIdUser
                      }
                  })
        .then((response) => {
            this.props.onSuccess(response.data.response)
            this.props.onClose()
        })
        .catch((error) => {
            this.props.onError(error)
            this.props.onClose()
        })
    }

    //Fonction qui ajoute un bug
    sendAddBug = () => {
        axios.post(config.URL_SERV_BEGGIN + config.URL_API_REST +
                   'bugtracker/add',
                   {
                       "params": {
                        'title': this.state.title,
                        'content': this.state.content,
                        'priority': this.state.priority,
                        'tags': this.state.tags,
                        'id_user': this.props.saveUserReducer.id
                       }
                   })
        .then((response) => {
            this.props.onSuccess(response.data.response)
            this.props.onClose()
        })
        .catch((error) => {
            this.props.onError(error)
            this.props.onClose()
        })
    }

    //Fonction qui supprimer un bug
    sendDeleteBug = () => {
        axios.delete(config.URL_SERV_BEGGIN + config.URL_API_REST +
                    'bugtracker/delete/' + this.state.idBug)
        .then((response) => {
            this.props.onSuccess(response.data.response)
            this.props.onClose()
        })
        .catch((error) => {
            this.props.onError(error)
            this.props.onClose()
        })
    }


// ------------------------------------------------------------------------------- HANDLE CHANGE

    //Fonction qui gére quand un champ change durant une edition
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value})
        if(event.target.id === 'author') this.sendSearchUser()
    }

    //Fonction qui gere le changement de stateEdit
    handleChangeStateEdit = () => {
        document.getElementById('divContent').style.display = 'none'
        document.getElementById('content').style.display = 'block'
        this.setState({stateEdit: !this.state.stateEdit})
    }

    clickOnArrow = () => {
        if(!this.state.stateEdit){
            if(this.state.stateDivContent){
                document.getElementById('arrowDisplayContent').innerHTML = '<i class="fas fa-sort-down"></i>'
                document.getElementById('divContent').style.display = 'none'
                this.setState({stateDivContent: !this.state.stateDivContent})
            }else{
                document.getElementById('arrowDisplayContent').innerHTML = '<i class="fas fa-sort-up"></i>'
                document.getElementById('divContent').style.display = 'block'
                this.setState({stateDivContent: !this.state.stateDivContent})
            }
       }
    }

// ------------------------------------------------------------------------------- OTHER RENDER

    //Fonction qui gére le rendu de la priorité
    renderPriority = (priority) => {
        if(this.props.popup === 'add' || this.state.stateEdit){
            for(let i = 0; i < this.state.tablePriority.length; i++){
                if(priority === this.state.tablePriority[i]){
                    let cssPriority = priority.replace('Low', 'success').replace('Medium', 'warning').replace('High', 'danger')
                    document.getElementById(`priority${priority}Popup`).classList.replace(`btn-outline-${cssPriority}`, `btn-${cssPriority}`)
                    this.setState({priority})
                }else{
                    let cssPriority = this.state.tablePriority[i].replace('Low', 'success').replace('Medium', 'warning').replace('High', 'danger')
                    document.getElementById(`priority${this.state.tablePriority[i]}Popup`).classList.replace(`btn-${cssPriority}`, `btn-outline-${cssPriority}`)
                }
            }
        }
    }

    //Fonction qui gére le rendu de l'autocomplexion
    renderAutoCompleteAuthor = () => {
        return(
            Object.keys(this.state.resultSearchAuthor).slice(0, 3) //Configurer le nombre de retour que l'on veut
            .map((id, key) => {
                return(
                    <div key={key}
                    onClick={() => {
                        this.setState({sendIdUser: this.state.resultSearchAuthor[id].id, author: this.state.resultSearchAuthor[id].firstname + ' ' + this.state.resultSearchAuthor[id].lastname})
                        document.getElementById('resultsAutoComplete').style.display = 'none'
                    }}
                    >

                    {this.state.resultSearchAuthor[id].firstname +
                    ' ' + this.state.resultSearchAuthor[id].lastname}
                    </div>
                )
            })
       )
    }

// ------------------------------------------------------------------------------- RENDER CONTENT

    //Fonction qui fait le rendu du contenu si on ajoute un bug
    renderAddBug(){
        return(
            <Fragment>
                <textarea onChange={this.handleChange} className="form-control textareDisplay" id="content" rows="12" value={this.state.content}></textarea>
            </Fragment>
        )
    }

    //Fonction qui fait le rendu de la vue ou de l'edition de bug
    renderEditBug(){
        return(
            <Fragment>
                <div style={{display: 'none'}} id="divContent" className="contentReport" dangerouslySetInnerHTML={this.renderMarked(this.state.content)} />
                <textarea style={{display: 'none'}} onChange={this.handleChange} className="form-control" id="content" rows="12" value={this.state.content}></textarea>
            </Fragment>
        )
    }

// ------------------------------------------------------------------------------- GENERAL BUTTON

    //Fonction qui fait le rendu des boutons si on ajoute un bug
    renderButtonAdd(){
        return(
            <Fragment>
                <button onClick={this.sendAddBug} className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
            </Fragment>
        )
    }

    //Fonction qui fait le rendu des boutons sur la vue et l'edition de bug
    renderButtonEdit = () => {
        if(this.state.idUser === this.props.saveUserReducer.id){
            return(
                <Fragment>
                    {!this.state.stateEdit && <button onClick={this.handleChangeStateEdit} className="btn btn-outline-warning my-2 my-sm-0" type="submit">Edit</button>}
                    {!this.state.stateEdit && <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Archive</button>}
                    {!this.state.stateEdit && <button onClick={this.sendDeleteBug} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Delete</button>}

                    {this.state.stateEdit && <button onClick={this.sendEditBug} className="btn btn-outline-success my-2 my-sm-0" type="submit">Save</button>}
                </Fragment>
            )
        }
    }

// ------------------------------------------------------------------------------- GENERAL RENDER

    render(){
        return(
            <Fragment>
                <div id="popup">
                    <div className="titleReportContent">
                        {this.state.title} <span onClick={this.props.onClose} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="popupContent">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input onChange={this.handleChange} type="text" className="form-control" id="title" value={this.state.title} />
                                    </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="priority" className="col-sm-2 col-form-label">Priority</label>
                                    <div role="group" className="btn-group col-sm-10">
                                        <div onClick={() => this.renderPriority('High')} id='priorityHighPopup' className="btn btn-outline-danger my-2 my-sm-0">High</div>
                                        <div onClick={() => this.renderPriority('Medium')} id='priorityMediumPopup' className="btn btn-outline-warning my-2 my-sm-0">Medium</div>
                                        <div onClick={() => this.renderPriority('Low')} id='priorityLowPopup' className="btn my-2 btn-outline-success my-sm-0">Low</div>
                                    </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="tas" className="col-sm-2 col-form-label">Tags</label>
                                    <div className="col-sm-10">
                                        <input onChange={this.handleChange} type="text" className="form-control" id="tags" placeholder='Separate tags with a space' value={this.state.tags} />
                                    </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
                                    <div className="col-sm-10">
                                        <input onChange={this.handleChange} type="text" className="form-control" id="author" value={this.state.author} />
                                        <div id="resultsAutoComplete" className="resultAuthor">
                                            {this.state.resultSearchAuthor.length >= 1 && this.renderAutoCompleteAuthor()}
                                        </div>
                                    </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
                                    <div className="contentBugTracker">
                                        {this.props.popup === 'edit' && <span onClick={this.clickOnArrow} id="arrowDisplayContent"  className="arrowDisplay"><i className="fas fa-sort-down"></i></span>}
                                        {this.props.popup === 'add' ? this.renderAddBug() : this.renderEditBug()}
                                    </div>
                            </div>
                        </form>
                        <hr/>
                        {this.props.popup === 'add' ? this.renderButtonAdd() : this.renderButtonEdit()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {saveUserReducer: state.saveUserReducer}
}


export default connect(mapStateToProps)(PopupBugTracker)