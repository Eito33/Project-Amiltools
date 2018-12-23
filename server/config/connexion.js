const mysql = require('mysql')

class MySQLConnect{
    constructor(){
      this.haveInstance = false
      this.objMysql = null
    }
    isConnected(){
      if(this.haveInstance){
        console.log('You are already connected to MySQL')
        return this.objMysql
      }else{
        console.log('You are connected on MySQL')
        this.haveInstance = true
        this.objMysql = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'amiltools'
        })
        return this.objMysql
      }
    }
}


module.exports = MySQLConnect








/*



*/

/*
On veut savoir si il y a déja une connexion a mysql 

1- On créer une class mysql
2- On créer une méthode mysql
  - Methode qui va vérifier si il y a déja une instance de mysql
      -> Si oui elle renvoie cette instance
      -> Si non elle créer une instance et la return



*/