const dbConnection=require("../config/db");




//mostar jugadores.
const jugadoresRiver=(req,res)=>{
    dbConnection.query("SELECT * FROM river",(err,data)=>{
        if(data){
            res.send(data)
        }else{
            console.log(err);
        }
        
    })
    
};

//cargar jugadores
const cargarRiver=(req,res)=>{
   const{numCamiseta,nombre,apellido,puesto,edad}= req.body
   const imagen="http://localhost:4000/imagen/" + req.file.filename;

   

    dbConnection.query("INSERT INTO river(numCamiseta, nombre, apellido, puesto,edad,imagen)VALUES(?,?,?,?,?,?)",[numCamiseta, nombre, apellido, puesto,edad,imagen], (err,data)=>{
        if (data) {
            res.status(201).json({'message':"jugador cargado"})
        } else {
            res.status(500).json({"message":"error en carga"})
        }
    });
}

//editar jugadores

const modificarRiver=(req,res)=>{
    const id=req.params.id;
    const{numCamiseta,nombre,apellido,puesto,edad}= req.body
    

    dbConnection.query("UPDATE river SET numCamiseta=?, nombre=?, apellido=?, puesto=?,edad=?, WHERE id=? ",[numCamiseta, nombre, apellido, puesto,edad,id], (err,data)=>{
        if (data) {
            res.status(201).json({'message':"jugador modificado"})
        } else {
            res.status(500).json({"message":"error en carga"})
        }
    });
}





//eliminar jugadores
const eliminarRiver=(req,res)=>{

    const{id}=req.body;

    dbConnection.query("DELETE FROM river WHERE id=?",[id],(err,data)=>{
        if (data) {
            res.status(200).json({"message":"jugador eliminado"})
        } else {
            res.status(500).json({"message":"error en server"})
        }
    })


    // res.status(200).json({"menssage":"jugador eliminado"})
}

module.exports={jugadoresRiver,cargarRiver,eliminarRiver,modificarRiver}