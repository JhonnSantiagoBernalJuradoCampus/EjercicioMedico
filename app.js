import express from "express";
import dotenv from "dotenv";
import storagePaciente from "./routers/paciente.js";
import storageCitas from "./routers/citas.js";
import storageMedicos from "./routers/medicos.js";
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/pacientes", storagePaciente);
appExpress.use("/citas", storageCitas);
appExpress.use("/medicos", storageMedicos);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));