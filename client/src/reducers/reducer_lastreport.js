import { LAST_REPORT } from '../actions/index';

const initialState = {
    ParamsState : {
        "id": "",
        "title": "",
        "content": "",
        "author": "",
        "create_at": "",
        "update_at": "",
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case LAST_REPORT:
            return action.payload
        default:
            return state
    }
}



