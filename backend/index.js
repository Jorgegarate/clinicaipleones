import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import medicoRoutes from "./routs/medicoRoutes.js";
import pacienteRoutes from "./routs/pacienteRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

app.use('/api/medicos', medicoRoutes);
app.use('/api/paciente', pacienteRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor funciona en el ${PORT}`)
})