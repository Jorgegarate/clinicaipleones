import mongoose from "mongoose";
const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    rut: {
        type:String,
        required:true
    },
    contacto: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    emailcontacto: {
        type:String,
        required:true,
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    sintomas: {
        type: String,
        requerid:true,
    },
    medico: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'medico',
    },

},
{
    timestamps: true,
}
);
const Paciente = mongoose.model("paciente", pacienteSchema);
export default Paciente;