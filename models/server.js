const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Middlewares    
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }


    middlewares(){
        //Home
        this.app.use(express.static('public'))
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body (JSON)
        this.app.use(express.json());
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;
