import dotenv from "dotenv";
import mysql, { createPool } from "mysql2";
import { Router } from "express";

dotenv.config();

const storageCitas = Router();
let con = undefined;

storageCitas.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myConfig);
    next();
})

storageCitas.get("/", (req,res)=>{
    con.query(
        /*sql */`SELECT *FROM cita ORDER BY cit_fecha;`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data));
        }
    )
})

storageCitas.get("/proxima/:id_proxima", (req,res)=>{
    const {idPaciente} = req.params;
    con.query(
        /*sql */`SELECT cita.*, usuario.usu_id FROM cita INNER JOIN usuario on cita.cit_datosUsuario = usuario.usu_id WHERE usuario.usu_id = ${req.params.id_proxima} AND cita.cit_estadoCita = 1 ORDER BY cita.cit_fecha ASC;`,

        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data));
        }
    )
})

export default storageCitas;