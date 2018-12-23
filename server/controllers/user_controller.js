const UserModel = require('../models/user_model')
const tableMembers = 'amil_user'
const MainController = require('./main_controller')


exports.findAllUserController = (req, res) => { //Clear
    UserModel.findAllUserModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findOneUserController = (req, res) => { //Clear
    UserModel.findOneUserModel(tableMembers, req.params.id, 'name')
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addUserController = (req, res) => { //Clear
    console.log('Debugger 1')
    UserModel.addUserModel(tableMembers, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.updateUserController = (req, res) => {
    UserModel.updateUserModel(tableMembers, 'name', req.body.name, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.deleteUserController = (req, res) => {
    UserModel.deleteUserModel(tableMembers, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.logUserController = (req, res) => {
    UserModel.logUserModel(tableMembers, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) =>  MainController.validFunction(false, res, '', error))
}