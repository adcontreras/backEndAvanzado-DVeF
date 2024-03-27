import mongoose from "mongoose";

// que se necesita para hacer un modelo con mongoose
//1. Crear un schema (esqueleto)
//2. crear modelo, asignando un nombre


const carSchema = mongoose.Schema({
    //campo --> tipo de dato
    plate:{
        type:String,
        required: true,
    },
    model:String,
    brand:String,
    version:String,
    color:String,
    carType:String,
    vin:String,
});

//Nota importantísima:el nombre tiene que ser en singular y con mayúscula
// const Car = mongoose.model('Car', carSchema);
// export {Car}


//en lugar de poner las dos líneas de arriba, poder export por default 
export default mongoose.model('Car', carSchema);