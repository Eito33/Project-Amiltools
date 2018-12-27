const Model = require('./main_model')
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')

module.exports = {

    findAllBugTrackerModel(table){
        return new Promise((resolve, reject) => {
            Model.findAllMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    findOneBugTrackerModel(table, req, search){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, req)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    addBugTrackerModel(table, req){
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((response) => {
                const long = Object.keys(req).length

                if(Model.verifParamsNumber(long, 6)){
                    const date = Date.now();
                    console.log('------------');
                    console.log('Request addBugTrackerModel : ' + `INSERT INTO ${table}(title, content, priority, zone, context, assignedto, create_at) VALUES ("${req.title}", "${req.content}", "${req.priority}", "${req.zone}", "${req.context}", "${req.assignedto}", "${date}")`);
                    console.log('------------');
                    DB.query(`INSERT INTO ${table}(title, content, priority, zone, context, assignedto, create_at) VALUES ("${req.title}", "${req.content}", "${req.priority}", "${req.zone}", "${req.context}", "${req.assignedto}", "${date}")`, (err, result) => {
                        if(err) reject(config.error.notaddBugTracker)
                        else resolve(config.success.BugTrackeradd)
                    })
                }else reject(config.error.missingparams)
            })
            .catch((error) => reject(error))
        })
    },

    updateBugTrackerModel(table, paramsArray, search){
        return new Promise((resolve, reject) => {
            Model.updateMainModel(table, paramsArray, search)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    deleteBugTrackerModel(table, id){
        return new Promise((resolve, reject) => {
            Model.deleteModel(table, id)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    countBugTrackerModel(table){
        return new Promise((resolve, reject) => {
            Model.countMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    }
}