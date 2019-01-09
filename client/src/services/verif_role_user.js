import {store} from '../index';

export default class VerifUserRole {
    constructor(){
        this.store = store.getState().getRoleReducer;
        this.role = this.store.role
        this.role_value = this.store.value
    }

    getRole(){
        return this.role
    }

    getValue(){
        return this.value
    }

    get50Value(){
        if(this.role_value >= 50) return true
        else return false
    }

    get100Value(){
        if(this.role_value >= 100) return true
        else return false
    }
}

