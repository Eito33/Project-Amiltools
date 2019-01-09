import { combineReducers } from 'redux';

//Authentification
import isAuth from './reducer_isauth'
import saveUser from './reducer_save_user'
import lastReport from './reducer_lastreport'
import getRole from './reducer_getrole'


const rootReducer = combineReducers({
    isAuthReducer: isAuth,
    saveUserReducer: saveUser,
    lastReportReducer: lastReport,
    getRoleReducer: getRole,
})

export default rootReducer;