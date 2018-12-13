class Dispatcher {

    isInformation(information){
        if(information === 'view'){
            return 'View'
        }else if(information === 'edit'){
            return 'Edit'
        }else if(information === 'del'){
            return 'Delete'
        }else{
            return 'Archive'
        }
    }

}

export default Dispatcher