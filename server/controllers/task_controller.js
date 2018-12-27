const TaskModel = require('../models/task_model')
const tableMembers = 'amil_task'
const MainController = require('./main_controller')


exports.findAllTaskController = (req, res) => {
    TaskModel.findAllTaskModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findOneTaskController = (req, res) => {
    TaskModel.findOneTaskModel(tableMembers, req.params.id, 'name')
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addTaskController = (req, res) => {
    TaskModel.addTaskModel(tableMembers, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.updateTaskController = (req, res) => {
    TaskModel.updateTaskModel(tableMembers, req.body.params, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.deleteTaskController = (req, res) => {
    TaskModel.deleteTaskModel(tableMembers, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.countTaskController = (req, res) => {
    TaskModel.countTaskModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}