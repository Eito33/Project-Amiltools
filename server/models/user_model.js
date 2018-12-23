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

                   //Inscrit l'user en bdd
                   DB.query(`INSERT INTO ${table}(firstname, lastname, mail, password)
                              VALUES ('${req.firstname}', '${req.lastname}', '${req.mail}', '${passwordHash}')`,
                              (err, result) => {
                        if(err) reject(config.error.notadduser)
                        else resolve(config.success.useradd)
                    })


                })
            })
            .catch((error) => reject(error))
        })
    },

    updateUserModel(table, column, content, search,  whereBy='id'){ //TODO: A REFAIRE
        return new Promise((resolve, reject) => {
            Model.verifTable(table)
            .then((response) => {
                Model.findMainModel(table, search) 
                .then((reponse) => {
                    Model.findMainModel(table, content, column, column)
                    .then((error) => reject(config.error.elementuse))
                    .catch((response) => {

                        //Fait un Update de l'user
                        DB.query(`UPDATE ${table} SET ${column}='${content}' WHERE ${whereBy}='${search}'`, (err, result) => {
                            if(err) reject(err)
                            resolve(config.success.useredit)
                        })
                    })
                })
                .catch((error) => reject(error))
            })
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
                if(Model.verifBcryptPassword(req.password, response[0].password)) resolve(response)
                else reject(config.error.passwordwrong)
            })
            .catch((error) => reject(error))
        })
    },
}