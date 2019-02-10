const AstuceModel = require('../models/astuce_model')
const tableBugTracker = 'amil_astuce'
const MainController = require('./main_controller')


exports.findAllAstucesController = (req, res) => {
    AstuceModel.findAllAstucesModel(tableBugTracker)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}