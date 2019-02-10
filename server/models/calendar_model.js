const mysqlConnect = require('../config/connexion');
const Model = require("./main_model");
const connect = new mysqlConnect();
const config = require('../config/config');
const DB = connect.isConnected();

module.exports = {

    findCalendarEventsModel(table, id, field){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, id, field)
            .then((response) => resolve(response))
            .catch((error) => {reject(error)})
        });
    },


    addCalendarEventModel(table, event){
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((response) => {
                const long = Object.keys(event).length
                if(Model.verifParamsNumber(long, 5)){
                    const treatedTitle = event.title.replace(/"/g, "&quot;");
                    console.log('------------')
                    console.log('Request addCalendarEventModel : ' + `INSERT INTO ${table}(title, start, end, idUser, forAll) VALUES ("${treatedTitle}", "${event.start}", "${event.end}", ${event.idUser},${event.forAll});`)
                    console.log('------------')
                    DB.query(`INSERT INTO ${table}(title, start, end, idUser, forAll) VALUES ("${treatedTitle}", "${event.start}", "${event.end}", ${event.idUser},${event.forAll});`, (err, result) => {
                        if(err) {
                            console.log('Error : ', err)
                            reject(config.error.notaddevent)
                        }else{
                            resolve(config.success.eventadd)
                        }
                    });
                }else{
                    reject(config.error.missingparams)
                }
            })
            .catch((error) => reject(error))
        })
    },


    deleteCalendarModel(table, id){
        return new Promise((resolve, reject) => {
            Model.deleteModel(table, id)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    //Fonction qui recherche un utilisateur en BDD
    searchCalendarModel(table, params, idUser){
        return new Promise((resolve, reject) => {
            console.log('------------')
            console.log('Request searchUser : ' + `SELECT id, title, start, end from ${table} WHERE LOWER(title) LIKE LOWER('%${params}%') AND idUser = ${idUser}`)
            console.log('------------')
            DB.query(`SELECT id, title, start, end from ${table} WHERE LOWER(title) LIKE LOWER('%${params}%') AND idUser = ${idUser}`,
            (err, result) => {
                if(err) reject(err)
                else {
                    if(result.length >= 1){
                        resolve(result)
                    }else{
                        reject(config.error.search_no_user)
                    }
                }
            })
        })
    },


}