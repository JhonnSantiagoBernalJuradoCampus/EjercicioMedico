import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();

const storageConsultorio = Router();
let con = undefined;

storageConsultorio.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myConfig);
    next();
})

storageConsultorio.get("/:id_paciente", (req,res)=>{
    con.query(
        /*sql */`SELECT consultorio.*, usuario.usu_id, usuario.usu_nombre, usuario.usu_primer_apellido_usuar, cita.cit_fecha FROM usuario INNER JOIN cita ON cita.cit_datosUsuario = usuario.usu_id INNER JOIN medico ON medico.med_nroMatriculaProfesional = cita.cit_medico INNER JOIN consultorio ON consultorio.cons_codigo = medico.med_consultorio WHERE usuario.usu_id = ${req.params.id_paciente};`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al recibir los datos")
            }
            res.send(JSON.stringify(data))
        }
    )
})
export default storageConsultorio;
