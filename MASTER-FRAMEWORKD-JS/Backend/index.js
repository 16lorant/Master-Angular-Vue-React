'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;
//mongoose.set('useFindAndModify',false);
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser:true}).then(()=>{
    console.log('la conexion a la base de dato fue exitoso y correcta!!');
    
    //Crear servidor y ponerme a escuchar peticiones HTTP
    app.listen(port,()=>{
        console.log('Servidor corriendo en el http://localhost:'+port);
    })

})