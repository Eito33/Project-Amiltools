const Model = require('./main_model')
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')

module.exports = {

    findAllReportModel(table){
        return new Promise((resolve, reject) => {
            Model.findAllMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    findOneReportModel(table, req, search){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, req)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    addReportModel(table, req){
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((response) => {
                const date = Date.now()
                console.log('DATE : ', date)
                const long = Object.keys(req).length
                if(Model.verifParamsNumber(long, 3)){
                    const treatedText = req.content.replace(/"/g, "&quot;");
                    console.log('------------')
                    console.log('Request addReport : ' + `INSERT INTO ${table}(title, content, author, create_at) VALUES ("${req.title}", "${treatedText}", "${req.author}", "${date}")`)
                    console.log('------------')
                    DB.query(`INSERT INTO ${table}(title, content, author) VALUES ("${req.title}", "${treatedText}", "${req.author}")`, (err, result) => {
                        if(err) {
                            console.log('Error : ', err)
                            reject(config.error.notaddreport)
                        }
                        else resolve(config.success.reportadd)
                    })
                }else{
                    reject(config.error.missingparams)
                }
            })
            .catch((error) => reject(error))
        })
    },

    updateReportModel(table, paramsArray, search){
        return new Promise((resolve, reject) => {
            Model.updateMainModel(table, paramsArray, search)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    deleteReportModel(table, id){
        return new Promise((resolve, reject) => {
            Model.deleteModel(table, id)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    countReportModel(table){
        return new Promise((resolve, reject) => {
            Model.countMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    lastIDReportModel(table){
        return new Promise((resolve, reject) => {
            Model.lastIDMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    findLastReportModel(table){
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((response) => {
                Model.lastIDMainModel(table)
                .then((response) => {
                    Model.findMainModel(table, response)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error))
                })
                .catch((error) => reject(error))
            })
            .catch((error) => reject(error))
        })
    },
}