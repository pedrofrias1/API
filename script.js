// const validator = require('validator'); // traer paquete validator
// console.log(validator.isEmail('foo@bar.com'));//utilizar sus funciones ↑

//----------------------------------

require('dotenv').config();

const express = require('express');
const app = express(); //acceso a las funciones de express
const port = process.env.HOST || 4000;
const cors = require('cors');
const routes=require("./routes/jugadoresRoutes");
const router=require("./routes/riverRouter");

//coneccion a DB
require('./config/db')


// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));//datos enviados a la api.


app.use('/imagen',express.static("./imagenes"));

// vinculacion a las rutas
app.use('/',routes);
app.use('/',router);


app.listen(port,()=>{
  console.log("app corriendo en el puerto " + port);
});


// req -> peticion: head y body (en este caso es peticion GET solamente me va a mandar info en el head)
// res -> response -> respuesta que le vamos a devolver