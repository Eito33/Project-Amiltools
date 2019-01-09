const Model = require('../models/main_model')
const UserModel = require('../models/user_model')
const config = require('../config/config.json')


//Fonction qui gère que l'utilisateur qui utilise une route soit bien enregistrer
exports.secure_auth_api = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const api_key = req.params.api_key.split('=')
        if(api_key[1] === 'noapikey'){
            console.log('SECURE_AUTH_API = NO API KEY')
            req.informationsUser = "noapikey"
            next()
        }else{
            //On recherche dans la BDD amil_user si APIKEY exist
            Model.findMainModel('amil_user', api_key[1], 'api_key', '*')
            .then((response) => {

                //Si elle existe on enregistre les informations dans req.informationsUser
                req.informationsUser = response[0]

                //On lance une recherche par id, api_key afin de comparer les resultats dans req.inforationsUser et ceux dans la table amil_api_key
                Model.findMainModel('amil_api_key', req.informationsUser.id, 'id_user', 'id_user, api_key')
                .then((response) => {
                    //Si tout est bon on valide l'api key
                    if(req.informationsUser.id === response[0].id_user && req.informationsUser.api_key === response[0].api_key){
                        console.log('SECURE_AUTH_API = TRUE')
                        next()
                    }else{
                        res.status(401).json(
                            {
                                "error": false,
                                "message": config.error.api_key_invalid
                            }
                        )
                    }
                })
                .catch((error) => console.log(error))
            })
            .catch((error) => {
                console.log('SECURE_AUTH_API = FALSE')
                let value = 15
                res.status(401).json(
                    {
                        "error": false,
                        "message": config.error.api_key_not_exist
                    }
                )
            })
        }
    })
}

//Fonction qui vérifie que l'on est bien Admin
exports.secure_admin_api = (req, res, next) => {
    return new Promise((resolve, reject) => {
        if(req.informationsUser === 'noapikey'){
            console.log('SECURE_ROLE_API = NO API KEY')
            next()
        }else{
            //On récupére les informations du grade
            UserModel.roleUserModel(req.informationsUser.role)
            .then((response) => {
                if(response.value >= config.valueMinAdmin){
                    console.log('SECURE_ROLE_API = TRUE')
                    next()
                }else{
                    console.log('SECURE_ROLE_API = FALSE')
                    res.status(401).json(
                        {
                            "error": false,
                            "message": config.error.api_key_not_allowed
                    })
                }
            })
        }
    })
}

//Fonction qui vérifie que l'on est bien Manager
exports.secure_manager_api = (req, res, next) => {
    return new Promise((resolve, reject) => {
        //On récupére les informations du grade
        UserModel.roleUserModel(req.informationsUser.role) 
            .then((response) => {
                if(response.value >= config.valueMinManager){
                    console.log('SECURE_ROLE_API = TRUE')
                    next()
                }else{
                    console.log('SECURE_ROLE_API = FALSE')
                    res.status(401).json(
                        {
                            "error": false,
                            "message": config.error.api_key_not_allowed
                    })
                }
            })
    })
}