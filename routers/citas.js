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
            res.send(JSON.stringify(data));
        }
    )
})

export default storageCitas;