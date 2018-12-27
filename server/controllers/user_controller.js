const UserModel = require('../models/user_model')
const tableMembers = 'amil_user'
const MainController = require('./main_controller')


exports.findAllUserController = (req, res) => {
    UserModel.findAllUserModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}
exports.findOneUserController = (req, res) => {
    UserModel.findOneUserModel(tableMembers, req.params.id, 'name')
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addUserController = (req, res) => {
    UserModel.addUserModel(tableMembers, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.updateUserController = (req, res) => {
    UserModel.updateUserModel(tableMembers, req.body.params, req.params.id)
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

exports.logUserWithTokenController = (req, res) => {
    UserModel.logUserWithTokenModel(tableMembers, req.params[0])
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) =>  MainController.validFunction(false, res, '', error))
}