const config = require('./config/config.json')
const UserController = require('./controllers/user_controller')


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
    server.get(`${config.routeApi}user`, UserController.findAllUserController) //Display all User
    server.get(`${config.routeApi}user/:id`, UserController.findOneUserController) //Display One user
    server.post(`${config.routeApi}user/add`, UserController.addUserController) //Add user
    server.post(`${config.routeApi}user/log`, UserController.logUserController) //Log User
    server.put(`${config.routeApi}user/update/:id`, UserController.updateUserController) //Update User
    server.delete(`${config.routeApi}user/delete/:id`, UserController.deleteUserController) //Delete User
    
    //-----------------------------------------------------------------------------------------
    
    //Default
    server.use((req, res) => {
        res.status(200).json(
            {
                "result": "false",
                'response': 'Error: Check documentation of API'
            }
        )
    })

}
