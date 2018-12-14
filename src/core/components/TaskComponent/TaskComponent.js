import React, { Component, Fragment } from 'react'

import TaskView from '../../../view/TaskView/TaskView';
import Dispatcher from '../../Dispatcher'

class TaskComponent extends Component {

    state = {
        informationReward: '',
        contentTextarea: ''
    }

    //Methode qui recoit le click et enregistre l'information dans le state.
    receivedClic = information => {
        this.setState({clickToPopup: true, informationReward: information})
    }

    handleChangeContentTextarea = event => {
        const value = event.target.value

        this.setState({contentTextarea: value})
    }
    
    //Methode qui choisit quelle vue doit etres afficher en fonction de la requete du dispatcher
    sendToView = () => {
        if(this.state.informationReward !== ''){
            const dispatcherTaskComponent = new Dispatcher()
            const dispatch = dispatcherTaskComponent.isInformation(this.state.informationReward)
            return <TaskView receivedClic={this.receivedClic} contentTextarea={this.handleChangeContentTextarea} sendFromDispatcher={dispatch} />
        }else{
            return <TaskView receivedClic={this.receivedClic} />
        }
    }

    render() {
        return(
            <Fragment>
                {this.sendToView()}
            </Fragment>
        )
    }
}

export default TaskComponent