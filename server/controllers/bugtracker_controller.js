const BugTrackerModel = require('../models/bugtracker_model')
const tableMembers = 'amil_bugtracker'
const MainController = require('./main_controller')


exports.findAllBugTrackerController = (req, res) => {
    BugTrackerModel.findAllBugTrackerModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findOneBugTrackerController = (req, res) => {
    BugTrackerModel.findOneBugTrackerModel(tableMembers, req.params.id, 'name')
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addBugTrackerController = (req, res) => {
    BugTrackerModel.addBugTrackerModel(tableMembers, req.body.params)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.updateBugTrackerController = (req, res) => {
    BugTrackerModel.updateBugTrackerModel(tableMembers, req.body.params, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.deleteBugTrackerController = (req, res) => {
    BugTrackerModel.deleteBugTrackerModel(tableMembers, req.params.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.countBugTrackerController = (req, res) => {
    BugTrackerModel.countBugTrackerModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}