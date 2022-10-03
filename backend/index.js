import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import conectarDB from "./config/db.js";
import medicoRoutes from "./routs/medicoRoutes.js";
import pacienteRoutes from "./routs/pacienteRoutes.js";
//
const app = express();
app.use(express.json());
dotenv.config();

/* conectarDB();
//ruta del front-end
const  dominiosPermitidos = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //El origin esta permitido
            callback(null, true)
            console.log('dominio', dominiosPermitidos )
        } else {
            callback(new Error('No permitido por Cors'))
        }
    }
    
}
app.use(cors(corsOptions)); */

app.use('/api/medicos', medicoRoutes);
app.use('/api/paciente', pacienteRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor funciona en el ${PORT}`)
})