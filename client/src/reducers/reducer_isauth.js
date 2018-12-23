import { IS_AUTH } from '../actions';

export default function(state = false, action){
    switch(action.type){
        case IS_AUTH:
            return action.payload
        default:
            return state
    }
}