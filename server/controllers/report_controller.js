const ReportModel = require('../models/report_model')
const tableMembers = 'amil_report'
const MainController = require('./main_controller')


exports.findAllReportController = (req, res) => {
    ReportModel.findAllReportModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findOneReportController = (req, res) => {
    ReportModel.findOneReportModel(tableMembers, req.params.id, 'name')
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.addReportController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        ReportModel.addReportModel(tableMembers, req.body.params)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.updateReportController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        ReportModel.updateReportModel(tableMembers, req.body.params, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.deleteReportController = (req, res) => {
    if(req.informationsUser === 'noapikey'){
        res.status(401).json(
            {
                "error": false,
                "message": config.error.api_key_not_allowed
        })
    }else{
        ReportModel.deleteReportModel(tableMembers, req.params.id)
        .then((response) => MainController.validFunction(true, res, response, ''))
        .catch((error) => MainController.validFunction(false, res, '', error))
    }
}

exports.countReportController = (req, res) => {
    ReportModel.countReportModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.lastIDReportController = (req, res) => {
    ReportModel.lastIDReportModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.findLastReportController = (req, res) => {
    ReportModel.findLastReportModel(tableMembers)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}

exports.searchReportController = (req, res) => {
    const params = req.params.request.split(' ')
    ReportModel.searchReportModel(tableMembers, params[0], params[1])
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}