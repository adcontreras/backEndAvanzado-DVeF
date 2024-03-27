//va  a tener todas las operaciones que se tengan que hacer con el modelo "car"
 //1. importar el modelo, es importante la extencion del archivo .js

 import Car from '../models/Car.js'

//create
const createCar = async(req, res) =>{
    // {"brand":"Nissan",
    //  "carType":"Sedan",
    //  "color": "Red",
    //  "model":"Tsuru",
    //  "plate":"123-ABC",
    //  "vin":"80928JIJKKMB00",
    //  "version":"GSR 2000"
    //  }
    const newCar = await Car.create(req.body);
    res.json(newCar);

};

//read


//update
//delete

export {createCar}