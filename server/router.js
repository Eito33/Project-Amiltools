/*
#NAME : Router
#DESCRIPTION :
    Router:

    #Require:
        -> config ::

    #Controllers:
        -> UserController ::
        -> ReportController ::
        -> TaskController ::
        -> BugTrackerController ::

    #Middleware:
        -> mid ::

    #Route:
        #Welcome:
            -> /api/v1/

        #Default:
            -> /api/v1/*
------------------------------------------------------------------------------------ USER

        #User:
            #DisplayUser
                -> /api/v1/user/:api_key ::
                -> /api/v1/user/:id/:api_key ::
                -> /api/v1/finduser/:name ::

            #ControlUser
                -> /api/v1/user/add/ ::
                -> /api/v1/user/update/:id/:api_key ::
                -> /api/v1/user/delete/:id/:api_key ::
                -> /api/v1/getrole/* ::

            #ConnectUser
                -> /api/v1/user/log/ ::
                -> /api/v1/user/log/token/:token ::

------------------------------------------------------------------------------------ REPORT

        #Report:
            #DisplayReport
                -> /api/v1/report/ ::
                -> /api/v1/report/:id/ ::
                -> /api/v1/report/find/lastreport ::

            #ControlReport
                -> /api/v1/report/add/:api_key ::
                -> /api/v1/report/update/:id/:api_key ::
                -> /api/v1/report/delete/:id/:api_key ::

            #Options
                -> /api/v1/report/count/all ::
                -> /api/v1/report/lastid/last ::

------------------------------------------------------------------------------------ Task

        #Task:
            #DisplayTask
                -> /api/v1/task/ ::
                -> /api/v1/task/:id/ ::

            #ControlReport
                -> /api/v1/task/add/:api_key ::
                -> /api/v1/task/update/:id/:api_key ::
                -> /api/v1/task/delete/:id/:api_key ::

            #Options
                -> /api/v1/task/count/all ::

------------------------------------------------------------------------------------ BugTracker

        #BugTracker:
            #DisplayBugTracker
                -> /api/v1/bugtracker/ ::
                -> /api/v1/bugtracker/:id/ ::

            #ControlBugTracker
                -> /api/v1/bugtracker/add/:api_key ::
                -> /api/v1/bugtracker/update/:id/:api_key ::
                -> /api/v1/bugtracker/delete/:id/:api_key ::

            #Options
                -> /api/v1/bugtracker/count/all ::

*/


//----------------------------------------------- REQUIRE
const config = require('./config/config.json')


//----------------------------------------------- Controllers
const UserController = require('./controllers/user_controller')
const ReportController = require('./controllers/report_controller')
const TaskController = require('./controllers/task_controller')
const BugTrackerController = require('./controllers/bugtracker_controller')
const CalendarController = require('./controllers/calendar_controller')

//----------------------------------------------- MIDDLEWARE
const mid = require('./middleware/mid_secure_auth')


//------------------------------------------------------------------------------------------------------ START MODEL

module.exports = function(server){

    //WELCOME
    server.get(`${config.routeApi}`, (req, res) => {
        res.status(200).json(
            {
                "success": true,
                "message": "Welcome to my API for Amiltool's"
            }
        )
    })

    //-----------------------------------------------------------------------------------------

    //USER ROUTE FREE
        //Display USER
        server.get(`${config.routeApi}user/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.findAllUserController)
        server.get(`${config.routeApi}user/:id/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.findOneUserController)
        server.get(`${config.routeApi}finduser/:name`, UserController.findUserProfilesController)
        server.get(`${config.routeApi}searchUser/:request`, UserController.searchUserController)

        //Control User
        server.post(`${config.routeApi}user/add/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.addUserController)
        server.put(`${config.routeApi}user/update/:id/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.updateUserController)
        server.delete(`${config.routeApi}user/delete/:id/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.deleteUserController)
        server.get(`${config.routeApi}getrole/*`, UserController.roleUserController)
        server.get(`${config.routeApi}getAllrole/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.allRoleUserController)
        server.post(`${config.routeApi}user/generateApiKey/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.generateApiKeyUserController)
        server.delete(`${config.routeApi}user/deleteApiKey/:id/:api_key`, mid.secure_auth_api, mid.secure_admin_api, UserController.deleteApiKeyUserController)


        //Connect User
        server.post(`${config.routeApi}user/log/`, UserController.logUserController)
        server.get(`${config.routeApi}user/log/token/:token`, UserController.logUserWithTokenController)


    //-----------------------------------------------------------------------------------------

    //REPORT ROUTE

        //Display Report
        server.get(`${config.routeApi}report`, ReportController.findAllReportController)
        server.get(`${config.routeApi}report/:id`, ReportController.findOneReportController)
        server.get(`${config.routeApi}report/find/lastreport`, ReportController.findLastReportController)

        //Control Report
        server.post(`${config.routeApi}report/add/:api_key`, mid.secure_auth_api, mid.secure_manager_api, ReportController.addReportController)
        server.put(`${config.routeApi}report/update/:id/:api_key`, mid.secure_auth_api, mid.secure_manager_api, ReportController.updateReportController)
        server.delete(`${config.routeApi}report/delete/:id/:api_key`, mid.secure_auth_api, mid.secure_manager_api, ReportController.deleteReportController)

        //Options
        server.get(`${config.routeApi}report/count/all`, ReportController.countReportController)
        server.get(`${config.routeApi}report/lastid/last`, ReportController.lastIDReportController)

    //-----------------------------------------------------------------------------------------

    //TASK ROUTE
        //Display Task
        server.get(`${config.routeApi}task`, TaskController.findAllTaskController)
        server.get(`${config.routeApi}task/:id`, TaskController.findOneTaskController)

        //Control Task
        server.post(`${config.routeApi}task/add`, TaskController.addTaskController)
        server.put(`${config.routeApi}task/update/:id`, TaskController.updateTaskController)
        server.delete(`${config.routeApi}task/delete/:id`, TaskController.deleteTaskController)

        //Options
        server.get(`${config.routeApi}task/count/all`, TaskController.countTaskController)

    //-----------------------------------------------------------------------------------------

    //BUGTRACKER ROUTE
        //Display Bug
        server.get(`${config.routeApi}bugtracker`, BugTrackerController.findAllBugTrackerController)
        server.get(`${config.routeApi}bugtracker/:id`, BugTrackerController.findOneBugTrackerController)

        //Control Bug
        server.post(`${config.routeApi}bugtracker/add`, BugTrackerController.addBugTrackerController)
        server.put(`${config.routeApi}bugtracker/update/:id`, BugTrackerController.updateBugTrackerController)
        server.delete(`${config.routeApi}bugtracker/delete/:id`, BugTrackerController.deleteBugTrackerController)

        //Options
        server.get(`${config.routeApi}bugtracker/count/all`, BugTrackerController.countBugTrackerController)

    //-----------------------------------------------------------------------------------------

    //CALENDAR ROUTE
        //Display Calendar
        server.post(`${config.routeApi}calendar/getEvents`, CalendarController.getEventsController);
        server.post(`${config.routeApi}calendar/setEvent`, CalendarController.addEventController);
        server.delete(`${config.routeApi}calendar/delete`, CalendarController.removeEventController);

    //-----------------------------------------------------------------------------------------



    //Default
    server.use((req, res) => {
        res.status(404).json(
            {
                "success": false,
                "message": "Check Documentation of API"
            }
        )
    })

}
