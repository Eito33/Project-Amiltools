import { RECEIVE_BUG } from '../actions/index';

const initialState = {
    "id_bug": "",
    "title_bug": "",
    "content_bug": "",
    "priority_bug": "",
    "id_user": "",
    "tags": ""
}

export default function(state = initialState, action){
    switch(action.type){
        case RECEIVE_BUG:
            return action.payload
        default:
            return state
    }
}