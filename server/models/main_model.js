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
                console.log('------------');
                console.log('Request FindAllMainModel : ' + `SELECT * FROM ${table}`);
                console.log('------------');
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
                console.log('------------');
                console.log('Request FindMainModel : ' + `SELECT ${field} FROM ${table} WHERE ${search}='${content}'`);
                console.log('------------');
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
                console.log('------------');
                console.log('Request deleteModel : ' + `DELETE FROM ${table} WHERE id='${id}'`);
                console.log('------------');
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

    updateMainModel(table, paramsArray, search='1', where='id'){
        return new Promise((resolve, reject) => {
            this.verifTable(table)
            .then((response) => {
                this.findMainModel(table, search)
                .then((response) => {
                    let data = ""
                    var i = 1
                    const long = Object.keys(paramsArray).length
                    for(let key in paramsArray){
                        if(i < long){
                            data = data + key + '=' + '"' + paramsArray[key] + '"' + ', '
                        }else{
                            data = data + key + '=' + "'" + paramsArray[key] + "'"
                            console.log('------------');
                            console.log('Request updateMainModel : ' + `UPDATE ${table} SET ${data} WHERE ${where}=${search}`);
                            console.log('------------');
                            DB.query(`UPDATE ${table} SET ${data} WHERE ${where}=${search}`, (err, result) => {
                                if(err) reject(err)
                                else resolve(config.success.edit)
                            })
                        }

                        i++
                    }
                })
                .catch((error) => reject(error))
            })
            .catch((error) => reject(error))
        })
    },

    countMainModel(table){
        return new Promise((resolve, reject) => {
            this.verifTable(table)
            .then((response) => {
                console.log('------------');
                console.log('Request countMainModel : ' + `SELECT COUNT(*) AS count FROM ${table}`);
                console.log('------------');
                DB.query(`SELECT COUNT(*) AS count FROM ${table}`, (err, result) => {
                    if(err) reject(err)
                    else resolve(result[0].count)
                })
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

    },

    verifParamsNumber(params, number){
        if(params === number) return true
            else return false
    },

    lastIDMainModel(table){
       return new Promise((resolve, reject) => {
           this.verifTable(table)
           .then((response) => {
            console.log('------------')
            console.log('Request countMainModel : ' + `SELECT MAX(id) FROM ${table}`)
            console.log('------------')
            DB.query(`SELECT MAX(id) AS lastid FROM ${table}`, (err, result) => {
                if(err) reject(err)
                else resolve(result[0].lastid) 
            })
           })
           .catch((error) => reject(error))
       })
    },
}









