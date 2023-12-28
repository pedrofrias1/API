const dbConnection=require("../config/db");




//mostar jugadores.
const mostrarJugadores=(req,res)=>{
    dbConnection.query("SELECT * FROM plantel",(err,data)=>{
        if(data){
            res.send(data)
        }else{
            console.log(err);
        }
        
    })
    
};

//cargar jugadores
const cargarJugador=(req,res)=>{
   const{numCamiseta,nombre,apellido,puesto,edad}= req.body
   const imagen="http://localhost:4000/imagen/" + req.file.filename;

   

    dbConnection.query("INSERT INTO plantel(numCamiseta, nombre, apellido, puesto,edad,imagen)VALUES(?,?,?,?,?,?)",[numCamiseta, nombre, apellido, puesto,edad,imagen], (err,data)=>{
        if (data) {
            res.status(201).json({'message':"jugador cargado"})
        } else {
            res.status(500).json({"message":"error en carga"})
        }
    });
}

//editar jugadores

const modificarJugador=(req,res)=>{
    const id=req.params.id;
    const{numCamiseta,nombre,apellido,puesto,edad}= req.body
    

    dbConnection.query("UPDATE plantel SET numCamiseta=?, nombre=?, apellido=?, puesto=?,edad=?, WHERE id=? ",[numCamiseta, nombre, apellido, puesto,edad,id], (err,data)=>{
        if (data) {
            res.status(201).json({'message':"jugador modificado"})
        } else {
            res.status(500).json({"message":"error en carga"})
        }
    });
}





//eliminar jugadores
const eliminarJugador=(req,res)=>{

    const{id}=req.body;

    dbConnection.query("DELETE FROM plantel WHERE id=?",[id],(err,data)=>{
        if (data) {
            res.status(200).json({"message":"jugador eliminado"})
        } else {
            res.status(500).json({"message":"error en server"})
        }
    })


    // res.status(200).json({"menssage":"jugador eliminado"})
}

module.exports={mostrarJugadores,cargarJugador,eliminarJugador,modificarJugador}