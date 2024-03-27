// 1. importar Expressi, 
//2.crear app con xpress, 
//3.usar app.listen para abrir puertos

// 1. importar Express
import express from 'express';
import {connect} from './config.js'
import carRoutes from './routes/carRoutes.js';

connect();

//2.crear app con xpress, 
const api = express();

api.use(express.json());

//3.usar app.listen para abrir puertos
api.listen(8000, ()=>{
    console.log('API corriendo en el puerto 8000');
});
        //string nombre de la ruta 
api.get('/test', (req, res)=>{ // req y res son objetos
    res.send('Hola esto es una prueba')
})

api.use(carRoutes);



