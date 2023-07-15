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

storageCitas.get("/:fecha", (req,res)=>{
    con.query(
        /*sql */`SELECT * FROM cita WHERE cit_fecha = "${req.params.fecha}"`,
        (err,data,fill)=>{
            if(err){
                res.status(500).end("Error al traer los datos")
            }
            res.send(JSON.stringify(data))
        }
    )
})

storageCitas.get("/proxima/:id_proxima", (req,res)=>{
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

storageCitas.get("/medico/:fecha", (req,res)=>{
    con.query(
        /*sql */`SELECT cita.* FROM cita WHERE cita.cit_medico = ${req.body.id} AND cita.cit_fecha LIKE "${req.params.fecha}";`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data))
        }
    )
})

storageCitas.get("/genero/:genero", (req,res)=>{
    con.query(
        /*sql */`SELECT  cita.*, genero.gen_nombre, usuario.usu_nombre, usuario.usu_primer_apellido_usuar, estado_cita.estcita_nombre FROM cita INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id INNER JOIN genero ON usuario.usu_genero = genero.gen_id INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id WHERE genero.gen_id = ${req.params.genero} AND estado_cita.estcita_id = 1;`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data))
        }
    )
})

export default storageCitas;