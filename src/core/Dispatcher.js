import React, { Component, Fragment } from 'react'



class Dispatcher extends Component {


    isInformation(information){
        if(information === 'view'){
            return 'Tu as demander la vue'
        }else if(information === 'edit'){
            return 'Tu as demander a editer'
        }else if(information === 'del'){
            return 'Tu as demander a supprimer'
        }else{
            return 'Tu as demander a archiver'
        }
    }

    render() {
        return(
            <Fragment>
                
            </Fragment>
        )
    }
}

export default Dispatcher