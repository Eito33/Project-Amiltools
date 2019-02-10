const BugTrackerModel = require('../models/bugtracker_model')
const tableBugTracker = 'amil_bugtracker'
const MainController = require('./main_controller')


exports.findAllBugTrackerController = (req, res) => {
    BugTrackerModel.findAllBugTrackerModel(tableBugTracker)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findAllBugTrackerWhereIDController = (req, res) => {
    BugTrackerModel.findAllBugTrackerWhereIDModel(tableBugTracker, req.params.id_user)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findOneBugTrackerController = (req, res) => {
    BugTrackerModel.findOneBugTrackerModel(tableBugTracker, req.params.id, 'name')
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addBugTrackerController = (req, res) => {
    BugTrackerModel.addBugTrackerModel(tableBugTracker, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.updateBugTrackerController = (req, res) => {
    BugTrackerModel.updateBugTrackerModel(tableBugTracker, req.body.params, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.deleteBugTrackerController = (req, res) => {
    BugTrackerModel.deleteBugTrackerModel(tableBugTracker, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.countBugTrackerController = (req, res) => {
    BugTrackerModel.countBugTrackerModel(tableBugTracker)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.countBugTrackerWithIDController = (req, res) => {
    BugTrackerModel.countBugTrackerWithIDModel(tableBugTracker, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.searchBugTrackerController = (req, res) => {
    const params = req.params.request.split(' ')
    const idUser = req.params.idUser
    BugTrackerModel.searchBugTrackerModel(tableBugTracker, params[0], idUser)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}


exports.requestPriorityBugTrackerController = (req, res) => {
    BugTrackerModel.requestPriorityBugTrackerModel(tableBugTracker, req.params.priority)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.requestPriorityWithIDBugTrackerController = (req, res) => {
    BugTrackerModel.requestPriorityWithIDBugTrackerModel(tableBugTracker, req.params.priority, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}