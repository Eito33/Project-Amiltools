import { combineReducers } from 'redux';

//Authentification
import isAuth from './reducer_isauth'
import saveUser from './reducer_save_user'


const rootReducer = combineReducers({
    isAuthReducer: isAuth,
    saveUserReducer: saveUser
});

export default rootReducer;