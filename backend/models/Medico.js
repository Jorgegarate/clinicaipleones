import mongoose from "mongoose";
import  bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";
const medicoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require:true,
        unique:true,
        trim:true,
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type:String,
        default: generarId()

    },
    confirmado: {
        type: Boolean,
        default:false,
    }
});
//modificar la contraseña
medicoSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
});

//medico metodo de verificacion
medicoSchema.methods.comprobarPassword = async function (passwordFormulario) {
    
    return await bcrypt.compare(passwordFormulario, this.password );
}
const Medico = mongoose.model("medico", medicoSchema);
export default Medico;
