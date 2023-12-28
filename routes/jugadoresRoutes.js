const express=require('express');
const route=express.Router();
const update=require("../cargaImagen/multer");
const {mostrarJugadores,cargarJugador,eliminarJugador,modificarJugador}=require("../controllers/jugadorControllers")

route.get("/todosLosJugadores",mostrarJugadores)
route.post("/cargarJugador",update.single("imagen"),cargarJugador);
route.put("/cargarJugador/:id",modificarJugador)
route.delete("/eliminarJugador",eliminarJugador)


module.exports=route;