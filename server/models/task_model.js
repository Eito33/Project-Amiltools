const Model = require('./main_model')
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')

module.exports = {

    findAllTaskModel(table){
        return new Promise((resolve, reject) => {
            Model.findAllMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    findOneTaskModel(table, req, search){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, req)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    addTaskModel(table, req){
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((response) => {
                const long = Object.keys(req).length

                if(Model.verifParamsNumber(long, 4)){
                    const date = Date.now();
                    console.log('------------');
                    console.log('Request addTaskModel : ' + `INSERT INTO ${table}(title, content, priority, assignedto, create_at) VALUES ("${req.title}", "${req.content}", "${req.priority}", "${req.assignedto}", "${date}")`);
                    console.log('------------');
                    DB.query(`INSERT INTO ${table}(title, content, priority, assignedto, create_at) VALUES ("${req.title}", "${req.content}", "${req.priority}", "${req.assignedto}", "${date}")`, (err, result) => {
                        if(err) reject(config.error.notaddtask)
                        else resolve(config.success.taskadd)
                    })
                }else reject(config.error.missingparams)
            })
            .catch((error) => reject(error))
        })
    },

    updateTaskModel(table, paramsArray, search){
        return new Promise((resolve, reject) => {
            Model.updateMainModel(table, paramsArray, search)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    deleteTaskModel(table, id){
        return new Promise((resolve, reject) => {
            Model.deleteModel(table, id)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    countTaskModel(table){
        return new Promise((resolve, reject) => {
            Model.countMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    }
}