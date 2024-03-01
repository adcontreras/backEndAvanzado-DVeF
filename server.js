// 1. importar Expressi, 
//2.crear app con xpress, 
//3.usar app.listen para abrir puertos

// 1. importar Express
import express from 'express';
import {connect} from './config.js'


connect();

//2.crear app con xpress, 
const api = express();

//3.usar app.listen para abrir puertos
api.listen(8000, ()=>{
    console.log('API corriendo en el puerto 8000');
});



