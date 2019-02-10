const CalendarModel = require('../models/calendar_model')
const table = 'amil_calendar_events'
const MainController = require('./main_controller')

exports.getEventsController = (req,res,next) => {
    CalendarModel.findCalendarEventsModel(table, req.body.idUser, "idUser")
    .then((response) => {
        CalendarModel.findCalendarEventsModel(table, 1, "forAll")
        .then((response2) => {
            for(event of response2){
                for(event2 of response){
                    if(event2.id === event.id){
                        response.splice(response.indexOf(event2),1);
                    }
                }
            }
            let finalResponse = [...response,...response2];
            MainController.validFunction(true, res, finalResponse, '')
        }).catch(err => MainController.validFunction(false, res, '', err));
    })
    .catch((error) => {MainController.validFunction(false, res, '', error)});
}

exports.addEventController = (req,res,next) => {
    CalendarModel.addCalendarEventModel(table, req.body.event)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error));
}

exports.removeEventController = (req,res,next) => {
    CalendarModel.deleteCalendarModel(table, req.body.id)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error));
}

exports.searchCalendarController = (req, res) => {
    const params = req.params.request.split(' ')
    const idUser = req.params.idUser
    CalendarModel.searchCalendarModel(table, params[0], idUser)
    .then((response) => MainController.validFunction(true, res, response, ''))
    .catch((error) => MainController.validFunction(false, res, '', error))
}