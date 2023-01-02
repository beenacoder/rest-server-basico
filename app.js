
const Server = require('./models/server');

require('dotenv').config();

const server = new Server();

server.listen();







//-------Manera clasica de levantar un server en express

// require('dotenv').config();

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(process.env.PORT, ()=>{
//     console.log('Servidor corriendo en el puerto', process.env.PORT);
// });