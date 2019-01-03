/*
    Server NodeJS
*/

console.log('------------');
console.log('Create Server...');
console.log('------------');

//Create
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')('dev')
const http = require('http')
const expressServer = new express()
const cors = require('cors')

expressServer.use(morgan)
expressServer.use(bodyParser.json({type: '*/*'}))
expressServer.use(bodyParser.urlencoded({ extended: true }))
expressServer.use(cors())

//Composant Configuration
const config = require('./config/config')
const router = require('./router')

//Listen
const server = http.createServer(expressServer)
server.listen(config.port, () => {
    console.log('------------');
    console.log('Server Start listen on  : ', config.port);
    console.log('Version : ', config.version)
    console.log('------------');
    router(expressServer)
})


