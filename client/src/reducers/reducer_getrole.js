import { GET_ROLE } from '../actions/index';

const initialState = {
    'id': '',
    'role': 'undefined',
    'value': 0
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ROLE:
            return action.payload
        default:
            return state
    }
}