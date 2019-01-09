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
        "role": '',
        "grade_value": 0,
        "team": '',
        "api_key": ''
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