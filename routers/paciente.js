import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();

const storagePaciente = Router();
let con = undefined;

storagePaciente.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.DB_CONFIG);
    console.log(myConfig)
    con = mysql.createPool(myConfig);
    next();
})

storagePaciente.get('/', (req,res)=>{
    /*sql*/`SELECT * FROM usuario ORDER BY usu_nombre ASC`,
    (err,data,fill)=>{
        if(err){
            console.log(err);
        }
        res.send(JSON.stringify(data));
    }
})

export default storagePaciente;