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
