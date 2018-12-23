import { SAVE_USER } from '../actions';

const initialState = {
    ParamsState : {
        "id": '',
        "firstname": '',
        "lastname": '',
        "mail": '',
        "password": '',
        "biographie": '',
        "job": '',
        "grade": ''
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case SAVE_USER:
            return action.payload
        default:
            return state
    }
}