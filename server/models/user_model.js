const Model = require('./main_model')
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')

module.exports = {

    findAllUserModel(table){
        return new Promise((resolve, reject) => {
            Model.findAllMainModel(table)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    findOneUserModel(table, req, search){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, req)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    addUserModel(table, req){
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((reponse) => {
                Model.findMainModel(table, req.mail, 'mail', 'mail')
                .then((error) => reject(config.error.mail)) //On ne trouve pas le mail
                .catch((response) => {

                   //Contient le password hash
                   const passwordHash = Model.hashBcryptPassword(req.password)
                   //Contient le token
                   const token = Model.hashBcryptPassword(req.mail)
                   //Contient le grade
                   const role = Model.hashBcryptPassword('user')

                   //Inscrit l'user en bdd
                   DB.query(`INSERT INTO ${table}(firstname, lastname, mail, password, token, grade)
                              VALUES ('${req.firstname}', '${req.lastname}', '${req.mail}', '${passwordHash}', '${token}', '${role}')`,
                              (err, result) => {
                        if(err) reject(config.error.notadduser)
                        else resolve(config.success.useradd)
                    })


                })
            })
            .catch((error) => reject(error))
        })
    },

    updateUserModel(table, paramsArray, search){
        return new Promise((resolve, reject) => {
            if(paramsArray['password'] != undefined){
                paramsArray['password'] = Model.hashBcryptPassword(paramsArray['password'])
            }
            if(paramsArray['mail'] != undefined){
                const token = Model.hashBcryptPassword(paramsArray['mail'])
                paramsArray['token'] = token
            }
            Model.updateMainModel(table, paramsArray, search)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })

    },

    deleteUserModel(table, id){
        return new Promise((resolve, reject) => {
            Model.deleteModel(table, id)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    },

    logUserModel(table, req){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, req.mail, 'mail')
            .then((response) => {
                //Verifie avec la comparaison de bcrypt si les deux password sont identique
                if(Model.verifBcryptPassword(req.password, response[0].password)) {
                    resolve(response)
                }
                else reject(config.error.passwordwrong)
            })
            .catch((error) => reject(error))
        })
    },


    logUserWithTokenModel(table, req){
        return new Promise((resolve, reject) => {
            Model.findMainModel(table, req, 'token')
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
}