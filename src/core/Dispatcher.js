class Dispatcher {

    //Exemple de méthode qui renvoie des données depuis le dispatcher. On imagine qu'il y a des syncro vers bdd et renvoie de données.
    isInformation(information){
        if(information === 'view'){
            return 'View'
        }else if(information === 'edit'){
            return 'Edit'
        }else if(information === 'del'){
            return 'Delete'
        }else if(information === 'archive'){
            return 'Archive'
        }else if(information === 'new'){
            return 'New'
        }
    }

}

export default Dispatcher