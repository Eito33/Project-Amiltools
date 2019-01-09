const UserModel = require('../models/user_model')
const tableMembers = 'amil_user'
const MainController = require('./main_controller')
const config = require('../config/config.json')


exports.findAllUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        UserModel.findAllUserModelNOAPIKEY(tableMembers)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }else{
        UserModel.findAllUserModel(tableMembers)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.findOneUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        UserModel.findOneUserModelNOAPIKEY(tableMembers, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }else{
        UserModel.findOneUserModel(tableMembers, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.findUserProfilesController = (req, res) => {
    const name = req.params.name.split(' ')
    UserModel.findUserProfileModel(tableMembers, name)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        UserModel.addUserModel(tableMembers, req.body.params)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
    
}

exports.updateUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        UserModel.updateUserModelNOAPIKEY(tableMembers, req.body.params, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }else{
        UserModel.updateUserModel(tableMembers, req.body.params, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.deleteUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        UserModel.deleteUserModel(tableMembers, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.logUserController = (req, res) => {
    UserModel.logUserModel(tableMembers, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) =>  MainController.validFunction(false, res, '', error))
}

exports.logUserWithTokenController = (req, res) => {
    const token = req.params.token.split('=')
    UserModel.logUserWithTokenModel(tableMembers, token[1])
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) =>  MainController.validFunction(false, res, '', error))
}

exports.roleUserController = (req, res) => {
    UserModel.roleUserModel(req.params[0])
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.allRoleUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        UserModel.allRoleUserModel('amil_role')
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.generateApiKeyUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        UserModel.generateApiKeyUserModel(req.body.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.deleteApiKeyUserController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        UserModel.deleteApiKeyUserModel('amil_api_key', req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.searchUserController = (req, res) => {
    const params = req.params.request.split(' ')
    UserModel.searchUserModel(tableMembers, params[0], params[1])
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}