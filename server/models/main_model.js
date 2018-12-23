const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')
const bcrypt = require('bcrypt-nodejs');

module.exports = {

    verifTable(table){
        return new Promise((resolve, reject) => {
            DB.query(`show tables from ${DB.config.database} like '${table}'`, (err, rows) => {
                if(err) reject(false)
                else if(rows.length >= 1) resolve(true)
                else reject(config.error.table) //La table n'a pas été trouvé
            })
        })
    },

    findAllMainModel(table){
        return new Promise((resolve, reject) => {
            this.verifTable(table)
            .then((response) => {
                DB.query(`SELECT * FROM ${table}`, (err, result) => {
                    if (err) reject(err)
                    resolve(result)
                })
            })
            .catch((error) => reject(error))
        })
    },

    findMainModel(table, content = '1', search= 'id', field = '*'){
        return new Promise((resolve, reject) => {
            this.verifTable(table)
            .then((response) => {
                DB.query(`SELECT ${field} FROM ${table} WHERE ${search}='${content}'`, (err, result) => {
                    if(result <= 0) reject(config.error.nothing)
                    else if(err) reject(err)
                    else resolve(result) 
                })
            })
            .catch((error) => reject(error))
        })
    },

    deleteModel(table, id){
       return new Promise((resolve, reject) => {
           this.verifTable(table)
           .then((response) => {
               this.findMainModel(table, id)
               .then((response) => {
                   DB.query(`DELETE FROM ${table} WHERE id='${id}'`, (err, result) => {
                        if(err) reject(err)
                        resolve(config.success.deleteitem)
                   })
               })
               .catch((error) => reject(error))
           })
           .catch((error) => reject(error))
       })
    },

    verifBcryptPassword(password, hash){
        if(bcrypt.compareSync(password, hash)) return true
        else return false
    },

    hashBcryptPassword(password){
        return bcrypt.hashSync(password)

    }
}









