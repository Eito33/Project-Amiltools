const Model = require('./main_model')
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')

module.exports = {

    findAllBugTrackerModel(table){
        return new Promise((resolve, reject) => {
            console.log('------------')
            console.log('Request findAllBugTracker : ' + `SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id`)
            console.log('------------')
            DB.query(`SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id`,
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

    requestPriorityBugTrackerModel(table, priority){
        return new Promise((resolve, reject) => {
            console.log('------------')
            console.log('Request findAllBugTrackerWhereID : ' +
            `SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id
            WHERE priority = '${priority}'`)
            console.log('------------')

            DB.query(`SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id
            WHERE priority = '${priority}'`,
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

    requestPriorityWithIDBugTrackerModel(table, priority, id){
        return new Promise((resolve, reject) => {
            console.log('------------')
            console.log('Request findAllBugTrackerWhereID : ' +
            `SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id
            WHERE priority = '${priority}' AND id_user = ${id}`)
            console.log('------------')

            DB.query(`SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id
            WHERE priority = '${priority}' AND id_user = ${id}`,
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

    findAllBugTrackerWhereIDModel(table, id_user){
        return new Promise((resolve, reject) => {
            console.log('------------')
            console.log('Request findAllBugTrackerWhereID : ' +
            `SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id
            WHERE id_user = ${id_user}`)
            console.log('------------')
            DB.query(`SELECT
            bt.id as id_bug, bt.title as title_bug, bt.content as content_bug, bt.priority as priority_bug, bt.tags as tags_bug, bt.archive as archive_bug,
            create_at, firstname, lastname, id_user
            FROM ${table} as bt
            INNER JOIN amil_user ON bt.id_user = amil_user.id
            WHERE id_user = ${id_user}`,
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

                if(Model.verifParamsNumber(long, 5)){
                    const date = Date.now();
                    console.log('------------');
                    console.log('Request addBugTrackerModel : ' +
                    `INSERT INTO ${table}(title, content, priority, id_user, tags) VALUES ("${req.title}", "${req.content}", "${req.priority}", "${req.id_user}", "${req.tags}")`);
                    console.log('------------');
                    DB.query(`INSERT INTO ${table}(title, content, priority, id_user, tags) VALUES ("${req.title}", "${req.content}", "${req.priority}", "${req.id_user}", "${req.tags}")`, (err, result) => {
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
    },

    countBugTrackerWithIDModel(table, id){
        return new Promise((resolve, reject) => {
            Model.countMainModelWithID(table, 'id_user', id)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    //Fonction qui recherche un utilisateur en BDD
    searchBugTrackerModel(table, params, idUser){
        return new Promise((resolve, reject) => {
            console.log('------------')
            console.log('Request searchBugTracker : ' + `SELECT id, title, priority, tags from ${table} WHERE LOWER(tags) LIKE LOWER('%${params}%') AND id_user = ${idUser}`)
            console.log('------------')
            DB.query(`SELECT id, title, priority, tags from ${table} WHERE LOWER(tags) LIKE LOWER('%${params}%') AND id_user = ${idUser}`,
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