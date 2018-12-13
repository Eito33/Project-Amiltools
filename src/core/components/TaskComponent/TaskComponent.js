import React, { Component, Fragment } from 'react'

import TaskView from '../../../view/TaskView/TaskView';
import Dispatcher from '../../Dispatcher'

class TaskComponent extends Component {

    state = {
        clickToPopup: false,
        informationReward: ''
    }


    tryToClick = (info) => {
        this.setState({clickToPopup: true, informationReward: info})
    }

    componentDidUpdate(){
        console.log('COMPOSANT MIS A JOUR');
    }
    

    render() {

        /*const popup = <Popup nom='Gabin' />*/

            let view = null
            if(this.state.clickToPopup){

            const test1 = new Dispatcher()
            const tryIt = test1.isInformation(this.state.informationReward)
            console.log('VOILA: ' + tryIt);
                view = <TaskView test={tryIt} />
            }else{
                view =  <TaskView tryToClick={this.tryToClick} />
            }


        return(
            <Fragment>
                {view}
            </Fragment>
        )
    }
}

export default TaskComponent


/*
Information relatif a l'appel du composant Popup depuis la vue Task.

Les actions se déroule dans cette ordre précis :

1- Appel de TaskComponent ->
    -> TaskComponent vérifie si clickToPopup est vrai ou faux
        -> clickToPopup étant faux c'est <TaskView tryToClick={this.tryToClick} /> qui est envoyer au render

2- Affichage de la vue Task
    -> Si l'utilisateur clic sur l'oeil de la premiere ligne 
        -> Cela appel la méthode props tryToclick et renvoie les informations au TaskComponent
        -> Dans taskComponent si click il y a eu grace a la méthode tryToClick alors clickToPopup devient vrai
        -> On vérifie que cela fonctionne grace a componentDidUpdate() le component est recharger

3- Update de taskComponent -> 
    -> TaskComponent vérifie si clickToPopup est vrai ou faux
    -> clickToPopup est vrai !
    -> Envoie de <TaskView test={popup} /> 
        -> test contient un composant. Le composant méthode
    -> Affichage de la vue taskView

4- TaskView s'affiche (en réalité il n'est jamais partit)
    -> Affiche dans l'encadrer prevus a cette effet plus bas le message du composant Popup


*/