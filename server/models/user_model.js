/*
#NAME : UserModel
#DESCRIPTION :
    UserModel : UserModel est le model qui gère les utilisateurs

    #Require:
        -> Model ::
        -> mysqlConnect ::
        -> connect ::
        -> DB ::
        -> config ::

    #Functions:

        #FIND:
            -> findAllUserModel(table) ::
            -> findOneUserModel(table, req, search) ::
            -> findUserProfileModel(table, req) ::

        #ADDUSER:
            -> addUserModel(table, req) ::
            -> defineRole(role) ::
            -> subscribeUserInBDD(table, firstname, lastname, mail, password, token, role, team, api_key,cb) ::
            -> subscribeApiKey(api, cb) ::

        #Control User
            -> updateUserModel(table, paramsArray, search) ::
            -> deleteUserModel(table, id) ::
            -> generateApiKeyUserModel() ::

        #Log User
            -> logUserModel(table, req) ::
            -> logUserWithTokenModel(table, req) ::

        #Role
            -> roleUserModel(req) ::
*/




//----------------------------------------------- REQUIRE
const Model = require('./main_model')
const mysqlConnect = require('../config/connexion');
const connect = new mysqlConnect()
const DB = connect.isConnected()
const config = require('../config/config')


//------------------------------------------------------------------------------------------------------ START MODEL

module.exports = {


//----------------------------------------------- FIND

//Fonction qui renvoie l'ensemble des informations de tous les utilisateurs
findAllUserModel(table){
    return new Promise((resolve, reject) => {
        Model.findAllMainModel(table)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

findAllUserModelNOAPIKEY(table){
    return new Promise((resolve, reject) => {
        Model.findAllMainModel(table, 'firstname, lastname, mail, job, team, grade, biographie')
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//Fonction qui recherche un utilisateur et renvoie c'est informations
findOneUserModel(table, req){
    return new Promise((resolve, reject) => {
        Model.findMainModel(table, req)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

findOneUserModelNOAPIKEY(table, req){
    return new Promise((resolve, reject) => {
        Model.findMainModel(table, req, 'id', 'firstname, lastname, mail, job, team, grade, biographie')
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//Fonction qui recherche un utilisateur et renvoie c'est informations
findUserProfileModel(table, req){
    return new Promise((resolve, reject) => {
        //Effectue une requete en cherchant par nom et prenom
        Model.findMainModel(table, req[0] + "' AND lastname='" + req[1] + "", 'firstname', 'id, firstname, lastname, mail, biographie, job, role, team, api_key')
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//Fonction qui recherche un utilisateur en BDD
searchUserModel(table, params, params2 = ''){
    return new Promise((resolve, reject) => {
        console.log('------------')
        console.log('Request searchUser : ' + `SELECT firstname, lastname, role from ${table} WHERE CONCAT(lastname," ",firstname) LIKE '%${params}% %${params2}%' OR CONCAT(firstname," ",lastname) LIKE '%${params}% %${params2}%'`)
        console.log('------------')
        DB.query(`SELECT firstname, lastname, role from ${table} WHERE CONCAT(lastname," ",firstname) LIKE '%${params}% %${params2}%' OR CONCAT(firstname," ",lastname) LIKE '%${params}% %${params2}%'`,
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

//----------------------------------------------- ADDUSER

//Fonction qui gère l'ajout d'un utilisateur en base de données
addUserModel(table, req){
    return new Promise((resolve, reject) => {
        Model.verifTable(table)
        .then((response) => {
            Model.findMainModel(table, req.mail, 'mail') //On recherche si le mail existe en BDD
            .then((response) => {
                if(response.isEmpty){ //Si la reponse est vide
                    //Contient le password hash
                    const passwordHash = Model.hashBcryptPassword(req.password)
                    //Contient le token
                    const token = Model.generateToken()
                    //Contient l'api_key
                    const api_key = Model.generateApiKEY(req.role)
                    //Contient le grade
                    const role = this.defineRole(req.role)

                    //Fonction qui va permettre d'ajouter un utilisateur en BDD
                    this.subscribeUserInBDD(table, req.firstname, req.lastname, req.mail, passwordHash, token, role, api_key, (response)=>{
                        if(response){
                            resolve(config.success.useradd)
                        }else{
                            reject(config.error.notadduser)
                        }
                    })
                }else{ //Si la réponse n'est pas vide on renvoie l'erreur
                    reject(config.error.mail)
                }
            })
        })
        .catch((error) => reject(error)) //Erreur de table
    })
},

//Fonction qui permet de définir le role
defineRole(role){
    if(role === undefined){
        return 'User'
    }else{
        return 'Admin'
    }
},

 //Fonction qui permet d'ajouter un utilisateur en BDD
 subscribeUserInBDD(table, firstname, lastname, mail, password, token, role, api_key, cb){
    console.log('------------');
    console.log('Request SubscribeUSer : ' + `INSERT INTO ${table}(firstname, lastname, mail, password, token, role, api_key)
    VALUES ('${firstname}', '${lastname}', '${mail}', '${password}', '${token}', '${role}', '${api_key}')`);
    console.log('------------');

    //Inscrit l'user en bdd
    DB.query(`INSERT INTO ${table}(firstname, lastname, mail, password, token, role, api_key)
    VALUES ('${firstname}', '${lastname}', '${mail}', '${password}', '${token}', '${role}', '${api_key}')`,
    (err, result) => {
        if(err) {
            console.log('Error: ', err)
            reject(config.error.notadduser) //On n'inscrit pas l'user en BDD suite a une erreur
        }
        else {

            //On enregistre ou non l'api key suivant si on est admin ou non
            if(api_key != undefined && api_key != 'noapikey'){
                //Si APIKEY est différents de undefined alors on enregistre dans amil_api_key
                this.subscribeApiKey(api_key, (response) => {
                    cb(response)
                })
            }else cb(true)
        }
    })
},

//Fonction qui sauvegarde l'api key en BDD
subscribeApiKey(api, cb){
    let api_key = api
    //Nouvelle Promesse pour attendre l'execution
    new Promise((resolve, reject) => {
        Model.lastIDMainModel('amil_user')
        .then((response) => {

            //Api key est bien sauvegarder
            Model.saveApiKey(api_key, response)
            cb(true)
        })
        .catch((error) => reject(error)) //Erreur de sauvegarde de l'api key
    })
},


//----------------------------------------------- ControlUser

//Fonction qui permet la modification d'utilisateur en BDD
updateUserModel(table, paramsArray, search){
    return new Promise((resolve, reject) => {
        if(paramsArray['password'] != undefined){
            paramsArray['password'] = Model.hashBcryptPassword(paramsArray['password'])
        }
        Model.updateMainModel(table, paramsArray, search)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//Fonction qui permet la modification d'utilisateur en BDD
updateUserModelNOAPIKEY(table, paramsArray, search){
    return new Promise((resolve, reject) => {
        if(paramsArray['password'] != undefined){
            paramsArray['password'] = Model.hashBcryptPassword(paramsArray['password'])
        }
        for(let i = 0; i <= config.notavailablefromupdate.length; i++){
            if(paramsArray.hasOwnProperty(config.notavailablefromupdate[i])){
                reject(config.error.api_key_not_allowed)
            }
        }

        Model.updateMainModel(table, paramsArray, search)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//Fonction qui permet la supression d'utilisateur en BDD
deleteUserModel(table, id){
    return new Promise((resolve, reject) => {
        Model.deleteModel(table, id)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

deleteApiKeyUserModel(table, id){
    return new Promise((resolve, reject) => {
        Model.deleteModel(table, id, 'id_user')
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//Fonction qui genere une api key pour un utilisateur
generateApiKeyUserModel(id_user){

    return new Promise((resolve, reject) => {
        const api_key = {"api_key": Model.generateApiKEY('Admin')}
        Model.updateMainModel('amil_user', api_key, id_user)
        .then((response) => {
            Model.findMainModel('amil_api_key', id_user, 'id_user')
            .then((response) => {
                if(response.isEmpty){
                    Model.saveApiKey(api_key['api_key'], id_user)
                    .then((response) => resolve(api_key))
                    .catch((error) => reject(config.error.api_key_not_generate))
                }else{
                    Model.updateMainModel('amil_api_key', api_key, id_user, 'id_user')
                    .then((response) => resolve(api_key))
                    .catch((error) => reject(config.error.api_key_not_generate))
                }
            })
        })
    })

    /*
        Generer une api key
        enregistrer l'api key dans la table amil_user et dans la table amil_api_key
    */
},

//----------------------------------------------- LogUser

//Fonction qui permet de connecter un utilisateur
logUserModel(table, req){
    return new Promise((resolve, reject) => {
        Model.findMainModel(table, req.mail, 'mail') //On fait une recherche par e-mail
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

//Fonction qui connecte un utilisateur avec sont token
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


//----------------------------------------------- Role

//Fonction qui renvoie les informations du role de la table amil_grade
roleUserModel(req){
    return new Promise((resolve, reject) => {
        Model.findAllMainModel('amil_role')
        .then((response) => {
            for(let i = 0; i !== response.length; i++){ //On boucle jusqu'a trouver le bon grade
                if(response[i].role === req){
                    resolve(response[i])
                }
            }
        })
        .catch((error) => reject(error))
    })
},

//Fonction qui renvoie l'ensemble des informations de tous les utilisateurs
allRoleUserModel(table){
    return new Promise((resolve, reject) => {
        Model.findAllMainModel(table)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
},

//------------------------------------------------------------------------------------------------------ END MODEL
}