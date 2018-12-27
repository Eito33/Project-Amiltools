import { combineReducers } from 'redux';

//Authentification
import isAuth from './reducer_isauth'
import saveUser from './reducer_save_user'
import lastReport from './reducer_lastreport'


const rootReducer = combineReducers({
    isAuthReducer: isAuth,
    saveUserReducer: saveUser,
    lastReportReducer: lastReport
})

export default rootReducer;