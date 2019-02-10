/*
#NAME : MainModel
#DESCRIPTION :
    MainModel : MainModel est le model qui gère les utilisateurs
    Dans chacune des fonctions utiliser la fontion verifTable est appeler pour vérifier que la table sur laquelle on souhaite
    faire des opérations est bien existante.
    Dans chaque fonctions se trouve des console.log des requete effectuer afin d'avoir un retour visuel dans les log serveur

    #Require:
        -> mysqlConnect ::
        -> connect ::
        -> DB ::
        -> config ::
        -> bcrypt ::

    #Functions:

        #FIND:
            -> findAllMainModel(table) ::
            -> findMainModel(table, content = '1', search= 'id', field = '*') ::
            -> countMainModel(table)
            -> lastIDMainModel(table)

        #CRUD:
            -> updateMainModel(table, paramsArray, search='1', where='id') ::
            -> deleteModel(table, id) ::

        #BCRYPT:
            -> verifBcryptPassword(password, hash) ::
            -> hashBcryptPassword(password) ::

        #API_KEY:
            -> saveApiKey(api_key, id_user) ::
            -> generateApiKEY(role) ::

        #Token:
            -> generateToken() ::

        #Others:
            -> verifTable(table) ::
            -> verifParamsNumber(params, number) ::
*/


//----------------------------------------------- REQUIRE
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')
const bcrypt = require('bcrypt-nodejs');


//------------------------------------------------------------------------------------------------------ START MODEL

module.exports = {


//----------------------------------------------- FIND

//Fonction qui permet de recherche un ensemble d'informations
findAllMainModel(table, search = '*'){
    return new Promise((resolve, reject) => {
        this.verifTable(table)
        .then((response) => {
            console.log('------------');
            console.log('Request FindAllMainModel : ' + `SELECT ${search} FROM ${table}`);
            console.log('------------');
            DB.query(`SELECT ${search} FROM ${table}`, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
        .catch((error) => reject(error))
    })
},

findMainModelWithInnerJoin(tableBase, tableSearch, searchTableBase = '1', searchTableSearch = '1', search = 'id', content = '1', field = '*'){
    return new Promise((resolve, reject) => {
        this.verifTable(tableBase)
        this.verifTable(tableSearch)
        .then((response) => {
            console.log('------------')
            console.log('Request findMainModelWithInnerJoin : ' + `SELECT * FROM ${tableBase} INNER JOIN ${tableSearch} ON ${tableBase}.${searchTableBase} = ${tableSearch}.${searchTableSearch} WHERE ${search} = '${content}'`)
            console.log('------------')
            DB.query(`SELECT ${field} FROM ${tableBase} INNER JOIN ${tableSearch} ON ${tableBase}.${searchTableBase} = ${tableSearch}.${searchTableSearch} WHERE ${search} = '${content}'`,
            (err, result) => {
                if(err) reject(err)
                else {
                    if(result.length >= 1) resolve(result)
                    else reject('Probleme durant la requete')
                }
            })
        })
        .catch((error) => reject(error))
    })
},

findMainModelWith2ConditionsInnerJoin(tableBase, tableSearch, conditionTwoSearch, conditionTwoContent, searchTableBase = '1', searchTableSearch = '1', search = 'id', content = '1', field = '*'){
    return new Promise((resolve, reject) => {
        this.verifTable(tableBase)
        this.verifTable(tableSearch)
        .then((response) => {
            console.log('------------')
            console.log('Request findMainModelWith2ConditionsInnerJoin : ' + `SELECT ${field} FROM ${tableBase} INNER JOIN ${tableSearch} ON ${tableBase}.${searchTableBase} = ${tableSearch}.${searchTableSearch} WHERE ${search} = '${content}' AND ${conditionTwoSearch}='${conditionTwoContent}'`)
            console.log('------------')
            DB.query(`SELECT ${field} FROM ${tableBase} INNER JOIN ${tableSearch} ON ${tableBase}.${searchTableBase} = ${tableSearch}.${searchTableSearch} WHERE ${search} = '${content}' AND ${conditionTwoSearch}='${conditionTwoContent}'`,
            (err, result) => {
                if(err) reject(err)
                else {
                    if(result.length >= 1) resolve(result)
                    else reject('Probleme durant la requete')
                }
            })
        })
        .catch((error) => reject(error))
    })
},

//Fonction qui permet de recherche une informations
findMainModel(table, content = '1', search= 'id', field = '*'){
    return new Promise((resolve, reject) => {
        this.verifTable(table)
        .then((response) => {
            console.log('------------');
            console.log('Request FindMainModel : ' + `SELECT ${field} FROM ${table} WHERE ${search}='${content}'`);
            console.log('------------');
            DB.query(`SELECT ${field} FROM ${table} WHERE ${search}='${content}'`, (err, result) => {
                if(result <= 0){
                    result.isEmpty = true;
                    resolve(result)}
                else if(err) reject(err)
                else{
                    result.isEmpty = false;
                    resolve(result)}
            })
        })
        .catch((error) => reject(error))
    })
},

//Fonction qui permet de compter un nombre d'information
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

//Fonction qui permet de compter un nombre d'information depuis un ID
countMainModelWithID(table, search='id', content='1'){
    return new Promise((resolve, reject) => {
        this.verifTable(table)
        .then((response) => {
            console.log('------------');
            console.log('Request countMainModel : ' + `SELECT COUNT(*) AS count FROM ${table} WHERE ${search}= '${content}'`);
            console.log('------------');
            DB.query(`SELECT COUNT(*) AS count FROM ${table} WHERE ${search}= '${content}'`, (err, result) => {
                if(err) reject(err)
                else resolve(result[0].count)
            })
        })
        .catch((error) => reject(error))
    })
},

//Fonction qui permet de récupérer le dernier ID d'une table
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


//----------------------------------------------- CRUD

//Fonction qui permet de supprimer une information
deleteModel(table, id, search = 'id'){
    return new Promise((resolve, reject) => {
        this.verifTable(table)
        .then((response) => {
            this.findMainModel(table, id)
            .then((response) => {
             console.log('------------');
             console.log('Request deleteModel : ' + `DELETE FROM ${table} WHERE ${search}='${id}'`);
             console.log('------------');
                DB.query(`DELETE FROM ${table} WHERE ${search}='${id}'`, (err, result) => {
                     if(err) reject(err)
                     resolve(config.success.deleteitem)
                })
            })
            .catch((error) => reject(error))
        })
        .catch((error) => reject(error))
    })
 },

//Fonction qui permet d'editer une information
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


//----------------------------------------------- BCRYPT

//Fonction qui permet d'encrypter une information
hashBcryptPassword(params){
    return bcrypt.hashSync(params)
},

//Fonction qui permet de vérifier si une information encrypté est identique avec un autre passé en parametre
verifBcryptPassword(params, hash){
    if(bcrypt.compareSync(params, hash)) return true
    else return false
},


//----------------------------------------------- APIKEY

//Fonction qui permet de sauvegarde une api key dans une table
saveApiKey(api_key, id_user){
    const table = 'amil_api_key'
    return new Promise((resolve, reject) => {
        this.verifTable(table)
        .then((response) => {

            //Inscrit l'api en bdd
            console.log('------------')
            console.log('Request saveApiKey : ' + `INSERT INTO ${table}(api_key, id_user) VALUES ('${api_key}', '${id_user}')`)
            console.log('------------')
            DB.query(`INSERT INTO ${table}(api_key, id_user) VALUES ('${api_key}', '${id_user}')`,
                (err, result) => {
                    if(err) reject(err)
                    else resolve(true)
                })
        })
        .catch((error) => reject(error))
    })
},

//Fonction qui permet de générer une apikey
generateApiKEY(role){
    if(role === 'Admin'){
        let api_key = ""

        for (let i = 0; i < config.nbCaractApi; i++){
            api_key += config.caractPossible.charAt(Math.floor(Math.random() * config.caractPossible.length))
        }

        console.log('API_KEY_GENERATE : ', api_key)
        return api_key
    }else{
        return 'noapikey'
    }
},


//----------------------------------------------- TOKEN

//Fonction qui permet de générer un token
generateToken(){
    let token = ""

    for (let i = 0; i < config.nbCaractToken; i++){
        token += config.caractPossible.charAt(Math.floor(Math.random() * config.caractPossible.length))
    }

    console.log('TOKEN GENERATE: ', token)
    return token
},


//----------------------------------------------- OTHERS

//Fonction qui permet de verifier si une table existe
verifTable(table){
    return new Promise((resolve, reject) => {
        DB.query(`show tables from ${DB.config.database} like '${table}'`, (err, rows) => {
            if(err) reject(false)
            else if(rows.length >= 1) resolve(true)
            else reject(config.error.table) //La table n'a pas été trouvé
        })
    })
},

//Fonction qui permet de vérifier le nombre de parametre passez dans une fonction
verifParamsNumber(params, number){
    if(params === number) return true
        else return false
},


//------------------------------------------------------------------------------------------------------ END MODEL
}









