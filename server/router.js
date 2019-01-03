const config = require('./config/config.json')

//Controller
const UserController = require('./controllers/user_controller')
const ReportController = require('./controllers/report_controller')
const TaskController = require('./controllers/task_controller')
const BugTrackerController = require('./controllers/bugtracker_controller')

//TODO: Revoir certaines route qui fonctionne mal et on besoin d'un /truc pour fonctionner


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

    //USER ROUTE
        //Display USER
        server.get(`${config.routeApi}user`, UserController.findAllUserController) //Display all User
        server.get(`${config.routeApi}user/:id`, UserController.findOneUserController) //Display One user

        //Control User
        server.post(`${config.routeApi}user/add`, UserController.addUserController) //Add user
        server.put(`${config.routeApi}user/update/:id`, UserController.updateUserController) //Update User
        server.delete(`${config.routeApi}user/delete/:id`, UserController.deleteUserController) //Delete User

        //Connect User
        server.post(`${config.routeApi}user/log`, UserController.logUserController) //Log User
        server.get(`${config.routeApi}user/log/*`, UserController.logUserWithTokenController)

    //-----------------------------------------------------------------------------------------

    //REPORT ROUTE

        //Display Report
        server.get(`${config.routeApi}report`, ReportController.findAllReportController) //Display all Report
        server.get(`${config.routeApi}report/:id`, ReportController.findOneReportController) //Display One report
        server.get(`${config.routeApi}report/find/lastreport`, ReportController.findLastReportController) //Display last report

        //Control Report
        server.post(`${config.routeApi}report/add`, ReportController.addReportController) //Add Report
        server.put(`${config.routeApi}report/update/:id`, ReportController.updateReportController) //Update Report
        server.delete(`${config.routeApi}report/delete/:id`, ReportController.deleteReportController) //Delete Report

        //Options
        server.get(`${config.routeApi}report/count/all`, ReportController.countReportController) //Count all report
        server.get(`${config.routeApi}report/lastid/last`, ReportController.lastIDReportController) //Count max id

    //-----------------------------------------------------------------------------------------

    //TASK ROUTE
        //Display Task
        server.get(`${config.routeApi}task`, TaskController.findAllTaskController) //Display all Task
        server.get(`${config.routeApi}task/:id`, TaskController.findOneTaskController) //Display One Task

        //Control Task
        server.post(`${config.routeApi}task/add`, TaskController.addTaskController) //Add Task
        server.put(`${config.routeApi}task/update/:id`, TaskController.updateTaskController) //Update Task
        server.delete(`${config.routeApi}task/delete/:id`, TaskController.deleteTaskController) //Delete Task

        //Options
        server.get(`${config.routeApi}task/count/all`, TaskController.countTaskController)

    //-----------------------------------------------------------------------------------------

    //BUGTRACKER ROUTE
        //Display Bug
        server.get(`${config.routeApi}bugtracker`, BugTrackerController.findAllBugTrackerController) //Display all BugTracker
        server.get(`${config.routeApi}bugtracker/:id`, BugTrackerController.findOneBugTrackerController) //Display One BugTracker

        //Control Bug
        server.post(`${config.routeApi}bugtracker/add`, BugTrackerController.addBugTrackerController) //Add BugTracker
        server.put(`${config.routeApi}bugtracker/update/:id`, BugTrackerController.updateBugTrackerController) //Update BugTracker
        server.delete(`${config.routeApi}bugtracker/delete/:id`, BugTrackerController.deleteBugTrackerController) //Delete BugTracker

        //Options
        server.get(`${config.routeApi}bugtracker/count/all`, BugTrackerController.countBugTrackerController)

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
