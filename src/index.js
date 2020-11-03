const express = require('express');
const app = express();

//Configuracion
app.set('port',process.env.PORT || 8080);
app.set('json spaces', 2);

const morgan = require('morgan');
//comenzando morgan 
app.use(morgan('dev'));

//Soporte de datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use(require('./routes/index.js'));
//Ruta personalizada, archivo requerido
app.use('/api/movies',require('./routes/movies.js'));
app.use('/api/users',require('./routes/users.js'));

//comenzando el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Server en puerto ${8080}`);
});

