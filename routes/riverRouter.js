const express=require('express');
const router=express.Router();
const update=require("../cargaImagen/multer");
const {jugadoresRiver,cargarRiver,eliminarRiver,modificarRiver}=require("../controllers/riverControllers")

router.get("/todosRiver",jugadoresRiver)
router.post("/cargarRiver",update.single("imagen"),cargarRiver);
router.put("/cargarRiver/:id",modificarRiver)
router.delete("/eliminarRiver",eliminarRiver)


module.exports=router;