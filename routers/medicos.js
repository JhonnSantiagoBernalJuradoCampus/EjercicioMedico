import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();

const storageMedicos = Router();
let con = undefined;

storageMedicos.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myConfig);
    next();
})

storageMedicos.get("/:especialidad", (req,res)=>{
    con.query(
        /*sql */`SELECT medico.med_nroMatriculaProfesional AS matricula, medico.med_nombrecompleto as nombre, consultorio.cons_nombre as consultorio, especialidad.esp_nombre as especialidad FROM medico INNER JOIN consultorio ON consultorio.cons_codigo = medico.med_consultorio INNER JOIN especialidad ON esp_id = medico.med_especialidad WHERE especialidad.esp_nombre = "${req.params.especialidad}"`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(data);
        }
    )
})

export default storageMedicos;