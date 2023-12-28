const mysql2=require('mysql2');
const dbInfo={
    host:'localhost',
    user:'root',
    database:'jugadores'
}

const dbConnection=mysql2.createConnection(dbInfo);

dbConnection.connect((error)=>{
    if(error){
        if(error.code==='ER_BAD_DB_ERROR'){
            console.log("error con la coneccion DB: " + error.sqlMessage);
   }else{
    console.log(error);
   }
    }else{
        console.log("coneccion con DB mysql exitosa"); 
    }
   
});

module.exports=dbConnection